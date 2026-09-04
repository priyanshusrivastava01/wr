/* ============================================
   FORM 1 CONTROLLER: SPACE INQUIRY
   ============================================ */

import mongoose from 'mongoose';
import { SpaceInquiry } from '../models/SpaceInquiry.js';

/**
 * @desc    Submit Space Inquiry (Form 1)
 * @route   POST /api/space-inquiries
 */
export const createSpaceInquiry = async (req, res, next) => {
  console.log(`\n📥 [FORM 1 REQUEST] POST /api/space-inquiries`);
  console.log('   Payload:', JSON.stringify(req.body));

  try {
    const { fullName, name, phone, email, companyName, company, requiredSpace, spaceRequirement, message } = req.body;

    const resolvedName = (fullName || name || '').trim();
    const resolvedCompany = (companyName || company || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedSpace = (requiredSpace || spaceRequirement || '').trim();
    const resolvedMessage = (message || '').trim();

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

    // 3. Validate Email (if provided)
    if (resolvedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resolvedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // 4. Check DB Connection
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is currently connecting. Please try again in a few moments.',
      });
    }

    // 5. Save in spaceinquiries collection
    const spaceInquiry = await SpaceInquiry.create({
      fullName: resolvedName.slice(0, 100),
      phone: cleanPhone,
      email: resolvedEmail,
      companyName: resolvedCompany.slice(0, 150),
      requiredSpace: resolvedSpace.slice(0, 100),
      message: resolvedMessage.slice(0, 2000),
      status: 'NEW',
    });

    console.log(`✓ [Saved in Collection: spaceinquiries] ID: ${spaceInquiry._id} | Name: ${spaceInquiry.fullName}`);

    return res.status(201).json({
      success: true,
      message: 'Your warehouse space inquiry has been submitted successfully. Our team will contact you soon.',
      data: {
        id: spaceInquiry._id,
        collection: 'spaceinquiries',
        createdAt: spaceInquiry.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [Error in createSpaceInquiry]:', error);
    next(error);
  }
};

/**
 * @desc    Get all Space Inquiries
 * @route   GET /api/space-inquiries
 */
export const getSpaceInquiries = async (req, res, next) => {
  try {
    const list = await SpaceInquiry.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ success: true, count: list.length, data: list });
  } catch (err) {
    next(err);
  }
};
