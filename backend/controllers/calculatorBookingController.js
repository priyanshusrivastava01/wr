/* ============================================
   FORM 1 CONTROLLER: CALCULATOR BOOKING / WAREHOUSE RENTING
   ============================================ */

import mongoose from 'mongoose';
import { CalculatorBooking } from '../models/CalculatorBooking.js';
import { connectDB } from '../config/db.js';
import { sendCalculatorBookingNotification } from '../services/emailService.js';

/**
 * Generates a human-friendly unique reference number
 * Example: VAR-RENT-M4K9X-8241
 */
function generateReferenceNumber() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `VAR-RENT-${timestamp}-${randomSuffix}`;
}

/**
 * Server-side Pricing Verification (Canonical Business Rule)
 * - Area <= 5000 sq. ft. -> ₹60 / sq. ft.
 * - Area > 5000 sq. ft.  -> ₹24 / sq. ft.
 */
function verifyPricing(areaSqFt) {
  const area = Number(areaSqFt) || 0;
  const rate = area <= 5000 ? 60 : 24;
  const total = area * rate;
  return { rate, total };
}

/**
 * @desc    Submit Calculator Booking Request (Form 1)
 * @route   POST /api/calculator-bookings
 */
export const createCalculatorBooking = async (req, res, next) => {
  console.log(`\n📥 [FORM 1 REQUEST] POST /api/calculator-bookings`);
  console.log('   Payload:', JSON.stringify(req.body));

  try {
    const {
      fullName,
      phone,
      email,
      companyName,
      areaSqFt,
      ceilingHeight,
      city,
      businessType,
      storageDescription,
      preferredContactMethod,
      message,
    } = req.body;

    // ── 1. Sanitize & Normalize Inputs ──
    const resolvedName = (fullName || '').trim();
    const resolvedCompany = (companyName || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedCity = (city || 'Gorakhpur').trim();
    const resolvedArea = Number(areaSqFt) || 0;
    const resolvedCeilingHeight = Number(ceilingHeight) || (parseInt(req.body.warehouseHeight, 10) || 0);
    const resolvedBusinessType = (businessType || 'General Commercial Storage').trim();
    const resolvedStorageDesc = (storageDescription || '').trim();
    const resolvedMethod = (preferredContactMethod || 'phone').trim().toLowerCase();
    const resolvedMessage = (message || '').trim();

    // ── 2. Field Validations ──

    // Full Name
    if (!resolvedName || resolvedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name (at least 2 characters).',
      });
    }

    // Phone Number (10-digit Indian Mobile)
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

    // Email (Optional, but validated if supplied)
    if (resolvedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resolvedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // Area Validation
    if (!resolvedArea || resolvedArea < 100) {
      return res.status(400).json({
        success: false,
        message: 'Please specify a valid warehouse area of at least 100 sq. ft.',
      });
    }

    // Location / City
    if (!resolvedCity) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your preferred warehouse location or city.',
      });
    }

    // Contact Preference (Controlled Enum)
    const validContactMethods = ['phone', 'whatsapp', 'email'];
    const sanitizedContactMethod = validContactMethods.includes(resolvedMethod)
      ? resolvedMethod
      : 'phone';

    // ── 3. Server-Side Calculation Security ──
    const { rate: verifiedRate, total: verifiedTotal } = verifyPricing(resolvedArea);

    // ── 4. Server-Generated System Values ──
    const referenceNumber = generateReferenceNumber();
    const status = 'NEW';

    // ── 5. Ensure DB Connection is Active ──
    if (mongoose.connection.readyState !== 1) {
      console.log('⚠️ [MongoDB] Database was not connected on request, attempting connection...');
      await connectDB();
    }

    // ── 6. Save Normalized Document into MongoDB ──
    const booking = await CalculatorBooking.create({
      fullName: resolvedName.slice(0, 100),
      phone: cleanPhone,
      email: resolvedEmail,
      companyName: resolvedCompany.slice(0, 150),
      areaSqFt: resolvedArea,
      ceilingHeight: resolvedCeilingHeight,
      pricingRate: verifiedRate,
      estimatedMonthlyTotal: verifiedTotal,
      city: resolvedCity.slice(0, 100),
      businessType: resolvedBusinessType.slice(0, 100),
      storageDescription: resolvedStorageDesc.slice(0, 2000),
      preferredContactMethod: sanitizedContactMethod,
      message: resolvedMessage.slice(0, 2000),
      referenceNumber,
      status,
    });

    console.log(`✓ [MongoDB Saved: calculatorbookings] Ref: ${booking.referenceNumber} | Area: ${booking.areaSqFt} sq. ft. | Total: ₹${booking.estimatedMonthlyTotal}`);

    // Trigger Admin Email Notification via Resend (Non-blocking / safe)
    sendCalculatorBookingNotification(booking).catch((emailErr) => {
      console.error('⚠️ [Email Notification Warning]:', emailErr);
    });

    return res.status(201).json({
      success: true,
      message: 'Your warehouse space requirement has been submitted successfully.',
      data: {
        id: booking._id,
        referenceNumber: booking.referenceNumber,
        fullName: booking.fullName,
        areaSqFt: booking.areaSqFt,
        ceilingHeight: booking.ceilingHeight,
        pricingRate: booking.pricingRate,
        estimatedMonthlyTotal: booking.estimatedMonthlyTotal,
        preferredContactMethod: booking.preferredContactMethod,
        collection: 'calculatorbookings',
        status: booking.status,
        createdAt: booking.createdAt,
      },
    });
  } catch (error) {
    console.error('❌ [Database Save Error in createCalculatorBooking]:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Unable to save your booking calculation at this moment. Please try again or reach out on WhatsApp.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
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

