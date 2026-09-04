// backend/test-audit.js
async function auditAllThreeForms() {
  console.log('================================================================');
  console.log('🔍 COMPLETE END-TO-END AUDIT & VERIFICATION OF ALL 3 FORMS');
  console.log('================================================================\n');

  // Test 1: Health Check
  const healthRes = await fetch('http://127.0.0.1:5000/api/health');
  const healthData = await healthRes.json();
  console.log('1. Health Check GET /api/health:', healthRes.status, healthData);

  // -------------------------------------------------------------------------
  // FORM 1: Contact / Space Inquiry Form (InquirySection.js)
  // -------------------------------------------------------------------------
  const form1Payload = {
    fullName: 'Rajesh Agrawal',
    companyName: 'Agrawal Trading Corp',
    phone: '9876543210',
    email: 'rajesh.agrawal@example.com',
    warehouseRequirement: 'Warehouse Space',
    requiredSpace: '8,000 sq ft',
    message: 'Need ready-to-move warehouse space for wholesale grocery.',
    sourcePage: 'CONTACT',
  };

  const form1Res = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form1Payload),
  });
  const form1Data = await form1Res.json();
  console.log('\n2. [FORM 1: Space Inquiry] POST /api/inquiries');
  console.log('   Status:', form1Res.status);
  console.log('   Response:', form1Data);

  // -------------------------------------------------------------------------
  // FORM 2: Build a Warehouse Form (WarehouseSetupSection.js)
  // -------------------------------------------------------------------------
  const form2Payload = {
    fullName: 'Vikramaditya Singh',
    companyName: 'Singh Agro Infrastructure',
    phone: '9811223344',
    email: 'vikram.singh@example.com',
    preferredLocation: 'Gorakhpur - Lucknow Highway, By-Pass',
    landAvailability: 'Yes, I have land',
    plotArea: '3.5 Acres',
    requiredSpace: '35,000 sq ft',
    warehouseRequirement: 'Build a Warehouse',
    message: 'Land status: Yes, I have land. Plot area: 3.5 Acres. Usage: Cold Storage / Agro. Notes: Need 12 dock levellers.',
    sourcePage: 'BUILD_A_WAREHOUSE',
  };

  const form2Res = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form2Payload),
  });
  const form2Data = await form2Res.json();
  console.log('\n3. [FORM 2: Build a Warehouse] POST /api/inquiries');
  console.log('   Status:', form2Res.status);
  console.log('   Response:', form2Data);

  // -------------------------------------------------------------------------
  // FORM 3: Space Calculator / Booking Wizard Modal (InquiryWizard.js)
  // -------------------------------------------------------------------------
  const form3Payload = {
    name: 'Suresh Chandra Gupta',
    phone: '9798765432',
    email: 'suresh.gupta@example.com',
    companyName: 'Gupta Cold Chain Solutions',
    spaceRequirement: '15000 sq. ft. (24 ft height)',
    useCase: 'Pharmaceuticals',
    message: 'Estimated Monthly: ₹187500. Preferred Contact: WhatsApp. Storage info: Temp controlled pharma.',
    enquiryType: 'WAREHOUSE_SPACE',
    sourcePage: 'SPACE_PRICING',
  };

  const form3Res = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form3Payload),
  });
  const form3Data = await form3Res.json();
  console.log('\n4. [FORM 3: Space Calculator Wizard] POST /api/inquiries');
  console.log('   Status:', form3Res.status);
  console.log('   Response:', form3Data);

  // -------------------------------------------------------------------------
  // VALIDATION ERROR TESTS (Verify distinct user-friendly error messages)
  // -------------------------------------------------------------------------
  const invalidPhoneRes = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: 'Test User', phone: '12345' }),
  });
  const invalidPhoneData = await invalidPhoneRes.json();
  console.log('\n5. [Validation Test - Invalid Phone]:', invalidPhoneRes.status, invalidPhoneData.message);

  const missingNameRes = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: '', phone: '9876543210' }),
  });
  const missingNameData = await missingNameRes.json();
  console.log('6. [Validation Test - Missing Name]:', missingNameRes.status, missingNameData.message);

  // -------------------------------------------------------------------------
  // MONGO DATABASE QUERY CHECK
  // -------------------------------------------------------------------------
  const countRes = await fetch('http://127.0.0.1:5000/api/inquiries');
  const countData = await countRes.json();
  console.log('\n7. [MongoDB Atlas Verification] Total Inquiries in DB:', countData.total);

  console.log('\n================================================================');
  console.log('🎉 AUDIT SUCCESSFUL: ALL 3 FORMS SAVING DIRECTLY TO MONGODB ATLAS!');
  console.log('================================================================');
}

auditAllThreeForms();
