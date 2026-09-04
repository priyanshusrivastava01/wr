/* ============================================
   FORM 1 ROUTES: SPACE INQUIRY
   ============================================ */

import express from 'express';
import { createSpaceInquiry, getSpaceInquiries } from '../controllers/spaceInquiryController.js';

const router = express.Router();

router.route('/').post(createSpaceInquiry).get(getSpaceInquiries);

export default router;
