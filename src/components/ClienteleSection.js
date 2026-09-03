/* ============================================
   CLIENTELE SECTION COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderClienteleSection(container) {
  const { clients } = CONFIG;

  container.innerHTML = `
    <div class="clientele-section section" id="clients">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Clientele</span>
          <h2>Trusted By Businesses Across Industries</h2>
          <p class="section-subtitle centered">
            From educational institutions to major industrial units and leading commercial brands, 
            organisations count on Vardha Warehousing for dependable space and 24×7 operations.
          </p>
        </div>

        <div class="clientele-grid stagger-children">
          ${clients.map(client => `
            <div class="client-card reveal">
              <div class="client-card-top">
                <span class="client-sector-tag">${client.tag}</span>
                <span class="client-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Client
                </span>
              </div>

              <div class="client-logo-wrapper">
                ${client.logo ? `
                  <img 
                    src="${client.logo}" 
                    alt="${client.alt || client.name}" 
                    class="client-logo-img" 
                    loading="lazy"
                  />
                ` : `
                  <div class="client-icon-fallback">${client.name.charAt(0)}</div>
                `}
              </div>

              <div class="client-info">
                <h3 class="client-name">${client.name}</h3>
                <div class="client-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>${client.subtitle}</span>
                </div>
                <p class="client-desc">${client.description}</p>
              </div>

              <div class="client-card-footer">
                <span class="client-feature-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Warehousing Partner
                </span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="clientele-bottom-bar reveal">
          <div class="clientele-stat-pill">
            <span class="stat-dot"></span>
            <span>Join <strong>leading commercial brands</strong> growing with Vardha Warehousing</span>
          </div>
          <a href="#contact" class="btn btn-sm btn-outline-primary">Partner With Us</a>
        </div>
      </div>
    </div>
  `;
}
