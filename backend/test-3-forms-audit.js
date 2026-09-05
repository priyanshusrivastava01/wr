// backend/test-3-forms-audit.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import calculatorBookingRoutes from './routes/calculatorBookingRoutes.js';
import warehouseBuildRoutes from './routes/warehouseBuildRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import { CalculatorBooking } from './models/CalculatorBooking.js';
import { WarehouseBuildRequest } from './models/WarehouseBuildRequest.js';
import { Inquiry } from './models/Inquiry.js';

dotenv.config();

async function runThreeFormsAudit() {
  console.log('================================================================');
  console.log('🧪 VERIFYING 3 DEDICATED FORMS & COLLECTIONS WITH LIVE MONGODB');
  console.log('================================================================\n');

  // 1. Setup local Express App on port 5088 for isolated test
  const app = express();
  app.use(express.json());
  app.use('/api/calculator-bookings', calculatorBookingRoutes);
  app.use('/api/warehouse-build-requests', warehouseBuildRoutes);
  app.use('/api/inquiries', inquiryRoutes);

  // 2. Connect to Atlas
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error('❌ MONGODB_URI not found in environment!');
    process.exit(1);
  }

  await mongoose.connect(mongoUri.trim());
  console.log('✓ Connected to MongoDB Database:', mongoose.connection.name);

  const server = app.listen(5088);
  console.log('✓ Test Server listening on http://127.0.0.1:5088\n');

  // Initial counts
  const countBookingBefore = await CalculatorBooking.countDocuments();
  const countBuildBefore = await WarehouseBuildRequest.countDocuments();
  const countInquiryBefore = await Inquiry.countDocuments();

  console.log('📊 Initial Collection Counts:');
  console.log('   1. calculatorbookings:     ', countBookingBefore);
  console.log('   2. warehousebuildrequests: ', countBuildBefore);
  console.log('   3. inquiries:              ', countInquiryBefore);

  // -------------------------------------------------------------------------
  // TEST 1: FORM 1 -> POST /api/calculator-bookings -> calculatorbookings
  // -------------------------------------------------------------------------
  const bookingPayload = {
    fullName: 'Anil Gupta Calculator Test',
    phone: '9876500001',
    email: 'anil.calc@example.com',
    companyName: 'Gupta FMCG Hub',
    areaSqFt: 12000,
    ceilingHeight: 22,
    city: 'Gorakhpur',
    businessType: 'FMCG Storage',
    storageDescription: 'Palletized carton storage with 22ft clear height',
    preferredContactMethod: 'phone',
  };

  const form1Res = await fetch('http://127.0.0.1:5088/api/calculator-bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingPayload),
  });
  const form1Data = await form1Res.json();
  console.log('\n[TEST 1: FORM 1 -> /api/calculator-bookings]');
  console.log('   Status:', form1Res.status);
  console.log('   Response Success:', form1Data.success);
  console.log('   Saved Document ID:', form1Data.data?.id);
  console.log('   Generated Ref:', form1Data.data?.referenceNumber);

  const id1 = form1Data.data?.id;
  const inBooking1 = await CalculatorBooking.findById(id1);
  const inBuild1 = await WarehouseBuildRequest.findById(id1);
  const inInquiry1 = await Inquiry.findById(id1);

  if (!inBooking1 || inBuild1 || inInquiry1) {
    throw new Error('❌ Test 1 Failed: Document not isolated to calculatorbookings!');
  }
  console.log('   ✓ Verified saved in calculatorbookings: YES');
  console.log('   ✓ Verified NOT in warehousebuildrequests: YES');
  console.log('   ✓ Verified NOT in inquiries: YES');

  // -------------------------------------------------------------------------
  // TEST 2: FORM 2 -> POST /api/warehouse-build-requests -> warehousebuildrequests
  // -------------------------------------------------------------------------
  const buildPayload = {
    fullName: 'Vikram Singh Build Test',
    phone: '9876500002',
    email: 'vikram.build@example.com',
    companyName: 'Singh Logistics Park',
    preferredLocation: 'Gorakhpur Industrial Corridor',
    landAvailability: 'Yes, 5 Acres Available',
    plotArea: '5 Acres',
    requiredSpace: '50,000 sq ft',
    intendedUsage: 'Heavy Machinery & Logistics PEB',
    projectNotes: 'Turnkey PEB shed construction required.',
  };

  const form2Res = await fetch('http://127.0.0.1:5088/api/warehouse-build-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildPayload),
  });
  const form2Data = await form2Res.json();
  console.log('\n[TEST 2: FORM 2 -> /api/warehouse-build-requests]');
  console.log('   Status:', form2Res.status);
  console.log('   Response Success:', form2Data.success);
  console.log('   Saved Document ID:', form2Data.data?.id);

  const id2 = form2Data.data?.id;
  const inBooking2 = await CalculatorBooking.findById(id2);
  const inBuild2 = await WarehouseBuildRequest.findById(id2);
  const inInquiry2 = await Inquiry.findById(id2);

  if (inBooking2 || !inBuild2 || inInquiry2) {
    throw new Error('❌ Test 2 Failed: Document not isolated to warehousebuildrequests!');
  }
  console.log('   ✓ Verified saved in warehousebuildrequests: YES');
  console.log('   ✓ Verified NOT in calculatorbookings: YES');
  console.log('   ✓ Verified NOT in inquiries: YES');

  // -------------------------------------------------------------------------
  // TEST 3: FORM 3 -> POST /api/inquiries -> inquiries
  // -------------------------------------------------------------------------
  const inquiryPayload = {
    fullName: 'Neha Sharma Inquiry Test',
    phone: '9876500003',
    email: 'neha.inquiry@example.com',
    companyName: 'Sharma Pharma Dist',
    requiredWarehouseSpace: '8,000 sq. ft.',
    storageRequirement: 'Pharmaceutical warehouse with 24x7 power backup',
    timeline: 'Immediate within 15 days',
    message: 'Need 8,000 sq ft space with dock leveler access.',
    sourcePage: 'HOME_CONTACT',
  };

  const form3Res = await fetch('http://127.0.0.1:5088/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiryPayload),
  });
  const form3Data = await form3Res.json();
  console.log('\n[TEST 3: FORM 3 -> /api/inquiries]');
  console.log('   Status:', form3Res.status);
  console.log('   Response Success:', form3Data.success);
  console.log('   Saved Document ID:', form3Data.data?.id);
  console.log('   Generated Ref:', form3Data.data?.referenceNumber);
  console.log('   Target Collection:', form3Data.data?.collection);

  const id3 = form3Data.data?.id;
  const inBooking3 = await CalculatorBooking.findById(id3);
  const inBuild3 = await WarehouseBuildRequest.findById(id3);
  const inInquiry3 = await Inquiry.findById(id3);

  if (inBooking3 || inBuild3 || !inInquiry3) {
    throw new Error('❌ Test 3 Failed: Document not isolated to inquiries!');
  }
  console.log('   ✓ Verified saved in inquiries: YES');
  console.log('   ✓ Verified NOT in calculatorbookings: YES');
  console.log('   ✓ Verified NOT in warehousebuildrequests: YES');

  // Verify saved fields in inquiries document
  console.log('\n📄 Stored Inquiry Document Content:');
  console.log('   fullName:              ', inInquiry3.fullName);
  console.log('   phone:                 ', inInquiry3.phone);
  console.log('   email:                 ', inInquiry3.email);
  console.log('   companyName:           ', inInquiry3.companyName);
  console.log('   requiredWarehouseSpace:', inInquiry3.requiredWarehouseSpace);
  console.log('   storageRequirement:    ', inInquiry3.storageRequirement);
  console.log('   referenceNumber:       ', inInquiry3.referenceNumber);
  console.log('   status:                ', inInquiry3.status);
  console.log('   sourcePage:            ', inInquiry3.sourcePage);

  // Final count check
  const countBookingAfter = await CalculatorBooking.countDocuments();
  const countBuildAfter = await WarehouseBuildRequest.countDocuments();
  const countInquiryAfter = await Inquiry.countDocuments();

  console.log('\n📊 Final Live Collection Counts:');
  console.log('   1. calculatorbookings:     ', countBookingAfter, `(+${countBookingAfter - countBookingBefore})`);
  console.log('   2. warehousebuildrequests: ', countBuildAfter, `(+${countBuildAfter - countBuildBefore})`);
  console.log('   3. inquiries:              ', countInquiryAfter, `(+${countInquiryAfter - countInquiryBefore})`);

  server.close();
  await mongoose.disconnect();

  console.log('\n================================================================');
  console.log('🎉 100% SUCCESS: ALL 3 FORMS FULLY AUDITED AND VERIFIED IN MONGODB!');
  console.log('================================================================\n');
}

runThreeFormsAudit().catch((err) => {
  console.error('❌ Audit Error:', err);
  process.exit(1);
});
