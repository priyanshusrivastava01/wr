/* ============================================
   CENTRALIZED RESEND EMAIL NOTIFICATION SERVICE
   ============================================
   Sends professional, branded HTML notification emails to
   the business/admin team upon successful MongoDB persistence.
   ============================================ */

import { Resend } from 'resend';

// Helper to format values cleanly for email
function formatValue(val) {
  if (val === undefined || val === null || (typeof val === 'string' && val.trim() === '')) {
    return '<em>Not Provided</em>';
  }
  return String(val);
}

function formatCurrency(amount) {
  if (amount === undefined || amount === null || isNaN(Number(amount))) {
    return '<em>Not Provided</em>';
  }
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

function formatDateTime(date) {
  const d = date ? new Date(date) : new Date();
  return d.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });
}

function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Builds a responsive, professional HTML email template
 */
function buildHtmlTemplate({
  title,
  badgeText,
  badgeColor,
  refNumber,
  customerDetails,
  requirementDetails,
  calculatedDetails,
  notesAndTimeline,
  timestamp,
}) {
  const renderRows = (items) => {
    return items
      .filter((item) => item && item.label)
      .map(
        (item) => `
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #475569; width: 38%; border-bottom: 1px solid #f1f5f9; font-size: 14px;">
            ${item.label}
          </td>
          <td style="padding: 10px 14px; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
            ${item.value}
          </td>
        </tr>
      `
      )
      .join('');
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);" cellspacing="0" cellpadding="0">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 28px 24px; text-align: center; border-bottom: 3px solid #EAB308;">
              <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">
                VARDHA WAREHOUSING
              </h1>
              <p style="color: #94a3b8; margin: 0 0 14px 0; font-size: 13px;">
                Commercial Warehouse Solutions • Gorakhpur, UP
              </p>
              <div style="display: inline-block; background-color: ${badgeColor || '#EAB308'}; color: #0F172A; padding: 4px 14px; border-radius: 9999px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">
                ${badgeText || 'NEW FORM SUBMISSION'}
              </div>
            </td>
          </tr>

          <!-- Summary Banner -->
          <tr>
            <td style="padding: 20px 24px; background-color: #fefce8; border-bottom: 1px solid #fef08a;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 13px; color: #854d0e; font-weight: 600;">Reference ID:</span>
                    <strong style="font-size: 14px; color: #713f12; font-family: monospace; margin-left: 6px;">${refNumber || 'N/A'}</strong>
                  </td>
                  <td align="right">
                    <span style="font-size: 12px; color: #854d0e;">Received: ${timestamp}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 24px;">
              
              <!-- Customer Info -->
              <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                👤 Customer Contact Details
              </h3>
              <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 8px;">
                ${renderRows(customerDetails)}
              </table>

              <!-- Requirements Info -->
              <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                📦 Warehouse Requirement Details
              </h3>
              <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 8px;">
                ${renderRows(requirementDetails)}
              </table>

              ${
                calculatedDetails && calculatedDetails.length > 0
                  ? `
                <!-- Calculated / Estimation Values -->
                <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  📊 Requirement & Pricing Calculation
                </h3>
                <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                  ${renderRows(calculatedDetails)}
                </table>
              `
                  : ''
              }

              ${
                notesAndTimeline && notesAndTimeline.length > 0
                  ? `
                <!-- Additional Notes / Timeline -->
                <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">
                  📝 Additional Notes & Timeline
                </h3>
                <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 20px; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 8px;">
                  ${renderRows(notesAndTimeline)}
                </table>
              `
                  : ''
              }

              <!-- Admin Action Tip -->
              <div style="background-color: #f1f5f9; padding: 14px 16px; border-radius: 8px; border-left: 4px solid #3b82f6; font-size: 13px; color: #334155; line-height: 1.5;">
                💡 <strong>Admin Notice:</strong> This submission is securely stored in your MongoDB database. You can reply directly to this email to reach the customer if a valid email was provided.
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 18px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              © ${new Date().getFullYear()} Vardha Warehousing. All rights reserved. • Automated System Notification
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Generic Resend Dispatcher
 */
async function sendNotificationEmail({ subject, html, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('your_resend_api_key')) {
    console.warn('⚠️ [Resend Warning] RESEND_API_KEY is not configured in environment variables. Email notification skipped safely.');
    return { success: false, status: 'SKIPPED_NO_KEY' };
  }

  const fromEmail = process.env.EMAIL_FROM || 'Vardha Warehousing <onboarding@resend.dev>';
  const toEmail = process.env.EMAIL_TO || 'linksvardha1@gmail.com';

  const resend = new Resend(apiKey.trim());

  try {
    const payload = {
      from: fromEmail,
      to: toEmail.includes(',') ? toEmail.split(',').map((e) => e.trim()) : toEmail,
      subject,
      html,
      text,
    };

    if (replyTo && isValidEmail(replyTo)) {
      payload.reply_to = replyTo.trim();
    }

    console.log(`✉️ [Resend Dispatching] To: ${toEmail} | From: ${fromEmail} | Subject: "${subject}"`);
    const { data, error } = await resend.emails.send(payload);

    if (error) {
      console.error('❌ [Resend Email Error]:', error.message || error);
      return { success: false, error: error.message || error };
    }

    console.log(`✅ [Resend Email Delivered Successfully] Message ID: ${data?.id}`);
    return { success: true, id: data?.id };
  } catch (err) {
    console.error('❌ [Resend Email Exception]:', err.message || err);
    return { success: false, error: err.message || 'Unknown email dispatch exception' };
  }
}

// ────────────────────────────────────────────────────────────
// 1. FORM 1 EMAIL: Calculator Booking / Warehouse Rental
// ────────────────────────────────────────────────────────────
export async function sendCalculatorBookingNotification(booking) {
  try {
    const name = booking.fullName || 'Customer';
    const subject = `New Warehouse Space Requirement – ${name}`;
    const timestamp = formatDateTime(booking.createdAt);

    const customerDetails = [
      { label: 'Full Name', value: formatValue(booking.fullName) },
      { label: 'Phone Number', value: `<a href="tel:${booking.phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${formatValue(booking.phone)}</a>` },
      { label: 'Email Address', value: booking.email ? `<a href="mailto:${booking.email}" style="color: #2563eb; text-decoration: none;">${booking.email}</a>` : '<em>Not Provided</em>' },
      { label: 'Company / Business', value: formatValue(booking.companyName) },
      { label: 'Preferred Contact Method', value: formatValue(booking.preferredContactMethod ? booking.preferredContactMethod.toUpperCase() : 'PHONE') },
    ];

    const requirementDetails = [
      { label: 'Target Location / City', value: formatValue(booking.city || 'Gorakhpur') },
      { label: 'Business / Storage Type', value: formatValue(booking.businessType || 'General Storage') },
      { label: 'Clear Ceiling Height', value: booking.ceilingHeight ? `${booking.ceilingHeight} ft.` : 'Standard / Flexible' },
      { label: 'Storage Description', value: formatValue(booking.storageDescription) },
    ];

    const calculatedDetails = [
      { label: 'Required Warehouse Space', value: `<strong>${Number(booking.areaSqFt || 0).toLocaleString('en-IN')} sq. ft.</strong>` },
      { label: 'Applicable Pricing Rate', value: booking.pricingRate ? `₹${booking.pricingRate} / sq. ft.` : 'Standard' },
      { label: 'Estimated Monthly Rent', value: `<strong style="color: #15803d; font-size: 15px;">${formatCurrency(booking.estimatedMonthlyTotal)}</strong>` },
    ];

    const notesAndTimeline = [
      { label: 'Customer Message / Timeline', value: formatValue(booking.message) },
      { label: 'Booking Status', value: `<span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${booking.status || 'NEW'}</span>` },
    ];

    const html = buildHtmlTemplate({
      title: subject,
      badgeText: 'WAREHOUSE SPACE ESTIMATION & BOOKING',
      badgeColor: '#EAB308',
      refNumber: booking.referenceNumber || 'N/A',
      customerDetails,
      requirementDetails,
      calculatedDetails,
      notesAndTimeline,
      timestamp,
    });

    const text = `
VARDHA WAREHOUSING — NEW SPACE REQUIREMENT
------------------------------------------
Reference: ${booking.referenceNumber || 'N/A'}
Date: ${timestamp}

CUSTOMER DETAILS:
- Name: ${booking.fullName || 'N/A'}
- Phone: ${booking.phone || 'N/A'}
- Email: ${booking.email || 'N/A'}
- Company: ${booking.companyName || 'N/A'}

REQUIREMENT & CALCULATION:
- Required Area: ${booking.areaSqFt || 0} sq. ft.
- Height: ${booking.ceilingHeight || 0} ft.
- Rate: ₹${booking.pricingRate || 0}/sq.ft.
- Estimated Monthly Total: ₹${booking.estimatedMonthlyTotal || 0}
- Location: ${booking.city || 'Gorakhpur'}
- Storage Description: ${booking.storageDescription || 'N/A'}
- Notes: ${booking.message || 'N/A'}
    `.trim();

    return await sendNotificationEmail({
      subject,
      html,
      text,
      replyTo: booking.email,
    });
  } catch (err) {
    console.error('❌ Failed in sendCalculatorBookingNotification:', err);
    return { success: false, error: err.message };
  }
}

// ────────────────────────────────────────────────────────────
// 2. FORM 2 EMAIL: Build a Warehouse Request
// ────────────────────────────────────────────────────────────
export async function sendWarehouseBuildNotification(buildReq) {
  try {
    const name = buildReq.fullName || 'Customer';
    const subject = `New Build a Warehouse Request – ${name}`;
    const timestamp = formatDateTime(buildReq.createdAt);

    const customerDetails = [
      { label: 'Full Name', value: formatValue(buildReq.fullName) },
      { label: 'Phone Number', value: `<a href="tel:${buildReq.phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${formatValue(buildReq.phone)}</a>` },
      { label: 'Email Address', value: buildReq.email ? `<a href="mailto:${buildReq.email}" style="color: #2563eb; text-decoration: none;">${buildReq.email}</a>` : '<em>Not Provided</em>' },
      { label: 'Company / Business', value: formatValue(buildReq.companyName) },
    ];

    const requirementDetails = [
      { label: 'Project Location', value: `<strong>${formatValue(buildReq.preferredLocation)}</strong>` },
      { label: 'Land Availability', value: formatValue(buildReq.landAvailability) },
      { label: 'Plot / Land Area', value: formatValue(buildReq.plotArea) },
      { label: 'Required Warehouse Space', value: `<strong>${formatValue(buildReq.requiredSpace)}</strong>` },
      { label: 'Intended Usage / Sector', value: formatValue(buildReq.intendedUsage) },
    ];

    const notesAndTimeline = [
      { label: 'Project Notes & Timeline', value: formatValue(buildReq.projectNotes) },
      { label: 'Request Status', value: `<span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${buildReq.status || 'NEW'}</span>` },
    ];

    const html = buildHtmlTemplate({
      title: subject,
      badgeText: 'CUSTOM WAREHOUSE BUILD REQUEST',
      badgeColor: '#38BDF8',
      refNumber: buildReq._id ? String(buildReq._id) : 'N/A',
      customerDetails,
      requirementDetails,
      calculatedDetails: [],
      notesAndTimeline,
      timestamp,
    });

    const text = `
VARDHA WAREHOUSING — NEW BUILD REQUEST
--------------------------------------
ID: ${buildReq._id || 'N/A'}
Date: ${timestamp}

CUSTOMER DETAILS:
- Name: ${buildReq.fullName || 'N/A'}
- Phone: ${buildReq.phone || 'N/A'}
- Email: ${buildReq.email || 'N/A'}
- Company: ${buildReq.companyName || 'N/A'}

BUILD PROJECT DETAILS:
- Location: ${buildReq.preferredLocation || 'N/A'}
- Land Status: ${buildReq.landAvailability || 'N/A'}
- Plot Area: ${buildReq.plotArea || 'N/A'}
- Required Space: ${buildReq.requiredSpace || 'N/A'}
- Intended Usage: ${buildReq.intendedUsage || 'N/A'}
- Project Notes: ${buildReq.projectNotes || 'N/A'}
    `.trim();

    return await sendNotificationEmail({
      subject,
      html,
      text,
      replyTo: buildReq.email,
    });
  } catch (err) {
    console.error('❌ Failed in sendWarehouseBuildNotification:', err);
    return { success: false, error: err.message };
  }
}

// ────────────────────────────────────────────────────────────
// 3. FORM 3 EMAIL: Space & Contact Inquiry
// ────────────────────────────────────────────────────────────
export async function sendInquiryNotification(inquiry) {
  try {
    const name = inquiry.fullName || 'Customer';
    const subject = `New Inquiry Form Submission – ${name}`;
    const timestamp = formatDateTime(inquiry.createdAt);

    const customerDetails = [
      { label: 'Full Name', value: formatValue(inquiry.fullName) },
      { label: 'Phone Number', value: `<a href="tel:${inquiry.phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${formatValue(inquiry.phone)}</a>` },
      { label: 'Email Address', value: inquiry.email ? `<a href="mailto:${inquiry.email}" style="color: #2563eb; text-decoration: none;">${inquiry.email}</a>` : '<em>Not Provided</em>' },
      { label: 'Company Name', value: formatValue(inquiry.companyName) },
    ];

    const requirementDetails = [
      { label: 'Required Warehouse Space', value: `<strong>${formatValue(inquiry.requiredWarehouseSpace)}</strong>` },
      { label: 'Storage Requirement', value: formatValue(inquiry.storageRequirement) },
      { label: 'Timeline', value: formatValue(inquiry.timeline) },
      { label: 'Message / Details', value: formatValue(inquiry.message) },
      { label: 'Source Section', value: formatValue(inquiry.sourcePage) },
    ];

    const notesAndTimeline = [
      { label: 'Inquiry Status', value: `<span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${inquiry.status || 'NEW'}</span>` },
    ];

    const html = buildHtmlTemplate({
      title: subject,
      badgeText: 'CONTACT / GENERAL SPACE INQUIRY',
      badgeColor: '#4ADE80',
      refNumber: inquiry.referenceNumber || 'N/A',
      customerDetails,
      requirementDetails,
      calculatedDetails: [],
      notesAndTimeline,
      timestamp,
    });

    const text = `
VARDHA WAREHOUSING — NEW INQUIRY SUBMISSION
-------------------------------------------
Reference: ${inquiry.referenceNumber || 'N/A'}
Date: ${timestamp}

CUSTOMER DETAILS:
- Name: ${inquiry.fullName || 'N/A'}
- Phone: ${inquiry.phone || 'N/A'}
- Email: ${inquiry.email || 'N/A'}
- Company: ${inquiry.companyName || 'N/A'}

INQUIRY DETAILS:
- Required Space: ${inquiry.requiredWarehouseSpace || 'N/A'}
- Storage Requirement: ${inquiry.storageRequirement || 'N/A'}
- Timeline: ${inquiry.timeline || 'N/A'}
- Message: ${inquiry.message || 'N/A'}
- Source: ${inquiry.sourcePage || 'N/A'}
    `.trim();

    return await sendNotificationEmail({
      subject,
      html,
      text,
      replyTo: inquiry.email,
    });
  } catch (err) {
    console.error('❌ Failed in sendInquiryNotification:', err);
    return { success: false, error: err.message };
  }
}
