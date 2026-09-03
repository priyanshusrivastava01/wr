/* ============================================
   EXPERIENCE SECTION COMPONENT
   ============================================
   Trust & expertise since 1987 with visual timeline
   ============================================ */

import { CONFIG } from '../config.js';

export function renderExperienceSection(container) {
  const { brand } = CONFIG;

  container.innerHTML = `
    <div class="experience-section section" id="expertise">
      <div class="container">
        <div class="experience-inner">
          <!-- Left: Big Year Visual -->
          <div class="experience-year-wrapper reveal-left">
            <div class="experience-year">${brand.foundedYear}</div>
            <span class="experience-year-tag">OVER 35+ YEARS OF COMMERCIAL EXPERIENCE</span>
          </div>

          <!-- Right: Narrative + 3-Point Timeline -->
          <div class="experience-content reveal-right">
            <span class="section-label" style="color: var(--color-accent);">Decades of Trust</span>
            <h2>Warehousing Expertise Since ${brand.foundedYear}</h2>
            <p class="experience-lead">
              Your warehouse is the backbone of your supply chain. We provide the infrastructure, road connectivity, and 24×7 operations needed to keep your business moving forward.
            </p>

            <!-- 3-Point Visual Timeline -->
            <div class="experience-timeline">
              <div class="timeline-item">
                <div class="timeline-marker">
                  <span class="timeline-dot"></span>
                  <span class="timeline-year">1987</span>
                </div>
                <div class="timeline-body">
                  <strong>Roots in Commercial Trading</strong>
                  <p>Decades of understanding regional business, bulk inventory, and commercial movement in Eastern UP.</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">
                  <span class="timeline-dot"></span>
                  <span class="timeline-year">Evolution</span>
                </div>
                <div class="timeline-body">
                  <strong>Infrastructure Expansion</strong>
                  <p>Development of large-span industrial spaces with wide road access and heavy vehicle docks.</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">
                  <span class="timeline-dot active"></span>
                  <span class="timeline-year">Today</span>
                </div>
                <div class="timeline-body">
                  <strong>42,000 Sq. Ft. Logistics Hub</strong>
                  <p>Prime Gorakhpur facility with 24×7 dispatch, e-commerce support, and direct multi-state connectivity.</p>
                </div>
              </div>
            </div>

            <div class="experience-badge">
              <div class="experience-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span class="experience-badge-text">Trusted by Leading Regional & National Brands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
