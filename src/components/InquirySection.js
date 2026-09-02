/* ============================================
   INQUIRY SECTION COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { validateStep, attachPhoneMask } from '../utils/validation.js';

export function renderInquirySection(container) {
  container.innerHTML = `
    <div class="inquiry-section section">
      <div class="container">
        <div class="inquiry-grid">
          <div class="inquiry-content reveal-left">
            <span class="section-label">Get in Touch</span>
            <h2>Let's Find the Right Warehouse Space for Your Business</h2>
            <p>Tell us what you need and our team will help you explore the next step. Whether you have a specific space requirement or just want to understand your options, we're here to help.</p>
          </div>

          <div class="inquiry-form-card reveal-right" id="inquiry-form-container">
            <form id="inquiry-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="inq-name">Full Name</label>
                <input type="text" class="form-input" id="inq-name" placeholder="e.g. Amit Patel" />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-company">Company Name</label>
                <input type="text" class="form-input" id="inq-company" placeholder="e.g. Patel Trading & Logistics (optional)" />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="inq-phone">Mobile (10 Digits)</label>
                  <input type="tel" class="form-input" id="inq-phone" placeholder="e.g. 9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="inq-email">Email Address</label>
                  <input type="email" class="form-input" id="inq-email" placeholder="e.g. amit.patel@example.com" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-space">Required Space</label>
                <input type="text" class="form-input" id="inq-space" placeholder="e.g. 5,000 sq. ft." />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-message">Message</label>
                <textarea class="form-input" id="inq-message" rows="3" placeholder="e.g. Looking for ready-to-move storage space for FMCG distribution near Gorakhnath Road."></textarea>
              </div>
              <div class="inquiry-form-actions">
                <button type="submit" class="btn btn-primary btn-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
                  Send Inquiry
                </button>
                <button type="button" class="btn btn-whatsapp" id="inq-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach 10-digit mobile filter
  const phoneInput = document.getElementById('inq-phone');
  if (phoneInput) attachPhoneMask(phoneInput);

  const form = document.getElementById('inquiry-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('inq-name').value.trim(),
      phone: document.getElementById('inq-phone').value.replace(/\D/g, '').slice(0, 10),
      email: document.getElementById('inq-email').value.trim(),
    };

    const result = validateStep('inquiry', data);
    if (!result.isValid) {
      Object.entries(result.errors).forEach(([field, msg]) => {
        const map = { name: 'inq-name', phone: 'inq-phone', email: 'inq-email' };
        const input = document.getElementById(map[field]);
        if (input) {
          input.classList.add('error');
          const existing = input.parentElement.querySelector('.form-error');
          if (existing) existing.remove();
          const errorEl = document.createElement('div');
          errorEl.className = 'form-error';
          errorEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${msg}`;
          input.parentElement.appendChild(errorEl);
        }
      });
      return;
    }

    const container = document.getElementById('inquiry-form-container');
    container.innerHTML = `
      <div class="inquiry-form-success">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <h3>Inquiry Sent Successfully</h3>
        <p style="color: rgba(255,255,255,0.7);">Thank you, ${data.name}! Our team will review your inquiry and get in touch with you shortly.</p>
      </div>
    `;
  });

  document.getElementById('inq-whatsapp')?.addEventListener('click', () => {
    const { contact, whatsapp } = CONFIG;
    if (!contact.whatsapp) {
      alert('WhatsApp number has not been configured yet.');
      return;
    }
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsapp.defaultMessage)}`, '_blank');
  });
}
