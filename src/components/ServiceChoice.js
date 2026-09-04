/* ============================================
   SERVICE CHOICE COMPONENT
   ============================================
   "Choose the Right Warehouse Solution"
   Two large visual cards for the two core services.
   ============================================ */

import { scrollToSection } from '../utils/scroll.js';

export function renderServiceChoice(container) {
  container.innerHTML = `
    <div class="service-choice-section section" id="services">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">What Do You Need?</span>
          <h2>Choose the Right Warehouse Solution</h2>
          <p class="section-subtitle centered">
            Whether you need ready warehouse space or want to develop a new facility, choose the option that fits your business.
          </p>
        </div>

        <div class="service-cards-grid">
          <!-- CARD 1: Find Warehouse Space -->
          <div class="service-card service-card--find reveal-left" id="service-card-find">
            <div class="service-card__image">
              <img 
                src="/images/service-find-space.jpg" 
                alt="Ready commercial warehouse facility with loading bays and truck access in Gorakhpur" 
                loading="lazy" 
              />
              <div class="service-card__image-overlay"></div>
              <span class="service-card__badge">Ready Space</span>
            </div>
            <div class="service-card__body">
              <h3 class="service-card__title">Find Warehouse Space</h3>
              <p class="service-card__desc">
                Ready-to-use warehouse space for storage, operations and business growth.
              </p>
              <ul class="service-card__highlights">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Ready Warehouse Space
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Flexible Space Options
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  24×7 Operations
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Loading Support
                </li>
              </ul>
              <button class="btn service-card__cta service-card__cta--find" id="service-cta-find">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                Find Warehouse Space
              </button>
              <p class="service-card__support-text">For businesses looking for ready warehouse space.</p>
            </div>
          </div>

          <!-- CARD 2: Build a Warehouse -->
          <div class="service-card service-card--build reveal-right" id="service-card-build">
            <div class="service-card__image">
              <img 
                src="/images/service-build-warehouse.jpg" 
                alt="Warehouse construction site with steel structure being erected in India" 
                loading="lazy" 
              />
              <div class="service-card__image-overlay"></div>
              <span class="service-card__badge service-card__badge--build">Custom Build</span>
            </div>
            <div class="service-card__body">
              <h3 class="service-card__title">Build a Warehouse</h3>
              <p class="service-card__desc">
                Plan and develop a warehouse built around your business and land requirements.
              </p>
              <ul class="service-card__highlights service-card__highlights--build">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Land & Site Assessment
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Custom Warehouse Planning
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Construction & Development
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                  Project Handover
                </li>
              </ul>
              <button class="btn service-card__cta service-card__cta--build" id="service-cta-build">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/>
                </svg>
                Build My Warehouse
              </button>
              <p class="service-card__support-text">For businesses that need a new or custom warehouse facility.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // CTA handlers
  document.getElementById('service-cta-find')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });

  document.getElementById('service-cta-build')?.addEventListener('click', () => {
    scrollToSection('#warehouse-setup');
  });

  // Entire card click (optional)
  document.getElementById('service-card-find')?.addEventListener('click', (e) => {
    if (e.target.closest('.service-card__cta')) return; // Don't double-fire
    scrollToSection('#calculator');
  });

  document.getElementById('service-card-build')?.addEventListener('click', (e) => {
    if (e.target.closest('.service-card__cta')) return;
    scrollToSection('#warehouse-setup');
  });
}
