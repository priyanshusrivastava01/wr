/* ============================================
   INQUIRY WIZARD COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { calculatorState } from './SpaceCalculator.js';
import { formatINR, formatArea, formatRate, generateReferenceNumber } from '../utils/formatting.js';
import { validateStep, attachPhoneMask } from '../utils/validation.js';
import { scrollToSection } from '../utils/scroll.js';

let currentStep = 0;
const steps = ['space', 'business', 'contact', 'review'];
let formData = {};

export function renderInquiryWizard(container) {
  // Listen for open event
  window.addEventListener('open-inquiry-wizard', () => openWizard(container));
}

function openWizard(container) {
  currentStep = 0;
  formData = {
    area: calculatorState.area,
    height: calculatorState.height,
    rate: calculatorState.rate,
    total: calculatorState.total,
    businessName: '',
    businessType: '',
    storageDescription: '',
    fullName: '',
    phone: '',
    email: '',
    contactMethod: 'phone',
  };

  renderStep(container);
  document.body.classList.add('no-scroll');
}

function closeWizard(container) {
  container.innerHTML = '';
  document.body.classList.remove('no-scroll');
}

function renderStep(container) {
  const stepLabels = ['Space', 'Business', 'Contact', 'Review'];

  container.innerHTML = `
    <div class="wizard-overlay open" id="wizard-overlay">
      <div class="wizard-modal">
        <div class="wizard-header">
          <h3>${stepLabels[currentStep]} Details</h3>
          <button class="wizard-close" id="wizard-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="wizard-progress">
          ${steps.map((s, i) => `
            <div class="wizard-progress-step ${i < currentStep ? 'completed' : ''} ${i === currentStep ? 'active' : ''}">
              <span class="wizard-progress-dot">${i < currentStep ? '✓' : i + 1}</span>
              <span>${stepLabels[i]}</span>
            </div>
            ${i < steps.length - 1 ? '<div class="wizard-progress-line"></div>' : ''}
          `).join('')}
        </div>

        <div class="wizard-body">
          ${getStepContent()}
        </div>

        <div class="wizard-footer">
          ${currentStep > 0 ? `<button class="btn btn-ghost" id="wizard-back">← Back</button>` : '<div></div>'}
          ${currentStep < steps.length - 1 
            ? `<button class="btn btn-primary" id="wizard-next">Continue →</button>`
            : `<button class="btn btn-primary btn-lg" id="wizard-submit">Submit Booking Request</button>`
          }
        </div>
      </div>
    </div>
  `;

  // Attach phone mask if on contact step
  if (steps[currentStep] === 'contact') {
    const phoneInput = document.getElementById('wiz-phone');
    if (phoneInput) attachPhoneMask(phoneInput);
  }

  // Event listeners
  document.getElementById('wizard-close')?.addEventListener('click', () => closeWizard(container));
  document.getElementById('wizard-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'wizard-overlay') closeWizard(container);
  });

  document.getElementById('wizard-back')?.addEventListener('click', () => {
    currentStep--;
    renderStep(container);
  });

  document.getElementById('wizard-next')?.addEventListener('click', () => {
    if (validateCurrentStep(container)) {
      saveStepData();
      currentStep++;
      renderStep(container);
    }
  });

  document.getElementById('wizard-submit')?.addEventListener('click', () => {
    const checkbox = document.getElementById('wizard-consent');
    if (!checkbox?.checked) {
      checkbox.parentElement.style.outline = '2px solid var(--color-error)';
      checkbox.parentElement.style.borderRadius = '8px';
      checkbox.parentElement.style.padding = '8px';
      return;
    }
    submitInquiry(container);
  });

  // Edit button on step 1
  document.getElementById('wizard-edit-req')?.addEventListener('click', () => {
    closeWizard(container);
    scrollToSection('#calculator');
  });
}

function getStepContent() {
  switch (steps[currentStep]) {
    case 'space':
      return `
        <div class="wizard-space-summary">
          <div class="wizard-space-grid">
            <div class="wizard-space-item">
              <div class="wizard-space-label">Required Area</div>
              <div class="wizard-space-value">${formatArea(formData.area)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Preferred Height</div>
              <div class="wizard-space-value">${formData.height ? (formData.height === 'Not Sure' ? 'Not Sure' : formData.height + ' ft') : 'Not selected'}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Estimated Rate</div>
              <div class="wizard-space-value">${formatRate(formData.rate)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Estimated Price</div>
              <div class="wizard-space-value accent">${formatINR(formData.total)}</div>
            </div>
          </div>
        </div>
        <button class="btn btn-outline btn-sm" id="wizard-edit-req">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          Edit Requirement
        </button>
      `;

    case 'business':
      return `
        <div class="form-group">
          <label class="form-label" for="wiz-business-name">Business Name</label>
          <input type="text" class="form-input" id="wiz-business-name" placeholder="e.g. Sharma Logistics & Retail Pvt. Ltd." value="${formData.businessName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-business-type">Business Type</label>
          <select class="form-select" id="wiz-business-type">
            <option value="">Select your business type</option>
            ${CONFIG.businessTypes.map(t => `<option value="${t}" ${formData.businessType === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-storage">What would you like to store?</label>
          <textarea class="form-input" id="wiz-storage" rows="3" placeholder="e.g. FMCG packaged food products, garments, consumer electronics...">${formData.storageDescription}</textarea>
          <span class="form-helper">A brief description helps us understand your storage requirement better.</span>
        </div>
      `;

    case 'contact':
      return `
        <div class="form-group">
          <label class="form-label" for="wiz-fullname">Full Name</label>
          <input type="text" class="form-input" id="wiz-fullname" placeholder="e.g. Rajesh Sharma" value="${formData.fullName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-phone">Mobile Number (10 Digits)</label>
          <input type="tel" class="form-input" id="wiz-phone" placeholder="e.g. 9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" value="${formData.phone}" />
          <span class="form-helper">Enter 10-digit Indian mobile number without +91 or 0.</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-email">Email Address</label>
          <input type="email" class="form-input" id="wiz-email" placeholder="e.g. rajesh.sharma@example.com" value="${formData.email}" />
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Contact Method</label>
          <div class="calc-height-options" style="margin-top: var(--space-2);">
            ${CONFIG.contactMethods.map(m => `
              <button class="calc-height-option ${formData.contactMethod === m.value ? 'active' : ''}" data-method="${m.value}" style="min-width: 80px;">${m.label}</button>
            `).join('')}
          </div>
        </div>
      `;

    case 'review':
      return `
        <div class="wizard-review-group">
          <h4>Your Warehouse Requirement</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Required Area</span>
              <span class="wizard-review-value">${formatArea(formData.area)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Height</span>
              <span class="wizard-review-value">${formData.height ? (formData.height === 'Not Sure' ? 'Not Sure' : formData.height + ' ft') : 'Not selected'}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Estimated Rate</span>
              <span class="wizard-review-value">${formatRate(formData.rate)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Estimated Price</span>
              <span class="wizard-review-value highlight">${formatINR(formData.total)}</span>
            </div>
          </div>
        </div>
        <div class="wizard-review-group">
          <h4>Business Details</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Business Name</span>
              <span class="wizard-review-value">${formData.businessName || '—'}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Business Type</span>
              <span class="wizard-review-value">${formData.businessType || '—'}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Storage Requirement</span>
              <span class="wizard-review-value">${formData.storageDescription || '—'}</span>
            </div>
          </div>
        </div>
        <div class="wizard-review-group">
          <h4>Contact Details</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Name</span>
              <span class="wizard-review-value">${formData.fullName}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Mobile Number</span>
              <span class="wizard-review-value">${formData.phone}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Email</span>
              <span class="wizard-review-value">${formData.email}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Contact</span>
              <span class="wizard-review-value" style="text-transform: capitalize;">${formData.contactMethod}</span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="wizard-consent" />
          <label for="wizard-consent">I understand that this submission is a warehouse inquiry/request and final availability and terms will be confirmed by Vardha Warehousing.</label>
        </div>
      `;
  }
}

function saveStepData() {
  switch (steps[currentStep]) {
    case 'business':
      formData.businessName = document.getElementById('wiz-business-name')?.value.trim() || '';
      formData.businessType = document.getElementById('wiz-business-type')?.value || '';
      formData.storageDescription = document.getElementById('wiz-storage')?.value.trim() || '';
      break;
    case 'contact':
      formData.fullName = document.getElementById('wiz-fullname')?.value.trim() || '';
      formData.phone = document.getElementById('wiz-phone')?.value.replace(/\D/g, '').slice(0, 10) || '';
      formData.email = document.getElementById('wiz-email')?.value.trim() || '';
      const activeMethod = document.querySelector('[data-method].active');
      if (activeMethod) formData.contactMethod = activeMethod.dataset.method;
      break;
  }
}

function validateCurrentStep(container) {
  switch (steps[currentStep]) {
    case 'space':
      return true;
    case 'business': {
      saveStepData();
      const result = validateStep('business', formData);
      if (!result.isValid) showErrors(result.errors);
      return result.isValid;
    }
    case 'contact': {
      saveStepData();
      const result = validateStep('contact', formData);
      if (!result.isValid) showErrors(result.errors);
      return result.isValid;
    }
    default:
      return true;
  }
}

function showErrors(errors) {
  // Clear previous errors
  document.querySelectorAll('.form-error').forEach(e => e.remove());
  document.querySelectorAll('.form-input.error, .form-select.error').forEach(e => e.classList.remove('error'));

  Object.entries(errors).forEach(([field, message]) => {
    const fieldMap = {
      businessName: 'wiz-business-name',
      businessType: 'wiz-business-type',
      fullName: 'wiz-fullname',
      phone: 'wiz-phone',
      email: 'wiz-email',
    };

    const input = document.getElementById(fieldMap[field]);
    if (input) {
      input.classList.add('error');
      const errorEl = document.createElement('div');
      errorEl.className = 'form-error';
      errorEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${message}`;
      input.parentElement.appendChild(errorEl);
    }
  });
}

function submitInquiry(container) {
  const referenceNumber = generateReferenceNumber();
  formData.referenceNumber = referenceNumber;

  // Close wizard
  closeWizard(container);

  // Open success screen
  window.dispatchEvent(new CustomEvent('show-success', { detail: formData }));
}

// Initialize contact method buttons after render
const observer = new MutationObserver(() => {
  document.querySelectorAll('[data-method]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-method]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      formData.contactMethod = btn.dataset.method;
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });
