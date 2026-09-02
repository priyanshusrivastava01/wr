/* ============================================
   CLIENTELE SECTION COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderClienteleSection(container) {
  const { clients } = CONFIG;

  container.innerHTML = `
    <div class="clientele-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Clients</span>
          <h2>Trusted By Businesses Across Industries</h2>
          <p class="section-subtitle centered">We are proud to work with organisations that trust us with their warehousing needs.</p>
        </div>
        <div class="clientele-grid stagger-children">
          ${clients.map(client => `
            <div class="client-card reveal">
              <div class="client-icon">${client.name.charAt(0)}</div>
              <div class="client-name">${client.name}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
