/* ============================================
   WAREHOUSE FACILITIES & 24×7 OPERATIONS COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

const FACILITY_ICONS = {
  clock: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'shopping-cart': '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  package: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
  scan: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" x2="17" y1="12" y2="12"/></svg>',
  truck: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  building: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
};

export function renderWarehouseFacilities(container) {
  const { facilities } = CONFIG;

  container.innerHTML = `
    <div class="facilities-section section" id="facilities">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Operational Capabilities</span>
          <h2>A Modern Commercial Warehouse Ecosystem</h2>
          <p class="section-subtitle centered">Equipped for e-commerce, systematic order fulfillment, packaging, barcode scanning, and 24×7 non-stop truck operations.</p>
        </div>

        <!-- 6 Capability Cards -->
        <div class="facilities-grid stagger-children">
          ${facilities.map(f => `
            <div class="facility-card reveal">
              <div class="facility-badge">${f.badge}</div>
              <div class="facility-icon">
                ${FACILITY_ICONS[f.icon] || ''}
              </div>
              <h3>${f.title}</h3>
              <p>${f.description}</p>
            </div>
          `).join('')}
        </div>

        <!-- 24x7 Operations & Modern Fulfillment Spotlight -->
        <div class="facility-spotlights-grid" style="margin-top: var(--space-12);">
          <div class="facility-spotlight-card reveal-left">
            <div class="spotlight-image">
              <img src="/images/warehouse-night-loading.jpg" alt="24x7 Night truck loading and unloading operations in Gorakhpur" loading="lazy" />
              <div class="spotlight-badge">24×7 Round-The-Clock</div>
            </div>
            <div class="spotlight-content">
              <h3>Day & Night Fleet Loading Support</h3>
              <p>Your business does not stop when the sun sets. We support seamless commercial truck loading, unloading, and cross-docking 24 hours a day, 7 days a week.</p>
            </div>
          </div>

          <div class="facility-spotlight-card reveal-right">
            <div class="spotlight-image">
              <img src="/images/warehouse-fulfillment-scan.jpg" alt="E-commerce order packaging and barcode inventory scanning" loading="lazy" />
              <div class="spotlight-badge">E-Commerce & Retail</div>
            </div>
            <div class="spotlight-content">
              <h3>Order Processing, Packing & Barcoding</h3>
              <p>Equipped for fast inventory receiving, organized palletized storage, barcode tracking, and professional carton packaging for regional fulfillment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
