/* ============================================
   BUILD A WAREHOUSE PAGE — DEDICATED SERVICE
   ============================================
   Route: /build-a-warehouse
   100% focused on custom warehouse planning and construction.
   ============================================ */

import { CONFIG } from '../config.js';
import { submitBuildWarehouseApi } from '../utils/api.js';
import { attachPhoneMask } from '../utils/validation.js';

export function renderBuildWarehousePage(container) {
  document.title = 'Build a Custom Warehouse in Gorakhpur & Eastern UP — Vardha Warehousing';
  const { contact, whatsapp } = CONFIG;

  const whatsappUrl = contact.whatsapp 
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsapp.constructionMessage || whatsapp.defaultMessage)}`
    : '#build-inquiry';

  container.innerHTML = `
    <div class="build-page">
      <!-- ── 1. DEDICATED BUILD HERO ── -->
      <div class="build-hero">
        <div class="build-hero-bg">
          <img 
            src="/images/service-build-warehouse.jpg" 
            alt="Commercial warehouse steel structure construction in India" 
            loading="eager" 
          />
        </div>
        <div class="build-hero-overlay"></div>

        <div class="container build-hero-container">
          <div class="build-hero-content">
            <span class="build-hero-badge">CUSTOM WAREHOUSE PLANNING & CONSTRUCTION</span>
            <h1 class="build-hero-title">
              Build a Warehouse<br />
              <span class="hero-highlight">for Your Business</span>
            </h1>
            <p class="build-hero-subtitle">
              From planning your space and layout to commercial warehouse construction, we help turn your warehouse requirement into a functional business facility.
            </p>
            <div class="build-hero-actions">
              <a href="#build-inquiry" class="btn btn-hero-primary" id="build-hero-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
                Discuss Your Warehouse Project
              </a>
              <a href="#how-it-works" class="btn btn-hero-secondary">
                View 4-Step Process ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ── 2. HOW IT WORKS (4-STEP JOURNEY) ── -->
      <div class="build-process-section section" id="how-it-works">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">THE DEVELOPMENT PROCESS</span>
            <h2 class="section-title">How It Works</h2>
            <p class="section-subtitle centered">
              A straightforward, transparent step-by-step roadmap to bring your warehouse project to life.
            </p>
          </div>

          <div class="build-steps-4-grid">
            <div class="step-card">
              <div class="step-num-badge">1</div>
              <div class="step-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 class="step-title">Tell Us Your Requirement</h3>
              <p class="step-desc">Share your target location, land availability, and approximate required space.</p>
            </div>

            <div class="step-card">
              <div class="step-num-badge">2</div>
              <div class="step-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 class="step-title">Planning & Layout</h3>
              <p class="step-desc">Our team reviews project requirements and designs the functional warehouse layout.</p>
            </div>

            <div class="step-card">
              <div class="step-num-badge">3</div>
              <div class="step-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
              </div>
              <h3 class="step-title">Construction</h3>
              <p class="step-desc">The warehouse PEB and civil construction progresses according to the approved plan.</p>
            </div>

            <div class="step-card">
              <div class="step-num-badge">4</div>
              <div class="step-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <h3 class="step-title">Project Handover</h3>
              <p class="step-desc">The completed warehouse is fully prepared, inspected, and delivered for operations.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── 3. WHAT CAN WE HELP WITH? ── -->
      <div class="build-services-section section">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">OUR CAPABILITIES</span>
            <h2 class="section-title">What Can We Help With?</h2>
            <p class="section-subtitle centered">
              Complete turnkey warehouse development and engineering support across Gorakhpur and UP.
            </p>
          </div>

          <div class="build-services-grid">
            <div class="service-box">
              <div class="service-box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h4>Warehouse Planning</h4>
              <p>Site suitability evaluation, vehicular turning radius design, and logistics planning.</p>
            </div>

            <div class="service-box">
              <div class="service-box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h4>Layout Planning</h4>
              <p>Optimized internal pallet racking, dock positioning, and staging zone architecture.</p>
            </div>

            <div class="service-box">
              <div class="service-box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
              </div>
              <h4>Commercial Construction</h4>
              <p>Industrial grade PEB steel structures, laser screed flooring, and metal cladding.</p>
            </div>

            <div class="service-box">
              <div class="service-box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h4>Warehouse Size Planning</h4>
              <p>Right-sizing facility dimensions to meet short-term and multi-year growth demands.</p>
            </div>

            <div class="service-box">
              <div class="service-box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Storage & Operational Needs</h4>
              <p>Temperature consideration, ventilation, fire safety, and electrical load planning.</p>
            </div>

            <div class="service-box">
              <div class="service-box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Project Consultation</h4>
              <p>End-to-end guidance from decades of commercial property experience in Gorakhpur.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── 4. DO YOU ALREADY HAVE LAND? ── -->
      <div class="build-land-section section">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">LAND AVAILABILITY</span>
            <h2 class="section-title">Do You Already Have Land?</h2>
            <p class="section-subtitle centered">
              We work with you regardless of the stage of your property acquisition or project plan.
            </p>
          </div>

          <div class="land-options-grid">
            <div class="land-option-card">
              <div class="land-pill">STAGE A</div>
              <h3 class="land-title">I Already Have Land</h3>
              <p class="land-desc">
                We evaluate your existing plot, examine highway and road access, and plan a custom warehouse tailored to your dimensions.
              </p>
              <div class="land-check">✓ Custom Plot Architecture</div>
            </div>

            <div class="land-option-card highlighted">
              <div class="land-pill pill-gold">STAGE B</div>
              <h3 class="land-title">I Need Land + Warehouse Planning</h3>
              <p class="land-desc">
                Discuss your required target location, highway connectivity preferences, and project requirements with our local team.
              </p>
              <div class="land-check">✓ Turnkey Site & Build</div>
            </div>

            <div class="land-option-card">
              <div class="land-pill">STAGE C</div>
              <h3 class="land-title">I Am Exploring Options</h3>
              <p class="land-desc">
                Share your business idea, required square footage, and timeline to receive an initial feasibility discussion.
              </p>
              <div class="land-check">✓ Project Feasibility & Guidance</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── 5. PROJECT INQUIRY FORM (FORM 2) ── -->
      <div class="build-inquiry-section section" id="build-inquiry">
        <div class="container">
          <div class="build-form-wrapper">
            <div class="section-header text-center">
              <span class="section-label">PROJECT CONSULTATION</span>
              <h2 class="section-title">Request a Warehouse Project Discussion</h2>
              <p class="section-subtitle centered">
                Provide your basic project details. Our team will review and connect with you to discuss the next steps.
              </p>
            </div>

            <div class="build-form-card">
              <form id="build-project-form" novalidate>
                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-name">Full Name *</label>
                    <input type="text" class="form-input" id="build-name" placeholder="Amit Verma" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-company">Business / Company Name</label>
                    <input type="text" class="form-input" id="build-company" placeholder="Verma Logistics" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-phone">Phone Number *</label>
                    <input type="tel" class="form-input" id="build-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-email">Email Address</label>
                    <input type="email" class="form-input" id="build-email" placeholder="amit@example.com" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-location">Target Location / City</label>
                    <input type="text" class="form-input" id="build-location" placeholder="e.g. Gorakhpur / NH-28 Highway" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-land-status">Do you already own commercial land?</label>
                    <select class="form-input form-select" id="build-land-status">
                      <option value="Yes, I have land">Yes, I have land</option>
                      <option value="No, I need land + build">No, I need land + build</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-plot-area">Plot Area (if available)</label>
                    <input type="text" class="form-input" id="build-plot-area" placeholder="e.g. 2 Acres / 50,000 sq. ft." />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-size">Required Warehouse Size</label>
                    <input type="text" class="form-input" id="build-size" placeholder="e.g. 20,000 sq. ft." />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="build-usage">Intended Usage / Sector</label>
                  <input type="text" class="form-input" id="build-usage" placeholder="e.g. Cold Storage, FMCG Distribution, Manufacturing" />
                </div>

                <div class="form-group">
                  <label class="form-label" for="build-notes">Project Notes / Specifications</label>
                  <textarea class="form-input" id="build-notes" rows="3" placeholder="e.g. Looking for 24 ft ceiling height, 4 loading docks, and heavy laser screed flooring."></textarea>
                </div>

                <div id="build-global-error" style="display: none; color: #EF4444; font-size: 0.875rem; margin-bottom: var(--space-4); background: rgba(239, 68, 68, 0.1); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25);"></div>
                <div id="build-global-success" style="display: none; color: #10B981; font-size: 0.9375rem; margin-bottom: var(--space-4); background: rgba(16, 185, 129, 0.1); padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.25);"></div>

                <div class="form-submit-row">
                  <button type="submit" class="btn btn-secondary-dark btn-full" id="build-submit-btn">
                    <span>Request a Discussion</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- ── 6. EXPERIENCE & FINAL CTA ── -->
      <div class="build-final-cta-section">
        <div class="container">
          <div class="final-cta-box cta-box-dark">
            <span class="cta-mini-tag">TRUSTED SINCE 1987</span>
            <h2>Ready to Build Your Warehouse?</h2>
            <p>Speak directly with our commercial development team to plan your facility.</p>
            <div class="final-cta-buttons">
              <a href="#build-inquiry" class="btn btn-hero-primary">
                Request a Discussion
              </a>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp-direct">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initBuildForm();
}

function initBuildForm() {
  const form = document.getElementById('build-project-form');
  const phoneInput = document.getElementById('build-phone');
  const errorBox = document.getElementById('build-global-error');
  const successBox = document.getElementById('build-global-success');
  const submitBtn = document.getElementById('build-submit-btn');

  if (phoneInput) {
    attachPhoneMask(phoneInput);
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (errorBox) errorBox.style.display = 'none';
    if (successBox) successBox.style.display = 'none';

    const name = document.getElementById('build-name')?.value.trim();
    const company = document.getElementById('build-company')?.value.trim();
    const phone = document.getElementById('build-phone')?.value.trim();
    const email = document.getElementById('build-email')?.value.trim();
    const location = document.getElementById('build-location')?.value.trim();
    const landStatus = document.getElementById('build-land-status')?.value;
    const plotArea = document.getElementById('build-plot-area')?.value.trim();
    const size = document.getElementById('build-size')?.value.trim();
    const usage = document.getElementById('build-usage')?.value.trim();
    const notes = document.getElementById('build-notes')?.value.trim();

    // Validation
    if (!name) {
      showError('Please enter your full name.');
      return;
    }

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      showError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Request...';
    }

    try {
      const payload = {
        fullName: name,
        companyName: company || undefined,
        phone: phone,
        email: email || undefined,
        preferredLocation: location || undefined,
        landAvailability: landStatus || undefined,
        plotArea: plotArea || undefined,
        requiredSpace: size || undefined,
        intendedUsage: usage || undefined,
        projectNotes: notes || undefined,
      };

      const result = await submitBuildWarehouseApi(payload);

      if (result.success) {
        form.reset();
        if (successBox) {
          successBox.style.display = 'block';
          successBox.innerHTML = `<strong>✓ Project Request Received!</strong> Thank you, ${name}. Our warehouse development team will contact you at ${phone} to discuss your project requirements.`;
        }
      } else {
        showError(result.message || 'Unable to submit request. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      showError('Network error. Please check your internet connection or reach out on WhatsApp.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Request a Discussion</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
      }
    }
  });

  function showError(msg) {
    if (errorBox) {
      errorBox.style.display = 'block';
      errorBox.textContent = msg;
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
