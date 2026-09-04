/* ============================================
   FORM 2 MODEL: WAREHOUSE BUILD REQUEST
   Collection: warehousebuildrequests
   ============================================ */

import mongoose from 'mongoose';

const warehouseBuildRequestSchema = new mongoose.Schema(
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
    preferredLocation: {
      type: String,
      required: [true, 'Please provide your project location.'],
      trim: true,
      maxlength: [150, 'Location cannot exceed 150 characters.'],
    },
    landAvailability: {
      type: String,
      required: [true, 'Please select your land status.'],
      trim: true,
      maxlength: [100, 'Land status cannot exceed 100 characters.'],
    },
    plotArea: {
      type: String,
      trim: true,
      maxlength: [100, 'Plot area cannot exceed 100 characters.'],
      default: '',
    },
    requiredSpace: {
      type: String,
      trim: true,
      maxlength: [100, 'Required space cannot exceed 100 characters.'],
      default: '',
    },
    intendedUsage: {
      type: String,
      trim: true,
      maxlength: [150, 'Usage cannot exceed 150 characters.'],
      default: '',
    },
    projectNotes: {
      type: String,
      trim: true,
      maxlength: [2000, 'Project notes cannot exceed 2000 characters.'],
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

warehouseBuildRequestSchema.index({ status: 1 });
warehouseBuildRequestSchema.index({ createdAt: -1 });

export const WarehouseBuildRequest = mongoose.model(
  'WarehouseBuildRequest',
  warehouseBuildRequestSchema,
  'warehousebuildrequests'
);
