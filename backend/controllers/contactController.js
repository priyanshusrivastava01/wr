/* ============================================
   CONTACT CONTROLLER
   ============================================ */

import mongoose from 'mongoose';
import { Contact } from '../models/Contact.js';

/**
 * @desc    Submit a contact form message
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res, next) => {
  console.log(`\n📥 [API Request] ${req.method} ${req.originalUrl}`);
  console.log('   Payload Received:', JSON.stringify(req.body));

  try {
    const { name, fullName, phone, email, subject, companyName, company, message } = req.body;

    // 1. Resolve field aliases
    const resolvedName = (name || fullName || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedSubject = (subject || 'General Inquiry').trim();
    const resolvedCompany = (companyName || company || '').trim();
    const resolvedMessage = (message || '').trim();

    // 2. Validate Name
    if (!resolvedName || resolvedName.length < 2) {
      console.warn('❌ [Validation Failed] Missing or too short name.');
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

    // 6. Save in MongoDB Atlas
    const contact = await Contact.create({
      name: resolvedName.slice(0, 100),
      phone: cleanPhone,
      email: resolvedEmail,
      subject: resolvedSubject.slice(0, 150),
      companyName: resolvedCompany.slice(0, 150),
      message: resolvedMessage.slice(0, 2000),
      status: 'NEW',
    });

    console.log(`✓ [MongoDB Atlas Saved] Contact ID: ${contact._id} | Name: ${contact.name} | Phone: ${contact.phone}`);

    // 7. Return success response
    return res.status(201).json({
      success: true,
      message: 'Thank you! Your requirement has been submitted successfully. Our team will contact you shortly.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [Server Error in createContact]:', error);
    next(error);
  }
};

/**
 * @desc    Get all contact submissions
 * @route   GET /api/contact
 * @access  Private / Future Admin
 */
export const getContacts = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is currently unavailable.',
      });
    }

    const { status, page = 1, limit = 20 } = req.query;
    const query = status ? { status } : {};
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = Math.min(parseInt(limit, 10) || 20, 100);
    const skip = (pageNum - 1) * limitNum;

    const [contacts, total] = await Promise.all([
      Contact.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum).lean(),
      Contact.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      pages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};
