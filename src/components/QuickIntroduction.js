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
            <span class="section-label">Gorakhpur, Uttar Pradesh • Commercial Hub</span>
            <h2>Space That Fits Your Business Growth, Not Just Storage</h2>
            
            <!-- Prominent Space Range Highlight -->
            <div class="intro-space-highlight">
              <div class="intro-space-badge">AVAILABLE WAREHOUSE SPACE</div>
              <div class="intro-space-number">1,000 sq. ft. – 42,000 sq. ft.</div>
              <p class="intro-space-sub">Whether you need space for a growing business or a large commercial operation, choose the space that fits your requirement.</p>
            </div>

            <!-- 3-Step Visual Mini-Flow -->
            <div class="intro-process-flow">
              <div class="intro-process-step">
                <div class="intro-step-badge">STEP 1</div>
                <strong>Choose Your Space</strong>
                <span>1,000 to 42,000 sq. ft.</span>
              </div>
              <div class="intro-flow-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div class="intro-process-step">
                <div class="intro-step-badge">STEP 2</div>
                <strong>Tell Us Requirement</strong>
                <span>Storage & handling needs</span>
              </div>
              <div class="intro-flow-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div class="intro-process-step">
                <div class="intro-step-badge">STEP 3</div>
                <strong>Get an Estimate</strong>
                <span>Discuss & finalize space</span>
              </div>
            </div>

            <div class="intro-cta-row">
              <button class="btn btn-primary" id="intro-calculate-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                Calculate Space Requirement
              </button>
              <button class="btn btn-outline" id="intro-build-btn" style="border-color: var(--color-border); color: var(--color-primary);">
                Planning to Build a Warehouse?
              </button>
            </div>
          </div>
          <div class="intro-image reveal-right">
            <img src="/images/warehouse-indian-dock.jpg" alt="Vardha Warehousing — Commercial truck loading bays in Gorakhpur" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('intro-calculate-btn')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });

  document.getElementById('intro-build-btn')?.addEventListener('click', () => {
    scrollToSection('#warehouse-setup');
  });
}
