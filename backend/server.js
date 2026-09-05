/* ============================================
   VARDHA WAREHOUSING — EXPRESS BACKEND SERVER
   ============================================
   1 Form = 1 Dedicated MongoDB Collection Architecture:
   - Form 1 (Warehouse Renting / Calculator Booking) -> calculatorbookings
   - Form 2 (Warehouse Custom Build Request) -> warehousebuildrequests
   ============================================ */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';

// Dedicated Route Handlers
import calculatorBookingRoutes from './routes/calculatorBookingRoutes.js';
import warehouseBuildRoutes from './routes/warehouseBuildRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import diagRoutes from './routes/diagRoutes.js';

// Central Error Handlers
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables (supports running from root or backend directory)
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ── 1. CORS Configuration (Allows frontend on ware.vardha.live, localhost, etc.) ──
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  })
);

// ── 2. Request Body Parsers ──
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

// ── 3. Request Logging (Minimal for high-frequency keep-alive health pings) ──
app.use((req, res, next) => {
  // Avoid log pollution from external 10-minute keep-alive pings
  if (req.path === '/health' || req.path === '/api/health') {
    return next();
  }
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// ── 4. Lightweight Keep-Alive Health Ping Endpoints ──
// Strictly lightweight: No MongoDB queries, no DB writes, no emails, no heavy computation.
const healthResponseHandler = (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    service: 'backend',
    timestamp: new Date().toISOString(),
  });
};

app.get('/health', healthResponseHandler);
app.get('/api/health', healthResponseHandler);

// Root informational endpoint
app.get('/', (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.status(200).json({
    success: true,
    name: 'Vardha Warehousing Backend API',
    status: 'Live & Operational',
    database: isConnected ? 'Connected to MongoDB Atlas' : 'Connecting...',
    architecture: '1 Form = 1 Dedicated MongoDB Collection',
    collections: {
      form1_rental_and_calculator: {
        endpoint: '/api/calculator-bookings',
        collection: 'calculatorbookings',
        description: 'Stores all warehouse rental inquiries, space calculator bookings & reservation requests',
      },
      form2_custom_warehouse_build: {
        endpoint: '/api/warehouse-build-requests',
        collection: 'warehousebuildrequests',
        description: 'Stores all custom warehouse planning, PEB construction & development project requests',
      },
      form3_contact_space_inquiry: {
        endpoint: '/api/inquiries',
        collection: 'inquiries',
        description: 'Stores all general warehouse space inquiries and contact form submissions',
      },
    },
  });
});

// ── 5. Dedicated API Routes for Each Form ──

// FORM 1: Warehouse Rental Calculator Booking -> calculatorbookings
app.use('/api/calculator-bookings', calculatorBookingRoutes);
app.use('/api/calculator-booking', calculatorBookingRoutes);
app.use('/api/booking-inquiries', calculatorBookingRoutes);

// FORM 2: Custom Warehouse Build Request -> warehousebuildrequests
app.use('/api/warehouse-build-requests', warehouseBuildRoutes);
app.use('/api/warehouse-build-request', warehouseBuildRoutes);
app.use('/api/warehouse-build', warehouseBuildRoutes);

// FORM 3: Contact & Space Inquiry -> inquiries
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/inquiry', inquiryRoutes);
app.use('/api/contact-inquiries', inquiryRoutes);
app.use('/api/space-inquiries', inquiryRoutes);
app.use('/api/space-inquiry', inquiryRoutes);
app.use('/api/contact', inquiryRoutes);

// DIAGNOSTIC & HEALTH ROUTES (Safe runtime environment audit & Resend probe)
app.use('/api/diag', diagRoutes);
app.use('/api/test-email', diagRoutes);

// ── 6. Centralized Error Handling ──
app.use(notFound);
app.use(errorHandler);

// ── 7. Server Initialization with Safe Environment Diagnostics ──
const printStartupDiagnostics = () => {
  const hasMongo = !!(process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('your_mongodb_atlas'));
  const hasResend = !!(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.startsWith('re_') && !process.env.RESEND_API_KEY.includes('your_resend_api_key'));
  const fromEmail = process.env.EMAIL_FROM || 'Vardha Warehousing <onboarding@resend.dev>';
  const toEmail = process.env.EMAIL_TO || 'linksvardha1@gmail.com';

  console.log(`\n==================================================`);
  console.log(`🚀 Vardha Warehousing Clean 1-to-1 Backend Server`);
  console.log(`📍 Port: http://localhost:${PORT}`);
  console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📦 Form 1 (Calculator & Space): POST /api/calculator-bookings [-> calculatorbookings]`);
  console.log(`🏗️ Form 2 (Warehouse Build):    POST /api/warehouse-build-requests [-> warehousebuildrequests]`);
  console.log(`✉️ Form 3 (Inquiries & Contact): POST /api/inquiries [-> inquiries]`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log(`--------------------------------------------------`);
  console.log(`📋 [Configuration Audit]`);
  console.log(`   • MONGODB_URI:    ${hasMongo ? '✓ Configured' : '❌ MISSING (Set in Render Environment Variables)'}`);
  console.log(`   • RESEND_API_KEY: ${hasResend ? '✓ Configured (re_***)' : '⚠️ MISSING (Email notifications will be skipped until added in Render)'}`);
  console.log(`   • EMAIL_FROM:     ${fromEmail}`);
  console.log(`   • EMAIL_TO:       ${toEmail}`);
  console.log(`==================================================\n`);
};

const startServer = async () => {
  await connectDB();

  app.listen(PORT, '0.0.0.0', () => {
    printStartupDiagnostics();
  });
};

startServer();
