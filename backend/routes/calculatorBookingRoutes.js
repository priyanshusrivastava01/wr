/* ============================================
   FORM 3 ROUTES: CALCULATOR BOOKING
   ============================================ */

import express from 'express';
import {
  createCalculatorBooking,
  getCalculatorBookings,
} from '../controllers/calculatorBookingController.js';

const router = express.Router();

router.route('/').post(createCalculatorBooking).get(getCalculatorBookings);

export default router;
