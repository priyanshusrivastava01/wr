/* ============================================
   DEMO PAYMENT COMPONENT
   ============================================ */

import { formatINR, formatArea } from '../utils/formatting.js';

export function renderDemoPayment(container) {
  window.addEventListener('open-demo-payment', (e) => {
    const data = e.detail;
    showDemoPayment(container, data);
  });
}

function showDemoPayment(container, data) {
  let selectedMethod = null;
  let isSuccess = false;

  function render() {
    if (isSuccess) {
      container.innerHTML = `
        <div class="demo-overlay open">
          <div class="demo-modal">
            <div class="demo-badge">⚠️ Demo Payment Experience</div>
            <div class="demo-success">
              <div class="demo-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3>Demo Payment Confirmed</h3>
              <p style="color: var(--color-text-muted); margin-bottom: var(--space-6);">
                This was a demonstration payment. No real transaction was processed.
              </p>
              <button class="btn btn-primary" id="demo-done">Done</button>
            </div>
          </div>
        </div>
      `;
      document.getElementById('demo-done')?.addEventListener('click', () => closeDemoPayment(container));
      return;
    }

    container.innerHTML = `
      <div class="demo-overlay open" id="demo-overlay">
        <div class="demo-modal">
          <div class="demo-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Demo Payment Experience — No Real Transaction
          </div>
          <div class="demo-content">
            <h3>Payment Summary</h3>
            <div class="demo-summary">
              <div class="demo-summary-row">
                <span style="color: var(--color-text-muted); font-size: var(--text-small);">Warehouse Requirement</span>
                <span style="font-weight: 600; font-size: var(--text-small);">${formatArea(data.area)}</span>
              </div>
              <div class="demo-summary-row">
                <span style="color: var(--color-text-muted); font-size: var(--text-small);">Estimated Amount</span>
                <span style="font-weight: 700; color: var(--color-accent);">${formatINR(data.total)}</span>
              </div>
            </div>

            <label class="form-label" style="margin-bottom: var(--space-3);">Demo Payment Method</label>
            <div class="demo-methods" id="demo-methods">
              <div class="demo-method ${selectedMethod === 'upi' ? 'selected' : ''}" data-method="upi">
                <div class="demo-method-radio"></div>
                <span>UPI Payment</span>
              </div>
              <div class="demo-method ${selectedMethod === 'bank' ? 'selected' : ''}" data-method="bank">
                <div class="demo-method-radio"></div>
                <span>Bank Transfer</span>
              </div>
              <div class="demo-method ${selectedMethod === 'card' ? 'selected' : ''}" data-method="card">
                <div class="demo-method-radio"></div>
                <span>Credit / Debit Card</span>
              </div>
            </div>

            <div class="demo-actions">
              <button class="btn btn-primary btn-full" id="demo-confirm" ${!selectedMethod ? 'disabled' : ''}>Confirm Demo Payment</button>
              <button class="btn btn-outline btn-full" id="demo-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.classList.add('no-scroll');

    // Method selection
    document.querySelectorAll('.demo-method').forEach(m => {
      m.addEventListener('click', () => {
        selectedMethod = m.dataset.method;
        render();
      });
    });

    document.getElementById('demo-confirm')?.addEventListener('click', () => {
      if (selectedMethod) {
        isSuccess = true;
        render();
      }
    });

    document.getElementById('demo-cancel')?.addEventListener('click', () => closeDemoPayment(container));
    document.getElementById('demo-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'demo-overlay') closeDemoPayment(container);
    });
  }

  render();
}

function closeDemoPayment(container) {
  container.innerHTML = '';
  document.body.classList.remove('no-scroll');
}
