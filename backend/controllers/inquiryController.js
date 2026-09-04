/* ============================================
   INQUIRY CONTROLLER
   ============================================ */

import mongoose from 'mongoose';
import { Inquiry } from '../models/Inquiry.js';

/**
 * @desc    Submit a new warehouse space or build inquiry
 * @route   POST /api/inquiries, POST /api/space-inquiry, POST /api/warehouse-build
 * @access  Public
 */
export const createInquiry = async (req, res, next) => {
  console.log(`\n📥 [API Request] ${req.method} ${req.originalUrl}`);
  console.log('   Payload Received:', JSON.stringify(req.body));

  try {
    const {
      fullName,
      name,
      companyName,
      company,
      phone,
      email,
      warehouseRequirement,
      enquiryType,
      requiredSpace,
      spaceRequirement,
      preferredLocation,
      location,
      landAvailability,
      hasLand,
      plotArea,
      message,
      requirement,
      sourcePage,
    } = req.body;

    // 1. Resolve field aliases
    const resolvedName = (fullName || name || '').trim();
    const resolvedCompany = (companyName || company || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedRequirement = (warehouseRequirement || enquiryType || 'Warehouse Space').trim();
    const resolvedSpace = (requiredSpace || spaceRequirement || '').trim();
    const resolvedLocation = (preferredLocation || location || 'Gorakhpur, Uttar Pradesh').trim();
    const resolvedLand = (landAvailability || hasLand || '').trim();
    const resolvedPlot = (plotArea || '').trim();
    const resolvedMessage = (message || requirement || '').trim();
    const resolvedSource = (sourcePage || 'DIRECT').trim();

    // 2. Validate Full Name
    if (!resolvedName || resolvedName.length < 2) {
      console.warn('❌ [Validation Failed] Missing or too short full name.');
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).',
      });
    }

    // 3. Validate Indian Mobile Number (10 digits starting with 6,7,8,9)
    if (!phone) {
      console.warn('❌ [Validation Failed] Missing phone number.');
      return res.status(400).json({
        success: false,
        message: 'Please provide your 10-digit mobile number.',
      });
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      console.warn(`❌ [Validation Failed] Invalid phone format: "${phone}" -> "${cleanPhone}"`);
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
      });
    }

    // 4. Validate Email (if provided)
    if (resolvedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resolvedEmail)) {
      console.warn(`❌ [Validation Failed] Invalid email format: "${resolvedEmail}"`);
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // 5. Check Database Connection
    if (mongoose.connection.readyState !== 1) {
      console.error('❌ [Database Unavailable] Mongoose readyState is not connected.');
      return res.status(503).json({
        success: false,
        message: 'Database service is currently connecting. Please try again in a few moments.',
      });
    }

    // 6. Create and Save in MongoDB Atlas
    const inquiry = await Inquiry.create({
      fullName: resolvedName.slice(0, 100),
      companyName: resolvedCompany.slice(0, 150),
      phone: cleanPhone,
      email: resolvedEmail,
      warehouseRequirement: resolvedRequirement.slice(0, 100),
      requiredSpace: resolvedSpace.slice(0, 100),
      preferredLocation: resolvedLocation.slice(0, 150),
      landAvailability: resolvedLand.slice(0, 50),
      plotArea: resolvedPlot.slice(0, 100),
      message: resolvedMessage.slice(0, 2000),
      sourcePage: resolvedSource.slice(0, 50),
      status: 'NEW',
    });

    console.log(`✓ [MongoDB Atlas Saved] Document ID: ${inquiry._id} | Name: ${inquiry.fullName} | Phone: ${inquiry.phone}`);

    // 7. Return user-friendly success response
    return res.status(201).json({
      success: true,
      message: 'Your warehouse inquiry has been submitted successfully. Our team will contact you soon.',
      data: {
        id: inquiry._id,
        createdAt: inquiry.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [Server Error in createInquiry]:', error);
    next(error);
  }
};

/**
 * @desc    Get all inquiries with filtering & pagination
 * @route   GET /api/inquiries
 * @access  Private / Future Admin
 */
export const getInquiries = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is currently unavailable.',
      });
    }

    const { status, search, page = 1, limit = 20 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { companyName: { $regex: search, $options: 'i' } },
      ];
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = Math.min(parseInt(limit, 10) || 20, 100);
    const skip = (pageNum - 1) * limitNum;

    const [inquiries, total] = await Promise.all([
      Inquiry.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum).lean(),
      Inquiry.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      count: inquiries.length,
      total,
      pages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      data: inquiries,
    });
  } catch (error) {
    next(error);
  }
};
