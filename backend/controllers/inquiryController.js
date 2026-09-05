/* ============================================
   FORM 3 CONTROLLER: INQUIRY / CONTACT FORM
   Target Collection: inquiries
   ============================================ */

import mongoose from 'mongoose';
import { Inquiry } from '../models/Inquiry.js';
import { connectDB } from '../config/db.js';
import { sendInquiryNotification } from '../services/emailService.js';

/**
 * Generates a human-friendly unique reference number
 * Example: VAR-INQ-M4K9X-8241
 */
function generateReferenceNumber() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `VAR-INQ-${timestamp}-${randomSuffix}`;
}

/**
 * @desc    Submit Space / Contact Inquiry (Form 3)
 * @route   POST /api/inquiries
 */
export const createInquiry = async (req, res, next) => {
  console.log(`\n📥 [FORM 3 REQUEST] POST /api/inquiries`);
  console.log('   Payload:', JSON.stringify(req.body));

  try {
    const {
      fullName,
      phone,
      email,
      companyName,
      requiredWarehouseSpace,
      requiredSpace,
      storageRequirement,
      timeline,
      message,
      sourcePage,
    } = req.body;

    // ── 1. Sanitize & Normalize Inputs ──
    const resolvedName = (fullName || '').trim();
    const resolvedCompany = (companyName || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedPhone = (phone || '').toString().trim();
    const resolvedSpace = (requiredWarehouseSpace || requiredSpace || '').trim();
    const resolvedStorage = (storageRequirement || message || '').trim();
    const resolvedTimeline = (timeline || '').trim();
    const resolvedMessage = (message || resolvedStorage || '').trim();
    const resolvedSource = (sourcePage || 'HOME_CONTACT').trim();

    // ── 2. Field Validations ──

    // Full Name
    if (!resolvedName || resolvedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).',
      });
    }

    // Phone Number (10-digit Indian Mobile)
    if (!resolvedPhone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your 10-digit mobile number.',
      });
    }

    const cleanPhone = resolvedPhone.replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
      });
    }

    // Email (Optional, but validated if supplied)
    if (resolvedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resolvedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // ── 3. Server-Generated System Values ──
    const referenceNumber = generateReferenceNumber();
    const status = 'NEW';

    // ── 4. Ensure DB Connection is Active ──
    if (mongoose.connection.readyState !== 1) {
      console.log('⚠️ [MongoDB] Database was not connected on request, attempting connection...');
      await connectDB();
    }

    // ── 5. Save Document into 'inquiries' Collection ──
    const inquiry = await Inquiry.create({
      fullName: resolvedName.slice(0, 100),
      phone: cleanPhone,
      email: resolvedEmail,
      companyName: resolvedCompany.slice(0, 150),
      requiredWarehouseSpace: resolvedSpace.slice(0, 100),
      storageRequirement: resolvedStorage.slice(0, 2000),
      timeline: resolvedTimeline.slice(0, 200),
      message: resolvedMessage.slice(0, 2000),
      referenceNumber,
      status,
      sourcePage: resolvedSource.slice(0, 50),
    });

    console.log(`✅ [MongoDB] Saved to inquiries collection with ID: ${inquiry._id} (Ref: ${referenceNumber})`);

    // Trigger Admin Email Notification via Resend (Non-blocking / safe)
    sendInquiryNotification(inquiry).catch((emailErr) => {
      console.error('⚠️ [Email Notification Warning]:', emailErr);
    });

    // ── 6. Return Clean Success Response ──
    return res.status(201).json({
      success: true,
      message: 'Your warehouse space inquiry has been received. Our team will contact you shortly.',
      data: {
        id: inquiry._id,
        referenceNumber: inquiry.referenceNumber,
        fullName: inquiry.fullName,
        phone: inquiry.phone,
        companyName: inquiry.companyName,
        requiredWarehouseSpace: inquiry.requiredWarehouseSpace,
        status: inquiry.status,
        collection: 'inquiries',
        createdAt: inquiry.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [FORM 3 ERROR] Error in createInquiry:', error);

    // Mongoose Validation Error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(' '),
      });
    }

    return res.status(500).json({
      success: false,
      message: 'An error occurred while saving your inquiry. Please try again.',
    });
  }
};

/**
 * @desc    Get all inquiries (Admin / Monitoring)
 * @route   GET /api/inquiries
 */
export const getInquiries = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }

    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    return res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    next(error);
  }
};
