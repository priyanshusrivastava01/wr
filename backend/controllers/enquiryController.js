/* ============================================
   ENQUIRY CONTROLLERS
   ============================================ */

import mongoose from 'mongoose';
import { Enquiry } from '../models/Enquiry.js';

/**
 * @desc    Submit a new website enquiry / requirement
 * @route   POST /api/enquiries
 * @access  Public
 */
export const createEnquiry = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      email,
      companyName,
      enquiryType,
      spaceRequirement,
      location,
      budget,
      timeline,
      useCase,
      message,
      sourcePage,
    } = req.body;

    // 1. Validate required Name
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid full name (at least 2 characters).',
      });
    }

    // 2. Sanitize and validate 10-digit Indian mobile number
    if (!phone || typeof phone !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Please provide your 10-digit mobile number.',
      });
    }

    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
      });
    }

    // 3. Validate email if provided
    let cleanEmail = '';
    if (email && typeof email === 'string' && email.trim() !== '') {
      cleanEmail = email.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address.',
        });
      }
    }

    // 4. Validate enquiryType
    const allowedTypes = [
      'WAREHOUSE_SPACE',
      'BUILD_A_WAREHOUSE',
      'GENERAL_ENQUIRY',
      'SITE_VISIT',
      'OTHER',
    ];
    const finalType = enquiryType && allowedTypes.includes(enquiryType)
      ? enquiryType
      : 'GENERAL_ENQUIRY';

    // 5. Validate sourcePage
    const allowedSources = [
      'HOME',
      'WAREHOUSE',
      'SPACE_PRICING',
      'BUILD_A_WAREHOUSE',
      'CONTACT',
      'DIRECT',
    ];
    const finalSource = sourcePage && allowedSources.includes(sourcePage)
      ? sourcePage
      : 'DIRECT';

    // 6. Check database connection status before saving
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is currently unavailable. Please verify MONGODB_URI in backend/.env.',
      });
    }

    // 7. Create and persist enquiry in MongoDB Atlas
    const enquiry = await Enquiry.create({
      name: name.trim().slice(0, 100),
      phone: cleanPhone,
      email: cleanEmail,
      companyName: typeof companyName === 'string' ? companyName.trim().slice(0, 150) : '',
      enquiryType: finalType,
      spaceRequirement: typeof spaceRequirement === 'string' ? spaceRequirement.trim().slice(0, 100) : '',
      location: typeof location === 'string' ? location.trim().slice(0, 150) : '',
      budget: typeof budget === 'string' ? budget.trim().slice(0, 100) : '',
      timeline: typeof timeline === 'string' ? timeline.trim().slice(0, 100) : '',
      useCase: typeof useCase === 'string' ? useCase.trim().slice(0, 200) : '',
      message: typeof message === 'string' ? message.trim().slice(0, 2000) : '',
      sourcePage: finalSource,
      status: 'NEW',
    });

    console.log(`✓ [Enquiry Created] ID: ${enquiry._id} | Type: ${enquiry.enquiryType} | Name: ${enquiry.name} | Phone: ${enquiry.phone}`);

    // 8. Return standard success response
    return res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted successfully. Our team will contact you soon.',
      data: {
        id: enquiry._id,
        createdAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all enquiries with filtering and pagination (Future Admin Integration)
 * @route   GET /api/enquiries
 * @access  Private / Future Admin
 */
export const getEnquiries = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is currently unavailable.',
      });
    }

    const { status, enquiryType, search, page = 1, limit = 20 } = req.query;

    const query = {};
    if (status) query.status = status;
    if (enquiryType) query.enquiryType = enquiryType;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { companyName: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ];
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = Math.min(parseInt(limit, 10) || 20, 100);
    const skip = (pageNum - 1) * limitNum;

    const [enquiries, total] = await Promise.all([
      Enquiry.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum).lean(),
      Enquiry.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      total,
      pages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      data: enquiries,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single enquiry by ID
 * @route   GET /api/enquiries/:id
 * @access  Private / Future Admin
 */
export const getEnquiryById = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update enquiry status
 * @route   PATCH /api/enquiries/:id/status
 * @access  Private / Future Admin
 */
export const updateEnquiryStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const allowed = ['NEW', 'CONTACTED', 'IN_PROGRESS', 'CLOSED'];

    if (!status || !allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed values: ${allowed.join(', ')}`,
      });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry status updated successfully.',
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};
