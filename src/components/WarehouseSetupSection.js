/* ============================================
   WAREHOUSE CONSTRUCTION & DEVELOPMENT COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { validateStep, attachPhoneMask } from '../utils/validation.js';
import { scrollToSection } from '../utils/scroll.js';
import { submitBuildWarehouseApi } from '../utils/api.js';

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

          <div class="journey-card custom-build-card active">
            <div class="journey-card-badge featured">Option B • Build-to-Suit</div>
            <h3>Want a Custom Warehouse Built by Us?</h3>
            <p>We handle land evaluation, design, engineering, approvals, and construction for your specific commercial needs.</p>
            <ul class="journey-points">
              <li>✓ Custom dimensions & ceiling heights</li>
              <li>✓ Heavy-duty flooring & industrial layout</li>
              <li>✓ Complete turnkey project execution</li>
            </ul>
            <span class="journey-active-tag">Fill Project Details Below ↓</span>
          </div>
        </div>

        <div class="setup-grid">
          <!-- Left: Value Proposition & Process Steps -->
          <div class="setup-content reveal-left">
            <div class="setup-intro-box">
              <span class="setup-pill">BUILD-TO-SUIT SERVICES</span>
              <h3 class="setup-heading">End-to-End Warehouse Development in Eastern UP</h3>
              <p class="setup-lead">
                Since 1987, Vardha Warehousing has been a trusted industrial partner in Gorakhpur. Whether you own commercial land or want us to build on a strategic highway plot, we build world-class logistics facilities tailored to your business.
              </p>
            </div>

            <!-- Clear Step Cards -->
            <div class="setup-steps-list">
              <div class="setup-step-card">
                <div class="setup-step-num">1</div>
                <div class="setup-step-body">
                  <h4>Requirement Discussion</h4>
                  <p>Tell us your planned usage, space requirement (10,000+ sq. ft.), and desired location in Gorakhpur / UP.</p>
                </div>
              </div>

              <div class="setup-step-card">
                <div class="setup-step-num">2</div>
                <div class="setup-step-body">
                  <h4>Land & Layout Planning</h4>
                  <p>We evaluate your land or propose prime highway-connected plots with full civil engineering layouts.</p>
                </div>
              </div>

              <div class="setup-step-card">
                <div class="setup-step-num">3</div>
                <div class="setup-step-body">
                  <h4>Civil Construction & Handover</h4>
                  <p>PEB structures, heavy-duty trimix flooring, dock levellers, fire NOCs, and handover on schedule.</p>
                </div>
              </div>
            </div>

            <!-- Direct Contact Banner -->
            <div class="setup-whatsapp-banner">
              <div class="banner-text">
                <strong>Prefer discussing over call or WhatsApp?</strong>
                <p>Speak directly with our project development head.</p>
              </div>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <!-- Right: Project Requirement Consultation Form -->
          <div class="setup-form-card reveal-right" id="setup-form-container">
            <div class="setup-form-header">
              <h3>Warehouse Project Discussion</h3>
              <p>Share your vision and requirements — we will prepare a feasibility review.</p>
            </div>

            <form id="setup-form" novalidate>
              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-name">Your Full Name *</label>
                  <input type="text" class="form-input" id="setup-name" placeholder="e.g. Ramesh Chandra" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-company">Company / Business Name</label>
                  <input type="text" class="form-input" id="setup-company" placeholder="e.g. Chandra Agro Foods" />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-phone">Phone Number *</label>
                  <input type="tel" class="form-input" id="setup-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-email">Email Address</label>
                  <input type="email" class="form-input" id="setup-email" placeholder="ramesh@example.com" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-location">Target Location / City *</label>
                <input type="text" class="form-input" id="setup-location" placeholder="e.g. Gorakhpur, Basti, Deoria, or specific highway" />
              </div>

              <!-- Land Status Radio -->
              <div class="form-group" id="group-has-land">
                <label class="form-label">Do you already own commercial land? *</label>
                <div class="radio-options-row">
                  <label class="radio-option-pill">
                    <input type="radio" name="setup-has-land" value="YES" />
                    <span>Yes, I have land</span>
                  </label>
                  <label class="radio-option-pill">
                    <input type="radio" name="setup-has-land" value="NO" />
                    <span>No, need land + build</span>
                  </label>
                  <label class="radio-option-pill">
                    <input type="radio" name="setup-has-land" value="EXPLORING" />
                    <span>Just exploring</span>
                  </label>
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-plot-area">Plot Area (if available)</label>
                  <input type="text" class="form-input" id="setup-plot-area" placeholder="e.g. 1 Acre / 40,000 sq ft" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-space">Required Warehouse Size</label>
                  <input type="text" class="form-input" id="setup-space" placeholder="e.g. 15,000 sq ft covered" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-use-case">Intended Usage / Sector</label>
                <select class="form-input" id="setup-use-case">
                  <option value="">Select intended usage...</option>
                  <option value="FMCG & Consumer Goods">FMCG & Consumer Goods</option>
                  <option value="Cold Storage / Agro Processing">Cold Storage / Agro Processing</option>
                  <option value="E-Commerce Fulfillment">E-Commerce Fulfillment</option>
                  <option value="Pharmaceuticals">Pharmaceuticals</option>
                  <option value="Manufacturing & Raw Material">Manufacturing & Raw Material</option>
                  <option value="General Commercial Storage">General Commercial Storage</option>
                  <option value="Other">Other Requirement</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-requirement">Project Notes / Specifications</label>
                <textarea 
                  class="form-input" 
                  id="setup-requirement" 
                  rows="3" 
                  placeholder="Briefly tell us what you are planning to build and how you want to use the warehouse."
                ></textarea>
              </div>

              <div id="setup-global-error" style="display: none; color: #EF4444; font-size: 0.85rem; margin-bottom: var(--space-3); background: rgba(239, 68, 68, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.25);"></div>

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
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const globalErrorEl = document.getElementById('setup-global-error');
    if (globalErrorEl) globalErrorEl.style.display = 'none';

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

    try {
      const payload = {
        fullName: data.name,
        phone: data.phone,
        email: data.email,
        companyName: data.company,
        preferredLocation: data.location,
        landAvailability: data.hasLand,
        plotArea: data.plotArea,
        requiredSpace: data.space || data.plotArea || '',
        warehouseRequirement: 'Build a Warehouse',
        message: `Land status: ${data.hasLand}. Plot area: ${data.plotArea || 'N/A'}. Usage: ${data.useCase || 'General'}. Project notes: ${data.requirement || 'None'}.`,
        sourcePage: 'BUILD_A_WAREHOUSE',
      };

      const response = await submitBuildWarehouseApi(payload);

      if (response.success) {
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
      } else {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Request a Discussion`;
        }
        if (globalErrorEl) {
          globalErrorEl.textContent = response.message || 'Something went wrong. Please try again.';
          globalErrorEl.style.display = 'block';
        }
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Request a Discussion`;
      }
      if (globalErrorEl) {
        globalErrorEl.textContent = 'Unable to reach backend server. Please check if backend is running.';
        globalErrorEl.style.display = 'block';
      }
    }
  });

  document.getElementById('journey-ready-btn')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });
}
