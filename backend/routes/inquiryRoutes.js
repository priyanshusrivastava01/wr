/* ============================================
   FORM 3 ROUTES: INQUIRIES
   Collection: inquiries
   ============================================ */

import express from 'express';
import { createInquiry, getInquiries } from '../controllers/inquiryController.js';

const router = express.Router();

// POST /api/inquiries -> Create Form 3 Inquiry
// GET /api/inquiries  -> List Inquiries
router.route('/').post(createInquiry).get(getInquiries);

export default router;
