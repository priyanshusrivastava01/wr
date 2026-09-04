/* ============================================
   ENQUIRY API ROUTES
   ============================================ */

import express from 'express';
import {
  createEnquiry,
  getEnquiries,
  getEnquiryById,
  updateEnquiryStatus,
} from '../controllers/enquiryController.js';

const router = express.Router();

// POST /api/enquiries - Submit new enquiry
// GET  /api/enquiries - List enquiries (with filter/pagination)
router.route('/').post(createEnquiry).get(getEnquiries);

// GET   /api/enquiries/:id - View single enquiry
// PATCH /api/enquiries/:id/status - Update enquiry status
router.route('/:id').get(getEnquiryById);
router.route('/:id/status').patch(updateEnquiryStatus);

export default router;
