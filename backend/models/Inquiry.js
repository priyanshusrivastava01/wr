/* ============================================
   FORM 3 MODEL: INQUIRY / CONTACT FORM
   Collection: inquiries
   ============================================ */

import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    // A. CONTACT DETAILS
    fullName: {
      type: String,
      required: [true, 'Please provide your full name.'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long.'],
      maxlength: [100, 'Name cannot exceed 100 characters.'],
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: [150, 'Company name cannot exceed 150 characters.'],
      default: '',
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

    // B. INQUIRY / REQUIREMENT DETAILS
    requiredWarehouseSpace: {
      type: String,
      trim: true,
      maxlength: [100, 'Required space cannot exceed 100 characters.'],
      default: '',
    },
    storageRequirement: {
      type: String,
      trim: true,
      maxlength: [2000, 'Storage requirement cannot exceed 2000 characters.'],
      default: '',
    },
    timeline: {
      type: String,
      trim: true,
      maxlength: [200, 'Timeline cannot exceed 200 characters.'],
      default: '',
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters.'],
      default: '',
    },

    // C. SYSTEM & METADATA
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
    sourcePage: {
      type: String,
      trim: true,
      default: 'HOME_CONTACT',
    },
  },
  {
    timestamps: true,
  }
);

inquirySchema.index({ status: 1 });
inquirySchema.index({ createdAt: -1 });

export const Inquiry = mongoose.model(
  'Inquiry',
  inquirySchema,
  'inquiries'
);
