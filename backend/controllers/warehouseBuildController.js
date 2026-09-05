/* ============================================
   FORM 2 CONTROLLER: WAREHOUSE BUILD REQUEST
   ============================================ */

import mongoose from 'mongoose';
import { WarehouseBuildRequest } from '../models/WarehouseBuildRequest.js';
import { connectDB } from '../config/db.js';
import { sendWarehouseBuildNotification } from '../services/emailService.js';

/**
 * @desc    Submit Warehouse Build Request (Form 2)
 * @route   POST /api/warehouse-build-requests
 */
export const createWarehouseBuildRequest = async (req, res, next) => {
  console.log(`\n📥 [FORM 2 REQUEST] POST /api/warehouse-build-requests`);
  console.log('   Payload:', JSON.stringify(req.body));

  try {
    const {
      fullName,
      name,
      phone,
      email,
      companyName,
      company,
      preferredLocation,
      location,
      landAvailability,
      hasLand,
      plotArea,
      requiredSpace,
      space,
      intendedUsage,
      useCase,
      projectNotes,
      requirement,
      message,
    } = req.body;

    const resolvedName = (fullName || name || '').trim();
    const resolvedCompany = (companyName || company || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedLocation = (preferredLocation || location || '').trim();
    const resolvedLand = (landAvailability || hasLand || '').trim();
    const resolvedPlot = (plotArea || '').trim();
    const resolvedSpace = (requiredSpace || space || '').trim();
    const resolvedUsage = (intendedUsage || useCase || '').trim();
    const resolvedNotes = (projectNotes || requirement || message || '').trim();

    // 1. Validate Full Name
    if (!resolvedName || resolvedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).',
      });
    }

    // 2. Validate Phone
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your 10-digit mobile number.',
      });
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
      });
    }

    // 3. Validate Location & Land Status
    if (!resolvedLocation) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your project location / city.',
      });
    }

    if (!resolvedLand) {
      return res.status(400).json({
        success: false,
        message: 'Please select whether you own commercial land.',
      });
    }

    // 4. Validate Email (if provided)
    if (resolvedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resolvedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // 5. Ensure DB Connection is active
    if (mongoose.connection.readyState !== 1) {
      console.log('⚠️ [MongoDB] Database was not connected on request, attempting connection...');
      await connectDB();
    }

    // 6. Save in warehousebuildrequests collection
    const buildRequest = await WarehouseBuildRequest.create({
      fullName: resolvedName.slice(0, 100),
      phone: cleanPhone,
      email: resolvedEmail,
      companyName: resolvedCompany.slice(0, 150),
      preferredLocation: resolvedLocation.slice(0, 150),
      landAvailability: resolvedLand.slice(0, 100),
      plotArea: resolvedPlot.slice(0, 100),
      requiredSpace: resolvedSpace.slice(0, 100),
      intendedUsage: resolvedUsage.slice(0, 150),
      projectNotes: resolvedNotes.slice(0, 2000),
      status: 'NEW',
    });

    console.log(`✓ [Saved in Collection: warehousebuildrequests] ID: ${buildRequest._id} | Location: ${buildRequest.preferredLocation}`);

    // Trigger Admin Email Notification via Resend (Non-blocking / safe)
    sendWarehouseBuildNotification(buildRequest).catch((emailErr) => {
      console.error('⚠️ [Email Notification Warning]:', emailErr);
    });

    return res.status(201).json({
      success: true,
      message: 'Your warehouse project requirement has been submitted. Our development team will contact you shortly.',
      data: {
        id: buildRequest._id,
        collection: 'warehousebuildrequests',
        createdAt: buildRequest.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [Database Save Error in createWarehouseBuildRequest]:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Unable to save your project requirement at this moment. Please try again or reach out directly on WhatsApp.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

/**
 * @desc    Get all Warehouse Build Requests
 * @route   GET /api/warehouse-build-requests
 */
export const getWarehouseBuildRequests = async (req, res, next) => {
  try {
    const list = await WarehouseBuildRequest.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ success: true, count: list.length, data: list });
  } catch (err) {
    next(err);
  }
};
