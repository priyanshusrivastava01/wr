/* ============================================
   VARDHA WAREHOUSING — EXPRESS BACKEND SERVER
   ============================================ */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';

// Dedicated Route Handlers for the 3 Forms
import spaceInquiryRoutes from './routes/spaceInquiryRoutes.js';
import warehouseBuildRoutes from './routes/warehouseBuildRoutes.js';
import calculatorBookingRoutes from './routes/calculatorBookingRoutes.js';

// Central Error Handlers
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ── 1. CORS Configuration ──
app.use(cors());

// ── 2. Request Body Parsers ──
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

// ── 3. Request Logging ──
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// ── 4. Root & Health Check Endpoints ──
app.get('/', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.status(200).json({
    success: true,
    name: 'Vardha Warehousing Backend API',
    status: 'Live & Operational',
    database: isConnected ? 'Connected to MongoDB Atlas' : 'Connecting...',
    routes: {
      form1_spaceInquiries: '/api/space-inquiries',
      form2_warehouseBuildRequests: '/api/warehouse-build-requests',
      form3_calculatorBookings: '/api/calculator-bookings',
      health: '/api/health',
    },
  });
});

app.get('/api/health', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.status(200).json({
    success: true,
    message: 'Backend is running',
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
    database: isConnected ? 'connected' : 'connecting',
  });
});

// ── 5. Dedicated API Routes for Each Form ──
// Form 1 -> spaceinquiries collection
app.use('/api/space-inquiries', spaceInquiryRoutes);
app.use('/api/space-inquiry', spaceInquiryRoutes);

// Form 2 -> warehousebuildrequests collection
app.use('/api/warehouse-build-requests', warehouseBuildRoutes);
app.use('/api/warehouse-build', warehouseBuildRoutes);

// Form 3 -> calculatorbookings collection
app.use('/api/calculator-bookings', calculatorBookingRoutes);
app.use('/api/calculator-booking', calculatorBookingRoutes);
app.use('/api/booking-inquiries', calculatorBookingRoutes);

// Legacy aliases
app.use('/api/inquiries', spaceInquiryRoutes);
app.use('/api/contact', spaceInquiryRoutes);

// ── 6. Centralized Error Handling ──
app.use(notFound);
app.use(errorHandler);

// ── 7. Server Initialization ──
const startServer = async () => {
  await connectDB();

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Vardha Warehousing Multi-Collection Backend Server`);
    console.log(`📍 Port: http://localhost:${PORT}`);
    console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📦 Form 1 (Space Inquiries):       http://localhost:${PORT}/api/space-inquiries`);
    console.log(`🏗️ Form 2 (Warehouse Build):       http://localhost:${PORT}/api/warehouse-build-requests`);
    console.log(`📐 Form 3 (Calculator Bookings):   http://localhost:${PORT}/api/calculator-bookings`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`==================================================\n`);
  });
};

startServer();
