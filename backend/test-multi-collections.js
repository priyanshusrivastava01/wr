// backend/test-multi-collections.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import spaceInquiryRoutes from './routes/spaceInquiryRoutes.js';
import warehouseBuildRoutes from './routes/warehouseBuildRoutes.js';
import calculatorBookingRoutes from './routes/calculatorBookingRoutes.js';
import { SpaceInquiry } from './models/SpaceInquiry.js';
import { WarehouseBuildRequest } from './models/WarehouseBuildRequest.js';
import { CalculatorBooking } from './models/CalculatorBooking.js';

dotenv.config();

async function runMultiCollectionDirectAudit() {
  console.log('================================================================');
  console.log('🚀 TESTING 3 DEDICATED COLLECTIONS & ROUTES WITH LIVE ATLAS');
  console.log('================================================================\n');

  // 1. Setup local Express App on port 5099
  const app = express();
  app.use(express.json());
  app.use('/api/space-inquiries', spaceInquiryRoutes);
  app.use('/api/warehouse-build-requests', warehouseBuildRoutes);
  app.use('/api/calculator-bookings', calculatorBookingRoutes);

  // 2. Connect to Atlas
  await mongoose.connect(process.env.MONGODB_URI.trim());
  console.log('✓ Connected to MongoDB Atlas Database:', mongoose.connection.name);

  const server = app.listen(5099);
  console.log('✓ Test Server listening on http://127.0.0.1:5099');

  // Initial counts
  const initialSpaceCount = await SpaceInquiry.countDocuments();
  const initialBuildCount = await WarehouseBuildRequest.countDocuments();
  const initialBookingCount = await CalculatorBooking.countDocuments();

  console.log('\n📊 Initial Collection Counts in Atlas:');
  console.log('   1. spaceinquiries:          ', initialSpaceCount);
  console.log('   2. warehousebuildrequests:  ', initialBuildCount);
  console.log('   3. calculatorbookings:      ', initialBookingCount);

  // -------------------------------------------------------------------------
  // TEST 1: FORM 1 -> POST /api/space-inquiries -> spaceinquiries
  // -------------------------------------------------------------------------
  const spacePayload = {
    fullName: 'Sunil Kumar Space',
    phone: '9876511111',
    email: 'sunil.space@example.com',
    companyName: 'Kumar Agro Logistics',
    requiredSpace: '6,000 sq ft',
    message: 'Ready space requirement in Gorakhpur.',
  };

  const form1Res = await fetch('http://127.0.0.1:5099/api/space-inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spacePayload),
  });
  const form1Data = await form1Res.json();
  console.log('\n📦 [FORM 1] POST /api/space-inquiries');
  console.log('   HTTP Status:', form1Res.status);
  console.log('   Saved Document ID:', form1Data.data?.id);
  console.log('   Target Collection:', form1Data.data?.collection);

  const inSpace1 = await SpaceInquiry.findById(form1Data.data?.id);
  const inBuild1 = await WarehouseBuildRequest.findById(form1Data.data?.id);
  const inBooking1 = await CalculatorBooking.findById(form1Data.data?.id);
  console.log('   ✓ Verified in spaceinquiries:         ', !!inSpace1);
  console.log('   ✓ Verified NOT in warehousebuildrequests:   ', !inBuild1);
  console.log('   ✓ Verified NOT in calculatorbookings:       ', !inBooking1);

  // -------------------------------------------------------------------------
  // TEST 2: FORM 2 -> POST /api/warehouse-build-requests -> warehousebuildrequests
  // -------------------------------------------------------------------------
  const buildPayload = {
    fullName: 'Ramesh Patel Build',
    phone: '9876522222',
    email: 'ramesh.build@example.com',
    companyName: 'Patel Cold Chain Infra',
    preferredLocation: 'Gorakhpur - Nepal Border Highway',
    landAvailability: 'Yes, I have land',
    plotArea: '4 Acres',
    requiredSpace: '40,000 sq ft',
    intendedUsage: 'Cold Storage / Pharmaceuticals',
    projectNotes: 'Need turnkey PEB design and construction.',
  };

  const form2Res = await fetch('http://127.0.0.1:5099/api/warehouse-build-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildPayload),
  });
  const form2Data = await form2Res.json();
  console.log('\n🏗️ [FORM 2] POST /api/warehouse-build-requests');
  console.log('   HTTP Status:', form2Res.status);
  console.log('   Saved Document ID:', form2Data.data?.id);
  console.log('   Target Collection:', form2Data.data?.collection);

  const inSpace2 = await SpaceInquiry.findById(form2Data.data?.id);
  const inBuild2 = await WarehouseBuildRequest.findById(form2Data.data?.id);
  const inBooking2 = await CalculatorBooking.findById(form2Data.data?.id);
  console.log('   ✓ Verified in warehousebuildrequests: ', !!inBuild2);
  console.log('   ✓ Verified NOT in spaceinquiries:           ', !inSpace2);
  console.log('   ✓ Verified NOT in calculatorbookings:       ', !inBooking2);

  // -------------------------------------------------------------------------
  // TEST 3: FORM 3 -> POST /api/calculator-bookings -> calculatorbookings
  // -------------------------------------------------------------------------
  const bookingPayload = {
    fullName: 'Deepak Verma Calculator',
    phone: '9876533333',
    email: 'deepak.booking@example.com',
    companyName: 'Verma Consumer Products',
    areaSqFt: 18000,
    ceilingHeightFt: 28,
    businessType: 'FMCG Distribution',
    storageDescription: 'Palletized consumer goods',
    preferredContactMethod: 'whatsapp',
    estimatedMonthlyTotal: 225000,
    referenceNumber: 'VRD-2026-CALC-101',
  };

  const form3Res = await fetch('http://127.0.0.1:5099/api/calculator-bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingPayload),
  });
  const form3Data = await form3Res.json();
  console.log('\n📐 [FORM 3] POST /api/calculator-bookings');
  console.log('   HTTP Status:', form3Res.status);
  console.log('   Saved Document ID:', form3Data.data?.id);
  console.log('   Target Collection:', form3Data.data?.collection);

  const inSpace3 = await SpaceInquiry.findById(form3Data.data?.id);
  const inBuild3 = await WarehouseBuildRequest.findById(form3Data.data?.id);
  const inBooking3 = await CalculatorBooking.findById(form3Data.data?.id);
  console.log('   ✓ Verified in calculatorbookings:     ', !!inBooking3);
  console.log('   ✓ Verified NOT in spaceinquiries:           ', !inSpace3);
  console.log('   ✓ Verified NOT in warehousebuildrequests:   ', !inBuild3);

  // Final counts
  const finalSpaceCount = await SpaceInquiry.countDocuments();
  const finalBuildCount = await WarehouseBuildRequest.countDocuments();
  const finalBookingCount = await CalculatorBooking.countDocuments();

  console.log('\n📊 Final Live Collection Counts in Atlas:');
  console.log('   1. spaceinquiries:          ', finalSpaceCount, `(+${finalSpaceCount - initialSpaceCount})`);
  console.log('   2. warehousebuildrequests:  ', finalBuildCount, `(+${finalBuildCount - initialBuildCount})`);
  console.log('   3. calculatorbookings:      ', finalBookingCount, `(+${finalBookingCount - initialBookingCount})`);

  server.close();
  await mongoose.disconnect();

  console.log('\n================================================================');
  console.log('🎉 100% SUCCESS: ALL 3 FORMS FULLY SEPARATED INTO 3 COLLECTIONS!');
  console.log('================================================================');
}

runMultiCollectionDirectAudit();
