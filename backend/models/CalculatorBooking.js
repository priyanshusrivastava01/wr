/* ============================================
   FORM 1 MODEL: CALCULATOR BOOKING / WAREHOUSE RENTAL
   Collection: calculatorbookings
   ============================================ */

import mongoose from 'mongoose';

const calculatorBookingSchema = new mongoose.Schema(
  {
    // A. CUSTOMER CONTACT DETAILS
    fullName: {
      type: String,
      required: [true, 'Please provide your full name.'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long.'],
      maxlength: [100, 'Name cannot exceed 100 characters.'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your 10-digit mobile number.'],
      trim: true,
      validate: {
        validator: function (v) {
          const digits = String(v).replace(/\D/g, '');
          return /^[6-9]\d{9}$/.test(digits);
        },
        message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
      },
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          if (!v || v.trim() === '') return true;
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
        },
        message: 'Please provide a valid email address.',
      },
      default: '',
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: [150, 'Company name cannot exceed 150 characters.'],
      default: '',
    },

    // B. WAREHOUSE REQUIREMENT DETAILS (CALCULATED / VISIBLE)
    areaSqFt: {
      type: Number,
      required: [true, 'Warehouse area is required.'],
      min: [100, 'Area must be at least 100 sq. ft.'],
      max: [100000, 'Area cannot exceed 100,000 sq. ft.'],
    },
    ceilingHeight: {
      type: Number,
      default: 0, // Numeric clear height in ft: 14, 22, or 0 (Not Sure)
    },
    pricingRate: {
      type: Number,
      required: [true, 'Pricing rate is required.'],
      min: [0, 'Pricing rate cannot be negative.'],
    },
    estimatedMonthlyTotal: {
      type: Number,
      required: [true, 'Estimated monthly rent is required.'],
      min: [0, 'Estimated monthly rent cannot be negative.'],
    },

    // C. BUSINESS / STORAGE REQUIREMENTS
    businessType: {
      type: String,
      trim: true,
      maxlength: [100, 'Business type cannot exceed 100 characters.'],
      default: 'General Commercial Storage',
    },
    storageDescription: {
      type: String,
      trim: true,
      maxlength: [2000, 'Storage description cannot exceed 2000 characters.'],
      default: '',
    },

    // D. LOCATION AND TIMELINE
    city: {
      type: String,
      required: [true, 'Location / City is required.'],
      trim: true,
      maxlength: [100, 'City cannot exceed 100 characters.'],
      default: 'Gorakhpur',
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters.'],
      default: '',
    },

    // E. CONTACT PREFERENCE
    preferredContactMethod: {
      type: String,
      trim: true,
      enum: ['phone', 'whatsapp', 'email'],
      default: 'phone',
    },

    // F. SERVER-GENERATED SYSTEM VALUES
    referenceNumber: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['NEW', 'CONTACTED', 'IN_PROGRESS', 'CLOSED'],
      default: 'NEW',
    },

    // LEGACY COMPATIBILITY FIELDS (Maintained for existing documents)
    ceilingHeightFt: {
      type: Number,
      default: function () {
        return this.ceilingHeight || 0;
      },
    },
    warehouseHeight: {
      type: String,
      trim: true,
      default: function () {
        return this.ceilingHeight ? `${this.ceilingHeight} ft.` : 'Not Sure';
      },
    },
  },
  {
    timestamps: true,
  }
);

calculatorBookingSchema.index({ status: 1 });
calculatorBookingSchema.index({ createdAt: -1 });
calculatorBookingSchema.index({ referenceNumber: 1 });

export const CalculatorBooking = mongoose.model(
  'CalculatorBooking',
  calculatorBookingSchema,
  'calculatorbookings'
);

