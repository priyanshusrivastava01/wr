/* ============================================
   ENQUIRY DATA MODEL (Mongoose Schema)
   ============================================ */

import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
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
          // Exactly 10 digits starting with 6, 7, 8, or 9 (Indian mobile format)
          return /^[6-9]\d{9}$/.test(v);
        },
        message: 'Please provide a valid 10-digit Indian mobile number.',
      },
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          if (!v || v === '') return true; // optional
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
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
    enquiryType: {
      type: String,
      required: [true, 'Enquiry type is required.'],
      enum: {
        values: [
          'WAREHOUSE_SPACE',
          'BUILD_A_WAREHOUSE',
          'GENERAL_ENQUIRY',
          'SITE_VISIT',
          'OTHER',
        ],
        message: 'Invalid enquiry type: {VALUE}.',
      },
      default: 'GENERAL_ENQUIRY',
    },
    spaceRequirement: {
      type: String,
      trim: true,
      maxlength: [100, 'Space requirement cannot exceed 100 characters.'],
      default: '',
    },
    location: {
      type: String,
      trim: true,
      maxlength: [150, 'Location cannot exceed 150 characters.'],
      default: '',
    },
    budget: {
      type: String,
      trim: true,
      maxlength: [100, 'Budget cannot exceed 100 characters.'],
      default: '',
    },
    timeline: {
      type: String,
      trim: true,
      maxlength: [100, 'Timeline cannot exceed 100 characters.'],
      default: '',
    },
    useCase: {
      type: String,
      trim: true,
      maxlength: [200, 'Usage description cannot exceed 200 characters.'],
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
      enum: {
        values: [
          'HOME',
          'WAREHOUSE',
          'SPACE_PRICING',
          'BUILD_A_WAREHOUSE',
          'CONTACT',
          'DIRECT',
        ],
        message: 'Invalid source page: {VALUE}.',
      },
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
    timestamps: true, // Automatically manages createdAt & updatedAt
  }
);

// ── Indexes for efficient query filtering ──
enquirySchema.index({ status: 1 });
enquirySchema.index({ enquiryType: 1 });
enquirySchema.index({ createdAt: -1 });

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
