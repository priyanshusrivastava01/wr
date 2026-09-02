/* ============================================
   PROPERTY INFORMATION COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderPropertyInformation(container) {
  const { property } = CONFIG;

  container.innerHTML = `
    <div class="property-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">The Property</span>
          <h2>A Commercial Warehouse Built for Easy Access</h2>
          <p class="section-subtitle centered">Strategically located with wide road access and round-the-clock transport connectivity.</p>
        </div>
        <div class="property-grid">
          <div class="property-cards stagger-children">
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Location</h4>
              <p>${property.location}</p>
            </div>
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
              </div>
              <h4>Wide Road Access</h4>
              <p>${property.roadWidth} wide road in front of the property.</p>
            </div>
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4>Truck Connectivity</h4>
              <p>${property.transport}</p>
            </div>
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <h4>Commercial Property</h4>
              <p>${property.type} — suitable for business and commercial warehousing use.</p>
            </div>
          </div>
          <div class="property-image reveal-right">
            <img src="/images/warehouse-loading.jpg" alt="Commercial warehouse with truck loading access" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `;
}
