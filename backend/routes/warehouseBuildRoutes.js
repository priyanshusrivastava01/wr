/* ============================================
   FORM 2 ROUTES: WAREHOUSE BUILD REQUEST
   ============================================ */

import express from 'express';
import {
  createWarehouseBuildRequest,
  getWarehouseBuildRequests,
} from '../controllers/warehouseBuildController.js';

const router = express.Router();

router.route('/').post(createWarehouseBuildRequest).get(getWarehouseBuildRequests);

export default router;
