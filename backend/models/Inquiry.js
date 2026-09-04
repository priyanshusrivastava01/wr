/* ============================================
   INQUIRY DATA MODEL (Mongoose Schema)
   ============================================ */

import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
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
          if (!v || v.trim() === '') return true; // Optional if not provided
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
        },
        message: 'Please provide a valid email address.',
      },
      default: '',
    },
    warehouseRequirement: {
      type: String,
      required: [true, 'Warehouse requirement is required.'],
      trim: true,
      default: 'Warehouse Space',
    },
    requiredSpace: {
      type: String,
      trim: true,
      maxlength: [100, 'Required space cannot exceed 100 characters.'],
      default: '',
    },
    preferredLocation: {
      type: String,
      trim: true,
      maxlength: [150, 'Preferred location cannot exceed 150 characters.'],
      default: 'Gorakhpur, Uttar Pradesh',
    },
    landAvailability: {
      type: String,
      trim: true,
      maxlength: [50, 'Land availability cannot exceed 50 characters.'],
      default: '',
    },
    plotArea: {
      type: String,
      trim: true,
      maxlength: [100, 'Plot area cannot exceed 100 characters.'],
      default: '',
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters.'],
      default: '',
    },
    sourcePage: {
      type: String,
      trim: true,
      default: 'DIRECT',
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['NEW', 'CONTACTED', 'IN_PROGRESS', 'CLOSED'],
        message: 'Invalid status: {VALUE}.',
      },
      default: 'NEW',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
inquirySchema.index({ status: 1 });
inquirySchema.index({ warehouseRequirement: 1 });
inquirySchema.index({ createdAt: -1 });

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
