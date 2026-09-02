/* ============================================
   EMAIL TEMPLATES
   Ready for future backend integration.
   ============================================ */

import { formatINR, formatArea, formatRate, formatDate } from './formatting.js';
import { CONFIG } from '../config.js';

/**
 * Generate HTML email template for the customer.
 */
export function generateCustomerEmail(data) {
  return {
    subject: 'Your Vardha Warehousing Request Has Been Received',
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #0F1B2D; padding: 32px; text-align: center;">
          <h1 style="color: #C8965A; margin: 0; font-size: 24px;">Vardha Warehousing</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #0F1B2D; margin-bottom: 16px;">Your Request Has Been Received</h2>
          <p style="color: #64748B; line-height: 1.6;">
            Dear ${data.fullName || 'Customer'},<br><br>
            Thank you for sharing your warehouse requirement. Our team will review your request and contact you.
          </p>
          
          <div style="background: #F7F8FA; border-radius: 12px; padding: 24px; margin: 24px 0;">
            <h3 style="color: #0F1B2D; margin-bottom: 16px; font-size: 16px;">Your Requirement Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;">Reference</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #0F1B2D;">${data.referenceNumber || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;">Required Area</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #0F1B2D;">${formatArea(data.area)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;">Preferred Height</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #0F1B2D;">${data.height ? data.height + ' ft' : 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;">Estimated Price</td>
                <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #C8965A; font-size: 18px;">${formatINR(data.total)}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #64748B; font-size: 14px; line-height: 1.6;">
            <em>This is an estimated price. Final availability and terms will be confirmed by our team.</em>
          </p>
        </div>
        <div style="background: #F7F8FA; padding: 24px; text-align: center;">
          <p style="color: #94A3B8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Vardha Warehousing. All rights reserved.</p>
        </div>
      </div>
    `,
  };
}

/**
 * Generate HTML email template for the company (internal notification).
 */
export function generateCompanyEmail(data) {
  return {
    subject: `New Warehouse Inquiry — ${data.fullName || 'Unknown'} — ${formatArea(data.area)}`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #0F1B2D; padding: 24px;">
          <h1 style="color: #C8965A; margin: 0; font-size: 20px;">New Warehouse Inquiry</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">${formatDate()}</p>
        </div>
        <div style="padding: 24px;">
          <div style="margin-bottom: 24px;">
            <h3 style="color: #0F1B2D; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px; width: 140px;">Name</td><td style="font-weight: 600;">${data.fullName || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Phone</td><td style="font-weight: 600;">${data.phone || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Email</td><td style="font-weight: 600;">${data.email || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Preferred Contact</td><td style="font-weight: 600;">${data.contactMethod || '—'}</td></tr>
            </table>
          </div>
          <div style="margin-bottom: 24px;">
            <h3 style="color: #0F1B2D; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Business Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px; width: 140px;">Business Name</td><td style="font-weight: 600;">${data.businessName || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Business Type</td><td style="font-weight: 600;">${data.businessType || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Storage Need</td><td style="font-weight: 600;">${data.storageDescription || '—'}</td></tr>
            </table>
          </div>
          <div style="background: #F7F8FA; border-radius: 12px; padding: 20px;">
            <h3 style="color: #0F1B2D; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Requirement</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px; width: 140px;">Reference</td><td style="font-weight: 600;">${data.referenceNumber || '—'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Area</td><td style="font-weight: 600;">${formatArea(data.area)}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Height</td><td style="font-weight: 600;">${data.height ? data.height + ' ft' : 'Not specified'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Rate</td><td style="font-weight: 600;">${formatRate(data.rate)}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B; font-size: 14px;">Estimated Price</td><td style="font-weight: 700; color: #C8965A; font-size: 18px;">${formatINR(data.total)}</td></tr>
            </table>
          </div>
        </div>
      </div>
    `,
  };
}
