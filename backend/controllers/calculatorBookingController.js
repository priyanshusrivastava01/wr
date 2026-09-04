/* ============================================
   FORM 3 CONTROLLER: CALCULATOR BOOKING
   ============================================ */

import mongoose from 'mongoose';
import { CalculatorBooking } from '../models/CalculatorBooking.js';

/**
 * @desc    Submit Calculator Booking Request (Form 3)
 * @route   POST /api/calculator-bookings
 */
export const createCalculatorBooking = async (req, res, next) => {
  console.log(`\n📥 [FORM 3 REQUEST] POST /api/calculator-bookings`);
  console.log('   Payload:', JSON.stringify(req.body));

  try {
    const {
      fullName,
      name,
      phone,
      email,
      companyName,
      company,
      businessName,
      city,
      location,
      area,
      areaSqFt,
      warehouseArea,
      height,
      ceilingHeightFt,
      warehouseHeight,
      pricingRate,
      rate,
      businessType,
      storageDescription,
      message,
      requirement,
      preferredContactMethod,
      contactMethod,
      total,
      estimatedMonthlyTotal,
      estimatedPrice,
      referenceNumber,
    } = req.body;

    const resolvedName = (fullName || name || '').trim();
    const resolvedCompany = (companyName || company || businessName || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedCity = (city || location || '').trim();
    const resolvedArea = Number(warehouseArea || areaSqFt || area) || 0;
    const resolvedHeightStr = (warehouseHeight || (height ? String(height) : '') || (ceilingHeightFt ? String(ceilingHeightFt) : '') || '').trim();
    const resolvedHeightNum = Number(height || ceilingHeightFt) || (parseInt(warehouseHeight, 10) || 0);
    const resolvedRate = Number(pricingRate || rate) || 0;
    const resolvedType = (businessType || '').trim();
    const resolvedMessage = (message || storageDescription || requirement || '').trim();
    const resolvedMethod = (preferredContactMethod || contactMethod || 'phone').trim();
    const resolvedTotal = Number(estimatedPrice || estimatedMonthlyTotal || total) || 0;
    const resolvedRef = (referenceNumber || '').trim();

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

    // 5. Save in calculatorbookings collection
    const booking = await CalculatorBooking.create({
      fullName: resolvedName.slice(0, 100),
      phone: cleanPhone,
      email: resolvedEmail,
      companyName: resolvedCompany.slice(0, 150),
      city: resolvedCity.slice(0, 100),
      areaSqFt: resolvedArea,
      ceilingHeightFt: resolvedHeightNum,
      warehouseHeight: resolvedHeightStr,
      pricingRate: resolvedRate,
      message: resolvedMessage.slice(0, 2000),
      businessType: resolvedType.slice(0, 100),
      storageDescription: resolvedMessage.slice(0, 2000),
      preferredContactMethod: ['phone', 'email', 'whatsapp', 'call'].includes(resolvedMethod.toLowerCase())
        ? resolvedMethod.toLowerCase()
        : 'phone',
      estimatedMonthlyTotal: resolvedTotal,
      referenceNumber: resolvedRef,
      status: 'NEW',
    });

    console.log(`✓ [Saved in Collection: calculatorbookings] ID: ${booking._id} | Area: ${booking.areaSqFt} sq ft`);

    return res.status(201).json({
      success: true,
      message: 'Your space calculation and booking request has been submitted successfully.',
      data: {
        id: booking._id,
        collection: 'calculatorbookings',
        createdAt: booking.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [Error in createCalculatorBooking]:', error);
    next(error);
  }
};

/**
 * @desc    Get all Calculator Bookings
 * @route   GET /api/calculator-bookings
 */
export const getCalculatorBookings = async (req, res, next) => {
  try {
    const list = await CalculatorBooking.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ success: true, count: list.length, data: list });
  } catch (err) {
    next(err);
  }
};
