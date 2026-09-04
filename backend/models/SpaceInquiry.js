/* ============================================
   FORM 1 MODEL: SPACE INQUIRY
   Collection: spaceinquiries
   ============================================ */

import mongoose from 'mongoose';

const spaceInquirySchema = new mongoose.Schema(
  {
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
    requiredSpace: {
      type: String,
      trim: true,
      maxlength: [100, 'Required space cannot exceed 100 characters.'],
      default: '',
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters.'],
      default: '',
    },
    status: {
      type: String,
      required: true,
      enum: ['NEW', 'CONTACTED', 'IN_PROGRESS', 'CLOSED'],
      default: 'NEW',
    },
  },
  {
    timestamps: true,
  }
);

spaceInquirySchema.index({ status: 1 });
spaceInquirySchema.index({ createdAt: -1 });

export const SpaceInquiry = mongoose.model('SpaceInquiry', spaceInquirySchema, 'spaceinquiries');
