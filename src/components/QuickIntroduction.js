/* ============================================
   QUICK INTRODUCTION COMPONENT
   ============================================ */

import { scrollToSection } from '../utils/scroll.js';

export function renderQuickIntroduction(container) {
  container.innerHTML = `
    <div class="introduction section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content reveal-left">
            <span class="section-label">About the Space</span>
            <h2>Warehouse Space Designed Around Your Business Requirements</h2>
            <p class="intro-text">
              Whether you need a compact storage area or a large-scale warehousing solution, 
              you can explore available space, see estimated pricing, and send your requirement 
              — all in a few simple steps. No complicated forms, no waiting for callbacks just 
              to understand your options.
            </p>
            <div class="intro-process">
              <div class="intro-step">
                <span class="intro-step-num">1</span>
                <span class="intro-step-text">Choose Space</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">2</span>
                <span class="intro-step-text">See Estimated Price</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">3</span>
                <span class="intro-step-text">Send Request</span>
              </div>
            </div>
            <button class="btn btn-primary" id="intro-calculate-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
              Calculate Your Requirement
            </button>
          </div>
          <div class="intro-image reveal-right">
            <img src="/images/warehouse-exterior.jpg" alt="Vardha Warehousing — Commercial warehouse exterior with wide road access" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('intro-calculate-btn')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });
}
