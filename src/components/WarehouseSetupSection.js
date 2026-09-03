/* ============================================
   WAREHOUSE CONSTRUCTION & DEVELOPMENT COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { validateStep, attachPhoneMask } from '../utils/validation.js';
import { scrollToSection } from '../utils/scroll.js';

export function renderWarehouseSetupSection(container) {
  const { contact, whatsapp } = CONFIG;
  const whatsappUrl = contact.whatsapp 
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsapp.constructionMessage || whatsapp.defaultMessage)}`
    : '#contact';

  container.innerHTML = `
    <div class="setup-section section" id="warehouse-setup">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Warehouse Construction & Development</span>
          <h2>Planning Your Own Warehouse?</h2>
          <p class="section-subtitle centered">
            If you have a business requirement and are planning to develop your own warehouse, 
            share your basic project details with us. Our team can understand your requirement and discuss the next steps with you.
          </p>
        </div>

        <!-- Dual Journey Visual Selector -->
        <div class="setup-dual-journey reveal">
          <div class="journey-card journey-ready">
            <div class="journey-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <div class="journey-card-text">
              <span class="journey-tag">OPTION 1: READY SPACE</span>
              <h4>Need Warehouse Space?</h4>
              <p>Rent 1,000 to 42,000 sq. ft. ready space in our Gorakhpur facility with 24×7 operations.</p>
            </div>
            <button type="button" class="btn btn-outline btn-sm journey-btn" id="journey-ready-btn">
              Explore Space & Rates →
            </button>
          </div>

          <div class="journey-card journey-custom active">
            <div class="journey-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
            </div>
            <div class="journey-card-text">
              <span class="journey-tag active">OPTION 2: BUILD A WAREHOUSE</span>
              <h4>Planning Your Own Project?</h4>
              <p>Discuss land assessment, layout design, and commercial construction planning.</p>
            </div>
            <span class="journey-active-badge">Fill Project Details Below ↓</span>
          </div>
        </div>

        <div class="setup-grid">
          <!-- Left: Process & Consultation Details -->
          <div class="setup-content reveal-left">
            <div class="setup-intro-box">
              <h3>Custom Warehouse Requirement Discussion</h3>
              <p>
                From land assessment in Gorakhpur and Eastern UP to planning space dimensions, 
                our team provides experienced consultation to help you plan your commercial warehouse facility.
              </p>
            </div>

            <div class="setup-steps-list">
              <div class="setup-step-card">
                <div class="setup-step-num">1</div>
                <div class="setup-step-body">
                  <h4>Share Your Requirement</h4>
                  <p>Tell us about your location, land availability, and proposed warehouse size.</p>
                </div>
              </div>

              <div class="setup-step-card">
                <div class="setup-step-num">2</div>
                <div class="setup-step-body">
                  <h4>Discuss Your Project</h4>
                  <p>Our experienced team reviews your details and connects with you for a consultation.</p>
                </div>
              </div>

              <div class="setup-step-card">
                <div class="setup-step-num">3</div>
                <div class="setup-step-body">
                  <h4>Plan the Next Steps</h4>
                  <p>Discuss project feasibility, layout options, and suitable commercial execution.</p>
                </div>
              </div>
            </div>

            <!-- WhatsApp Quick CTA -->
            <div class="setup-whatsapp-banner">
              <div class="setup-whatsapp-text">
                <strong>Prefer chatting directly?</strong>
                <p>Discuss your warehouse development project with us on WhatsApp.</p>
              </div>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discuss on WhatsApp
              </a>
            </div>
          </div>

          <!-- Right: Dedicated Construction Inquiry Form -->
          <div class="setup-form-card reveal-right" id="setup-form-container">
            <div class="setup-form-header">
              <h3>Tell Us About Your Warehouse Project</h3>
              <p>Share a few details and we will understand your requirement better.</p>
            </div>

            <form id="setup-form" novalidate>
              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-name">Full Name <span class="req">*</span></label>
                  <input type="text" class="form-input" id="setup-name" placeholder="Rahul Sharma" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-company">Business / Company Name</label>
                  <input type="text" class="form-input" id="setup-company" placeholder="Sharma Logistics Pvt. Ltd." />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-phone">Phone Number <span class="req">*</span></label>
                  <input 
                    type="tel" 
                    class="form-input" 
                    id="setup-phone" 
                    placeholder="9876543210" 
                    maxlength="10" 
                    inputmode="numeric" 
                    pattern="[0-9]{10}"
                    required 
                  />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-email">Email Address <span class="req">*</span></label>
                  <input type="email" class="form-input" id="setup-email" placeholder="rahul.sharma@example.com" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-location">Project Location (City / District / State) <span class="req">*</span></label>
                <input type="text" class="form-input" id="setup-location" placeholder="Gorakhpur, Uttar Pradesh" required />
              </div>

              <div class="form-group" id="group-has-land">
                <label class="form-label">Do You Have Land? <span class="req">*</span></label>
                <div class="radio-options-row">
                  <label class="radio-pill">
                    <input type="radio" name="setup-has-land" value="Yes" />
                    <span>Yes</span>
                  </label>
                  <label class="radio-pill">
                    <input type="radio" name="setup-has-land" value="No" />
                    <span>No</span>
                  </label>
                  <label class="radio-pill">
                    <input type="radio" name="setup-has-land" value="Not Sure Yet" checked />
                    <span>Not Sure Yet</span>
                  </label>
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-plot-area">Approximate Plot / Land Area</label>
                  <input type="text" class="form-input" id="setup-plot-area" placeholder="e.g. 20,000 sq. ft." />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-space">Approximate Warehouse Size Required</label>
                  <input type="text" class="form-input" id="setup-space" placeholder="e.g. 10,000 sq. ft." />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-use-case">What Will the Warehouse Be Used For?</label>
                <select class="form-input form-select" id="setup-use-case">
                  <option value="Storage">Storage</option>
                  <option value="Logistics">Logistics</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Distribution">Distribution</option>
                  <option value="Manufacturing Support">Manufacturing Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-requirement">Project Requirement Details</label>
                <textarea 
                  class="form-input" 
                  id="setup-requirement" 
                  rows="3" 
                  placeholder="Briefly tell us what you are planning to build and how you want to use the warehouse."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-full" id="setup-submit-btn">
                Request a Discussion
              </button>
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

    // Clear previous errors
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(el => el.remove());

    const selectedLandRadio = form.querySelector('input[name="setup-has-land"]:checked');

    const data = {
      name: document.getElementById('setup-name').value.trim(),
      company: document.getElementById('setup-company').value.trim(),
      phone: document.getElementById('setup-phone').value.replace(/\D/g, '').slice(0, 10),
      email: document.getElementById('setup-email').value.trim(),
      location: document.getElementById('setup-location').value.trim(),
      hasLand: selectedLandRadio ? selectedLandRadio.value : '',
      plotArea: document.getElementById('setup-plot-area').value.trim(),
      space: document.getElementById('setup-space').value.trim(),
      useCase: document.getElementById('setup-use-case').value,
      requirement: document.getElementById('setup-requirement').value.trim(),
    };

    const result = validateStep('setup', data);
    if (!result.isValid) {
      Object.entries(result.errors).forEach(([field, msg]) => {
        const map = {
          name: 'setup-name',
          phone: 'setup-phone',
          email: 'setup-email',
          location: 'setup-location',
          hasLand: 'group-has-land',
        };
        const targetId = map[field];
        const input = document.getElementById(targetId);
        if (input) {
          input.classList.add('error');
          const errorEl = document.createElement('div');
          errorEl.className = 'form-error';
          errorEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${msg}`;
          input.parentElement.appendChild(errorEl);
        }
      });
      return;
    }

    const submitBtn = document.getElementById('setup-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Submitting Your Request...
      `;
    }

    setTimeout(() => {
      const container = document.getElementById('setup-form-container');
      container.innerHTML = `
        <div class="setup-form-success">
          <div class="success-icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p class="success-main-msg">Your warehouse project requirement has been submitted.</p>
          <p class="success-sub-msg">Our team will review the details and get in touch with you shortly.</p>
          
          <div class="success-summary-box">
            <div class="summary-line"><span>Name:</span> <strong>${data.name}</strong></div>
            <div class="summary-line"><span>Location:</span> <strong>${data.location}</strong></div>
            <div class="summary-line"><span>Phone:</span> <strong>+91 ${data.phone}</strong></div>
            ${data.useCase ? `<div class="summary-line"><span>Usage:</span> <strong>${data.useCase}</strong></div>` : ''}
          </div>

          <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-full" style="margin-top: var(--space-4);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Follow Up on WhatsApp
          </a>
        </div>
      `;
    }, 600);
  });

  document.getElementById('journey-ready-btn')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });
}
