/* ============================================
   SUCCESS SCREEN COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { formatINR, formatArea } from '../utils/formatting.js';
import { scrollToSection } from '../utils/scroll.js';

export function renderSuccessScreen(container) {
  window.addEventListener('show-success', (e) => {
    const data = e.detail;
    showSuccess(container, data);
  });
}

function showSuccess(container, data) {
  container.innerHTML = `
    <div class="success-overlay open" id="success-overlay">
      <div class="success-modal">
        <div class="success-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path class="success-checkmark" d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h2>Your Warehouse Request Has Been Received</h2>
        <p>Thank you for sharing your requirement. Our team will review your request and contact you.</p>
        
        <div class="success-summary">
          <div class="success-summary-row">
            <span class="success-summary-label">Request Reference</span>
            <span class="success-summary-value">${data.referenceNumber}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Required Space</span>
            <span class="success-summary-value">${formatArea(data.area)}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Estimated Price</span>
            <span class="success-summary-value highlight">${formatINR(data.total)}</span>
          </div>
        </div>

        <div class="success-actions">
          <button class="btn btn-dark" id="success-explore">Explore Warehouse</button>
          <button class="btn btn-whatsapp" id="success-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact on WhatsApp
          </button>
        </div>

        <div class="success-demo-link">
          <button id="success-demo-payment">Proceed to Payment (Demo) →</button>
        </div>
      </div>
    </div>
  `;

  document.body.classList.add('no-scroll');

  document.getElementById('success-explore')?.addEventListener('click', () => {
    closeSuccess(container);
    scrollToSection('#warehouse');
  });

  document.getElementById('success-whatsapp')?.addEventListener('click', () => {
    const { contact, whatsapp } = CONFIG;
    if (!contact.whatsapp) {
      alert('WhatsApp number has not been configured yet.');
      return;
    }
    const msg = whatsapp.contextMessage(data.area);
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  });

  document.getElementById('success-demo-payment')?.addEventListener('click', () => {
    closeSuccess(container);
    window.dispatchEvent(new CustomEvent('open-demo-payment', { detail: data }));
  });

  document.getElementById('success-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'success-overlay') closeSuccess(container);
  });
}

function closeSuccess(container) {
  container.innerHTML = '';
  document.body.classList.remove('no-scroll');
}
