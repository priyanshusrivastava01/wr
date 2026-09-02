/* ============================================
   EXPERIENCE SECTION COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderExperienceSection(container) {
  const { brand } = CONFIG;

  container.innerHTML = `
    <div class="experience-section section">
      <div class="container">
        <div class="experience-inner">
          <div class="experience-year reveal-left">${brand.foundedYear}</div>
          <div class="experience-content reveal-right">
            <span class="section-label">Our Legacy</span>
            <h2>Warehousing Expertise Since ${brand.foundedYear}</h2>
            <p>
              Built on decades of warehousing-related experience and expertise. 
              Our understanding of commercial storage requirements comes from years 
              of working with businesses across different industries.
            </p>
            <div class="experience-badge">
              <div class="experience-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span class="experience-badge-text">Established ${brand.foundedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
