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
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ── 1. CORS Configuration ──
app.use(cors());

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
    },
  });
});

// ── 5. Dedicated API Routes for Each Form ──

// FORM 1: Warehouse Rental Calculator Booking -> calculatorbookings
app.use('/api/calculator-bookings', calculatorBookingRoutes);
app.use('/api/calculator-booking', calculatorBookingRoutes);
app.use('/api/booking-inquiries', calculatorBookingRoutes);
app.use('/api/space-inquiries', calculatorBookingRoutes);
app.use('/api/space-inquiry', calculatorBookingRoutes);
app.use('/api/contact', calculatorBookingRoutes);

// FORM 2: Custom Warehouse Build Request -> warehousebuildrequests
app.use('/api/warehouse-build-requests', warehouseBuildRoutes);
app.use('/api/warehouse-build-request', warehouseBuildRoutes);
app.use('/api/warehouse-build', warehouseBuildRoutes);

// Legacy General Inquiries: Smart router to prevent duplicate collections
app.use('/api/inquiries', (req, res, next) => {
  const reqType = String(req.body?.warehouseRequirement || req.body?.intendedUsage || '').toLowerCase();
  if (reqType.includes('build')) {
    return warehouseBuildRoutes(req, res, next);
  }
  return calculatorBookingRoutes(req, res, next);
});

// ── 6. Centralized Error Handling ──
app.use(notFound);
app.use(errorHandler);

// ── 7. Server Initialization ──
const startServer = async () => {
  await connectDB();

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Vardha Warehousing Clean 1-to-1 Backend Server`);
    console.log(`📍 Port: http://localhost:${PORT}`);
    console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📦 Form 1 (Calculator & Space): http://localhost:${PORT}/api/calculator-bookings [-> calculatorbookings]`);
    console.log(`🏗️ Form 2 (Warehouse Build):    http://localhost:${PORT}/api/warehouse-build-requests [-> warehousebuildrequests]`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`==================================================\n`);
  });
};

startServer();
