/* ============================================
   WAREHOUSE FACILITIES COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

const FACILITY_ICONS = {
  cctv: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  shield: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  truck: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  road: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M12 3v4"/><path d="M12 11v2"/><path d="M12 17v4"/></svg>',
  building: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  height: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3H3"/><path d="M21 21H3"/><path d="M12 6v12"/><path d="m8 9 4-3 4 3"/><path d="m8 15 4 3 4-3"/></svg>',
};

export function renderWarehouseFacilities(container) {
  const { facilities } = CONFIG;

  container.innerHTML = `
    <div class="facilities-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Warehouse Facilities</span>
          <h2>Everything You Need for Reliable Storage</h2>
          <p class="section-subtitle centered">Our warehouse is equipped with essential facilities to support your storage requirements.</p>
        </div>
        <div class="facilities-grid stagger-children">
          ${facilities.map(f => `
            <div class="facility-card reveal">
              <div class="facility-icon">
                ${FACILITY_ICONS[f.icon] || ''}
              </div>
              <h3>${f.title}</h3>
              <p>${f.description}</p>
              ${f.icon === 'height' ? `
                <div class="facility-heights">
                  <span class="facility-height-tag">14 ft</span>
                  <span class="facility-height-tag">22 ft</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
