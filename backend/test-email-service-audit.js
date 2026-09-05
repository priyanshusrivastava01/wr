// backend/test-email-service-audit.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { sendCalculatorBookingNotification, sendWarehouseBuildNotification, sendInquiryNotification } from './services/emailService.js';
import { CalculatorBooking } from './models/CalculatorBooking.js';
import { WarehouseBuildRequest } from './models/WarehouseBuildRequest.js';
import { Inquiry } from './models/Inquiry.js';

dotenv.config();

async function runEmailAudit() {
  console.log('================================================================');
  console.log('✉️ TESTING RESEND EMAIL TEMPLATES & DISPATCH FOR ALL 3 FORMS');
  console.log('================================================================\n');

  // Test 1: Calculator Booking Mock
  const mockBooking = {
    fullName: 'Rajesh Agarwal',
    phone: '9876512345',
    email: 'rajesh.agarwal@example.com',
    companyName: 'Agarwal Cold Logistics',
    areaSqFt: 15000,
    ceilingHeight: 22,
    pricingRate: 24,
    estimatedMonthlyTotal: 360000,
    city: 'Gorakhpur',
    businessType: 'Cold Storage & FMCG',
    storageDescription: 'Palletized goods requiring 22ft clear height',
    preferredContactMethod: 'whatsapp',
    message: 'Need possession by 1st of next month.',
    referenceNumber: 'VAR-RENT-TEST-001',
    status: 'NEW',
    createdAt: new Date(),
  };

  console.log('[TEST 1] Dispatching Calculator Booking Email Template...');
  const res1 = await sendCalculatorBookingNotification(mockBooking);
  console.log('   Result:', res1);

  // Test 2: Warehouse Build Mock
  const mockBuild = {
    fullName: 'Sanjay Singhania',
    phone: '9876523456',
    email: 'sanjay@singhaniapark.com',
    companyName: 'Singhania Industrial Park',
    preferredLocation: 'Gorakhpur - Nepal Highway',
    landAvailability: 'Yes, 8 Acres Available',
    plotArea: '8 Acres',
    requiredSpace: '60,000 sq ft',
    intendedUsage: 'Heavy Engineering & Industrial PEB',
    projectNotes: 'Turnkey PEB shed construction with crane provision.',
    status: 'NEW',
    createdAt: new Date(),
  };

  console.log('\n[TEST 2] Dispatching Warehouse Build Email Template...');
  const res2 = await sendWarehouseBuildNotification(mockBuild);
  console.log('   Result:', res2);

  // Test 3: Inquiry Mock
  const mockInquiry = {
    fullName: 'Meera Kapoor',
    phone: '9876534567',
    email: 'meera.kapoor@example.com',
    companyName: 'Kapoor Retail Ventures',
    requiredWarehouseSpace: '7,500 sq. ft.',
    storageRequirement: 'Apparel and e-commerce fulfillment center',
    timeline: 'Immediate (within 15 days)',
    message: 'Need 7,500 sq ft warehouse space with 24x7 security and wide road access.',
    referenceNumber: 'VAR-INQ-TEST-001',
    status: 'NEW',
    sourcePage: 'HOME_CONTACT',
    createdAt: new Date(),
  };

  console.log('\n[TEST 3] Dispatching Inquiry Email Template...');
  const res3 = await sendInquiryNotification(mockInquiry);
  console.log('   Result:', res3);

  console.log('\n================================================================');
  console.log('🎉 EMAIL SERVICE AUDIT COMPLETED SAFELY (Non-blocking & Error-safe)');
  console.log('================================================================\n');
}

runEmailAudit();
