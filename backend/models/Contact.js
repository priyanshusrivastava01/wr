/* ============================================
   CONTACT DATA MODEL (Mongoose Schema)
   ============================================ */

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
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
          return /^[6-9]\d{9}$/.test(v);
        },
        message: 'Please provide a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.',
      },
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address.'],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Please provide a valid email address.',
      },
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [150, 'Subject cannot exceed 150 characters.'],
      default: 'General Inquiry',
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: [150, 'Company name cannot exceed 150 characters.'],
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
      enum: {
        values: ['NEW', 'CONTACTED', 'RESOLVED', 'CLOSED'],
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
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

export const Contact = mongoose.model('Contact', contactSchema);
