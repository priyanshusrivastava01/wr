/* ============================================
   SPACE CALCULATOR COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { calculatePrice, calculateArea } from '../utils/pricing.js';
import { formatINR, formatArea, formatRate } from '../utils/formatting.js';

// Shared calculator state
export const calculatorState = {
  area: 0,
  height: null,
  rate: 0,
  total: 0,
  isValid: false,
};

export function renderSpaceCalculator(container) {
  const { warehouse } = CONFIG;

  container.innerHTML = `
    <div class="calculator-section section" id="calculator-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Flexible Space & Estimated Pricing</span>
          <h2>Choose the Space That Fits Your Business</h2>
          <p class="section-subtitle centered">Select your required commercial warehouse space between 1,000 sq. ft. and 42,000 sq. ft. and instantly view your estimated pricing.</p>
        </div>

        <div class="calc-container reveal">
          <div class="calc-card">
            <!-- Tabs -->
            <div class="calc-tabs">
              <button class="calc-tab active" data-tab="direct" id="tab-direct">Enter Area Directly</button>
              <button class="calc-tab" data-tab="dimensions" id="tab-dimensions">Calculate from Dimensions</button>
            </div>

            <!-- Tab 1: Direct Area -->
            <div class="calc-tab-content active" id="content-direct">
              <label class="form-label" style="font-size: var(--text-body); margin-bottom: var(--space-3);">
                How much warehouse space do you need?
              </label>
              <p class="form-helper" style="margin-bottom: var(--space-4);">
                Enter the total area you need (1,000 to 42,000 sq. ft.), or choose a common size below.
              </p>
              <div class="calc-area-input-group">
                <input type="number" class="calc-area-input" id="calc-area-direct" 
                  placeholder="e.g. 2,000" min="1000" max="42000" step="100" aria-label="Required area in square feet" />
                <span class="calc-area-unit">sq. ft.</span>
              </div>
              <div class="calc-presets" id="calc-presets">
                ${warehouse.quickPresets.map(p => `
                  <button class="calc-preset" data-value="${p}">${p.toLocaleString('en-IN')} sq. ft.</button>
                `).join('')}
              </div>
            </div>

            <!-- Tab 2: Dimensions -->
            <div class="calc-tab-content" id="content-dimensions">
              <label class="form-label" style="font-size: var(--text-body); margin-bottom: var(--space-3);">
                Know Your Dimensions?
              </label>
              <p class="form-helper" style="margin-bottom: var(--space-5);">
                Enter the width and length of the floor space you need. We will calculate the approximate area for you.
              </p>
              <div class="calc-dimensions">
                <div>
                  <label class="form-label">Width (feet)</label>
                  <input type="number" class="calc-dim-input" id="calc-width" placeholder="e.g. 50" min="0" step="1" />
                </div>
                <div class="calc-dim-multiply">×</div>
                <div>
                  <label class="form-label">Length (feet)</label>
                  <input type="number" class="calc-dim-input" id="calc-length" placeholder="e.g. 40" min="0" step="1" />
                </div>
              </div>
              <div class="calc-dim-result" id="calc-dim-result" style="display:none;">
                <div class="calc-dim-result-label">Calculated Area</div>
                <div class="calc-dim-result-value" id="calc-dim-result-value">0 sq. ft.</div>
              </div>
            </div>

            <!-- Validation Message -->
            <div id="calc-validation" style="display:none;"></div>

            <!-- Height Preference -->
            <div class="calc-height-section">
              <label class="form-label" style="font-size: var(--text-body); margin-bottom: var(--space-3);">
                Preferred Warehouse Height
              </label>
              <p class="form-helper" style="margin-bottom: var(--space-4);">
                Select the ceiling height that best suits your storage needs.
              </p>
              <div class="calc-height-options" id="calc-height-options">
                ${warehouse.heights.map(h => `
                  <button class="calc-height-option" data-height="${h.value}">${h.label}</button>
                `).join('')}
                <button class="calc-height-option not-sure" data-height="not-sure">Not Sure — Help Me Choose</button>
              </div>
            </div>

            <!-- Pricing Summary -->
            <div class="calc-summary empty" id="calc-summary">
              <div class="calc-summary-grid">
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Required Warehouse Space</div>
                  <div class="calc-summary-value" id="summary-area">— sq. ft.</div>
                </div>
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Applicable Rate</div>
                  <div class="calc-summary-value" id="summary-rate">—</div>
                </div>
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Estimated Price</div>
                  <div class="calc-summary-value price" id="summary-price">—</div>
                </div>
              </div>
              <p class="calc-summary-note">Estimated pricing based on your selected warehouse area.</p>
              <div class="calc-summary-actions">
                <button class="btn btn-primary btn-lg" id="calc-continue-btn" disabled>
                  Continue With This Requirement
                </button>
                <button class="btn btn-whatsapp" id="calc-whatsapp-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Talk to Us on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initCalculator();
}

function initCalculator() {
  const directInput = document.getElementById('calc-area-direct');
  const widthInput = document.getElementById('calc-width');
  const lengthInput = document.getElementById('calc-length');
  const tabDirect = document.getElementById('tab-direct');
  const tabDimensions = document.getElementById('tab-dimensions');
  const contentDirect = document.getElementById('content-direct');
  const contentDimensions = document.getElementById('content-dimensions');
  const presets = document.getElementById('calc-presets');
  const heightOptions = document.getElementById('calc-height-options');

  // Tab switching
  tabDirect?.addEventListener('click', () => switchTab('direct'));
  tabDimensions?.addEventListener('click', () => switchTab('dimensions'));

  function switchTab(tab) {
    tabDirect.classList.toggle('active', tab === 'direct');
    tabDimensions.classList.toggle('active', tab === 'dimensions');
    contentDirect.classList.toggle('active', tab === 'direct');
    contentDimensions.classList.toggle('active', tab === 'dimensions');
  }

  // Direct area input
  directInput?.addEventListener('input', () => {
    const val = parseFloat(directInput.value);
    updatePresetHighlight(val);
    updatePricing(val);
  });

  // Preset buttons
  presets?.addEventListener('click', (e) => {
    const btn = e.target.closest('.calc-preset');
    if (!btn) return;
    const value = parseInt(btn.dataset.value);
    directInput.value = value;
    updatePresetHighlight(value);
    updatePricing(value);
  });

  function updatePresetHighlight(value) {
    presets.querySelectorAll('.calc-preset').forEach(p => {
      p.classList.toggle('active', parseInt(p.dataset.value) === value);
    });
  }

  // Dimension inputs
  widthInput?.addEventListener('input', updateDimensions);
  lengthInput?.addEventListener('input', updateDimensions);

  function updateDimensions() {
    const w = parseFloat(widthInput.value);
    const l = parseFloat(lengthInput.value);
    const area = calculateArea(w, l);
    const resultDiv = document.getElementById('calc-dim-result');
    const resultValue = document.getElementById('calc-dim-result-value');

    if (area > 0) {
      resultDiv.style.display = 'block';
      resultValue.textContent = formatArea(area);
      updatePricing(area);
    } else {
      resultDiv.style.display = 'none';
      updatePricing(0);
    }
  }

  // Height selection
  heightOptions?.addEventListener('click', (e) => {
    const btn = e.target.closest('.calc-height-option');
    if (!btn) return;
    
    heightOptions.querySelectorAll('.calc-height-option').forEach(h => h.classList.remove('active'));
    btn.classList.add('active');
    
    const val = btn.dataset.height;
    calculatorState.height = val === 'not-sure' ? 'Not Sure' : parseInt(val);
  });

  // Continue button
  document.getElementById('calc-continue-btn')?.addEventListener('click', () => {
    if (calculatorState.isValid) {
      window.dispatchEvent(new CustomEvent('open-inquiry-wizard'));
    }
  });

  // WhatsApp button
  document.getElementById('calc-whatsapp-btn')?.addEventListener('click', () => {
    const { contact, whatsapp } = CONFIG;
    if (!contact.whatsapp) {
      alert('WhatsApp number has not been configured yet. Please update the contact settings.');
      return;
    }
    const msg = calculatorState.area > 0 
      ? whatsapp.contextMessage(calculatorState.area)
      : whatsapp.defaultMessage;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

function updatePricing(area) {
  const result = calculatePrice(area);
  const summary = document.getElementById('calc-summary');
  const summaryArea = document.getElementById('summary-area');
  const summaryRate = document.getElementById('summary-rate');
  const summaryPrice = document.getElementById('summary-price');
  const continueBtn = document.getElementById('calc-continue-btn');
  const validationDiv = document.getElementById('calc-validation');

  // Update shared state
  calculatorState.area = result.area;
  calculatorState.rate = result.rate;
  calculatorState.total = result.total;
  calculatorState.isValid = result.isValid;

  // Dispatch state change event
  window.dispatchEvent(new CustomEvent('calculator-update', { detail: calculatorState }));

  if (result.isValid) {
    summary.classList.remove('empty');
    summaryArea.textContent = formatArea(result.area);
    summaryRate.textContent = formatRate(result.rate);
    summaryPrice.textContent = formatINR(result.total);
    continueBtn.disabled = false;
    validationDiv.style.display = 'none';
  } else {
    if (result.showValidation) {
      validationDiv.innerHTML = `
        <div class="calc-validation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <p>${result.validationMessage}</p>
        </div>
      `;
      validationDiv.style.display = 'block';
    } else {
      validationDiv.style.display = 'none';
    }

    summary.classList.add('empty');
    summaryArea.textContent = result.area > 0 ? formatArea(result.area) : '— sq. ft.';
    summaryRate.textContent = '—';
    summaryPrice.textContent = '—';
    continueBtn.disabled = true;
  }
}
