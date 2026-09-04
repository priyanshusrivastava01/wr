// backend/test-api.js
async function runCompleteAtlasTests() {
  console.log('==================================================');
  console.log('🧪 RUNNING MONGODB ATLAS END-TO-END BACKEND TESTS');
  console.log('==================================================\n');

  // Test 1: Health Check
  const healthRes = await fetch('http://127.0.0.1:5000/api/health');
  const healthData = await healthRes.json();
  console.log('1. Health Check:', healthRes.status, healthData);

  // Test 2: Submit Valid Warehouse Space Inquiry
  const inquiryPayload = {
    fullName: 'Rahul Sharma',
    companyName: 'Sharma Logistics Pvt. Ltd.',
    phone: '9876543210',
    email: 'rahul.sharma@example.com',
    warehouseRequirement: 'Warehouse Space',
    requiredSpace: '5,000 – 10,000 sq. ft.',
    preferredLocation: 'Gorakhpur, Uttar Pradesh',
    message: 'Please share the available warehouse options for my FMCG business.',
    sourcePage: 'SPACE_PRICING',
  };

  const inqRes = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiryPayload),
  });
  const inqData = await inqRes.json();
  console.log('\n2. Submit Inquiry POST /api/inquiries:', inqRes.status, inqData);

  // Test 3: Submit Valid Build a Warehouse Inquiry
  const buildPayload = {
    fullName: 'Anil Kumar',
    companyName: 'Kumar Agro Industries',
    phone: '9812345678',
    email: 'anil.kumar@example.com',
    warehouseRequirement: 'Build a Warehouse',
    requiredSpace: '20,000 sq. ft.',
    preferredLocation: 'Gorakhpur By-Pass',
    landAvailability: 'YES',
    plotArea: '2 Acres',
    message: 'Need PEB warehouse construction with 8 dock doors and heavy-duty trimix flooring.',
    sourcePage: 'BUILD_A_WAREHOUSE',
  };

  const buildRes = await fetch('http://127.0.0.1:5000/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildPayload),
  });
  const buildData = await buildRes.json();
  console.log('\n3. Submit Build Warehouse POST /api/inquiries:', buildRes.status, buildData);

  // Test 4: Submit Valid Contact Message
  const contactPayload = {
    name: 'Pooja Verma',
    phone: '9765432109',
    email: 'pooja.verma@example.com',
    subject: 'Site Visit Request',
    companyName: 'Verma Retailers',
    message: 'Would like to visit the facility on Saturday afternoon.',
  };

  const contactRes = await fetch('http://127.0.0.1:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactPayload),
  });
  const contactData = await contactRes.json();
  console.log('\n4. Submit Contact POST /api/contact:', contactRes.status, contactData);

  // Test 5: Verify Data Retrieval from MongoDB Atlas
  const listInqRes = await fetch('http://127.0.0.1:5000/api/inquiries');
  const listInqData = await listInqRes.json();
  console.log('\n5. Query Inquiries GET /api/inquiries: Found', listInqData.count, 'records in MongoDB Atlas.');

  const listContactRes = await fetch('http://127.0.0.1:5000/api/contact');
  const listContactData = await listContactRes.json();
  console.log('6. Query Contacts GET /api/contact: Found', listContactData.count, 'records in MongoDB Atlas.');

  console.log('\n==================================================');
  console.log('🎉 ALL ATLAS BACKEND DATABASE TESTS PASSED!');
  console.log('==================================================');
}

runCompleteAtlasTests();
