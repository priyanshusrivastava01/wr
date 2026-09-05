/* ============================================
   DIAGNOSTIC & PRODUCTION HEALTH ROUTES
   ============================================
   Provides safe runtime environment audit and
   direct Resend email pipeline testing for Render.
   ============================================ */

import express from 'express';
import mongoose from 'mongoose';
import { Resend } from 'resend';

const router = express.Router();

/**
 * @desc    Get Safe Runtime Diagnostic Status
 * @route   GET /api/diag/status
 */
router.get('/status', (req, res) => {
  const hasMongo = !!(process.env.MONGODB_URI && !process.env.MONGODB_URI.includes('your_mongodb_atlas'));
  const rawKey = process.env.RESEND_API_KEY || '';
  const hasResend = rawKey.startsWith('re_') && rawKey.length > 10;
  const fromEmail = process.env.EMAIL_FROM || 'Vardha Warehousing <onboarding@resend.dev>';
  const toEmail = process.env.EMAIL_TO || 'linksvardha1@gmail.com';

  // Safe masking for recipient (e.g. li***@gmail.com)
  const maskEmail = (em) => {
    if (!em || !em.includes('@')) return 'Not Configured';
    const [name, domain] = em.split('@');
    const maskedName = name.length > 2 ? `${name.slice(0, 2)}***` : `${name}***`;
    return `${maskedName}@${domain}`;
  };

  res.status(200).json({
    success: true,
    service: 'Vardha Warehousing Backend',
    timestamp: new Date().toISOString(),
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
      connected: mongoose.connection.readyState === 1,
      readyState: mongoose.connection.readyState,
    },
    environmentAudit: {
      MONGODB_URI: hasMongo ? 'CONFIGURED' : 'MISSING',
      RESEND_API_KEY: hasResend ? 'CONFIGURED (Valid re_ prefix)' : 'MISSING',
      EMAIL_FROM: fromEmail,
      EMAIL_TO: maskEmail(toEmail),
    },
    deploymentChecklist: {
      renderReady: hasMongo && hasResend,
      instructions: !hasResend
        ? 'Add RESEND_API_KEY in Render Dashboard -> Environment'
        : 'All required environment variables are active',
    },
  });
});

/**
 * @desc    Send Controlled Diagnostic Email via Resend
 * @route   POST /api/diag/test-email
 */
router.post('/test-email', async (req, res) => {
  console.log('\n🧪 [DIAGNOSTIC TEST EMAIL REQUEST RECEIVED]');

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !apiKey.startsWith('re_')) {
    console.error('❌ [Diagnostic Error] RESEND_API_KEY is not set or invalid in environment.');
    return res.status(500).json({
      success: false,
      errorType: 'CONFIGURATION_ERROR',
      message: 'RESEND_API_KEY is missing or invalid in Render Environment Variables.',
      provider: 'resend',
    });
  }

  const fromEmail = process.env.EMAIL_FROM || 'Vardha Warehousing <onboarding@resend.dev>';
  const toEmail = process.env.EMAIL_TO || 'linksvardha1@gmail.com';

  const resend = new Resend(apiKey.trim());

  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const payload = {
      from: fromEmail,
      to: toEmail,
      subject: `[Diagnostic Test] Vardha Warehousing Email Pipeline – ${timestamp}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0F172A; color: #FFFFFF; border-radius: 8px;">
          <h2 style="color: #EAB308;">✓ Vardha Warehousing Diagnostic Email Test</h2>
          <p>This is a verified test email sent from the live backend server.</p>
          <hr style="border: 1px solid #334155;" />
          <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
          <p><strong>Sender:</strong> ${fromEmail}</p>
          <p><strong>Recipient:</strong> ${toEmail}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>
      `,
      text: `Vardha Warehousing Diagnostic Email Test. Server Timestamp: ${timestamp}`,
    };

    console.log(`✉️ [Diagnostic Dispatching] To: ${toEmail} | From: ${fromEmail}`);
    const { data, error } = await resend.emails.send(payload);

    if (error) {
      console.error('❌ [Diagnostic Resend Error]:', error);
      return res.status(502).json({
        success: false,
        errorType: 'RESEND_API_ERROR',
        message: error.message || 'Resend rejected the email dispatch request',
        providerError: error,
      });
    }

    console.log(`✅ [Diagnostic Test Email Accepted by Resend] Message ID: ${data?.id}`);
    return res.status(200).json({
      success: true,
      message: 'Diagnostic test email successfully accepted by Resend provider.',
      emailId: data?.id,
      provider: 'resend',
      recipientMasked: `${toEmail.slice(0, 3)}***@${toEmail.split('@')[1] || ''}`,
    });
  } catch (err) {
    console.error('❌ [Diagnostic Email Exception]:', err);
    return res.status(500).json({
      success: false,
      errorType: 'INTERNAL_EXCEPTION',
      message: err.message || 'An unexpected exception occurred during diagnostic email send',
    });
  }
});

export default router;
