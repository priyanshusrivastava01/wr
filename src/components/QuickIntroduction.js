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
            <span class="section-label">Commercial Warehouse • Gorakhpur</span>
            <h2>Designed to Accelerate Your Business Growth, Not Just Store Goods</h2>
            <p class="intro-text">
              Located on Main Gorakhnath Temple Road, Bargadwa, Vardha Warehousing provides 
              flexible, high-capacity commercial warehouse space from <strong>1,000 sq. ft. to 42,000 sq. ft.</strong> 
              Built for modern trade, e-commerce, and logistics, our facility supports non-stop operations 
              so your business movement never halts.
            </p>
            <div class="intro-process">
              <div class="intro-step">
                <span class="intro-step-num">1</span>
                <span class="intro-step-text">Choose Space (1,000–42,000 sq. ft.)</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">2</span>
                <span class="intro-step-text">See Estimated Pricing</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">3</span>
                <span class="intro-step-text">Send Booking Request</span>
              </div>
            </div>
            <button class="btn btn-primary" id="intro-calculate-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
              Calculate Your Space Requirement
            </button>
          </div>
          <div class="intro-image reveal-right">
            <img src="/images/warehouse-indian-dock.jpg" alt="Vardha Warehousing — Active commercial truck loading bays in Gorakhpur" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('intro-calculate-btn')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });
}
