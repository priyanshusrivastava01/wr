/* ============================================
   WAREHOUSE SETUP SECTION COMPONENT
   ============================================ */

import { validateStep, attachPhoneMask } from '../utils/validation.js';

export function renderWarehouseSetupSection(container) {
  container.innerHTML = `
    <div class="setup-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Custom Solutions</span>
          <h2>Need a Warehouse Built Around Your Requirements?</h2>
          <p class="section-subtitle centered">We can support warehouse setup requirements based on your specific business needs.</p>
        </div>

        <div class="setup-grid">
          <div class="setup-content reveal-left">
            <div class="setup-features">
              <div class="setup-feature">
                <div class="setup-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span>Requirement-based approach tailored to your business</span>
              </div>
              <div class="setup-feature">
                <div class="setup-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span>Warehouse setup expertise from planning to execution</span>
              </div>
              <div class="setup-feature">
                <div class="setup-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span>Nationwide work and service capabilities</span>
              </div>
            </div>
            <p style="color: var(--color-text-muted); line-height: 1.7;">
              Whether you need a new warehouse setup from scratch or want to optimize 
              an existing space, share your requirement and our team will work with you 
              to find the right solution.
            </p>
          </div>

          <div class="setup-form-card reveal-right" id="setup-form-container">
            <h3>Discuss Your Requirement</h3>
            <form id="setup-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="setup-name">Full Name</label>
                <input type="text" class="form-input" id="setup-name" placeholder="e.g. Vikramaditya Singh" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-company">Company</label>
                <input type="text" class="form-input" id="setup-company" placeholder="e.g. Verma Supply Chain Solutions" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-location">Location</label>
                <input type="text" class="form-input" id="setup-location" placeholder="e.g. Gorakhpur, Uttar Pradesh" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-requirement">Requirement</label>
                <textarea class="form-input" id="setup-requirement" rows="3" placeholder="e.g. Need a 15,000 sq. ft. multi-bay warehouse with office setup and 24x7 transport connectivity..."></textarea>
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-space">Approximate Space</label>
                <input type="text" class="form-input" id="setup-space" placeholder="e.g. 15,000 sq. ft." />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="setup-phone">Mobile (10 Digits)</label>
                  <input type="tel" class="form-input" id="setup-phone" placeholder="e.g. 9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-email">Email Address</label>
                  <input type="email" class="form-input" id="setup-email" placeholder="e.g. vikram.singh@example.com" />
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-full">Submit Requirement</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach real-time 10-digit phone mask
  const phoneInput = document.getElementById('setup-phone');
  if (phoneInput) attachPhoneMask(phoneInput);

  const form = document.getElementById('setup-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('setup-name').value.trim(),
      company: document.getElementById('setup-company').value.trim(),
      phone: document.getElementById('setup-phone').value.replace(/\D/g, '').slice(0, 10),
      email: document.getElementById('setup-email').value.trim(),
      requirement: document.getElementById('setup-requirement').value.trim(),
    };

    const result = validateStep('setup', data);
    if (!result.isValid) {
      Object.entries(result.errors).forEach(([field, msg]) => {
        const map = { name: 'setup-name', phone: 'setup-phone', email: 'setup-email', requirement: 'setup-requirement' };
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

    const container = document.getElementById('setup-form-container');
    container.innerHTML = `
      <div class="setup-form-success">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <h3>Requirement Submitted</h3>
        <p style="color: var(--color-text-muted);">Thank you, ${data.name}! Our team will review your warehouse setup requirement and contact you shortly.</p>
      </div>
    `;
  });
}
