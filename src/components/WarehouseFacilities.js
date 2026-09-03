/* ============================================
   WAREHOUSE FACILITIES & 24×7 OPERATIONS COMPONENT
   ============================================
   Redesigned as a visual operational journey
   + Day/Night comparison for 24×7 understanding.
   ============================================ */

import { CONFIG } from '../config.js';

const JOURNEY_STEPS = [
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    title: 'Truck Arrives',
    desc: 'Goods reach the warehouse for storage or further processing.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3-4 4-4-4"/><path d="M12 7v14"/><path d="M4 11h16"/></svg>',
    title: 'Loading & Unloading',
    desc: 'Goods can be moved in and out through warehouse operations.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="m17 2-5 5-5-5"/></svg>',
    title: 'Storage',
    desc: 'Space can be organized according to your business requirement.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/></svg>',
    title: 'Order Processing',
    desc: 'Orders can be prepared for smoother business operations.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    title: 'Packaging',
    desc: 'Products can be prepared and packed for movement.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" x2="17" y1="12" y2="12"/></svg>',
    title: 'Barcode Scanning',
    desc: 'Products can be identified and managed more systematically.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
    title: 'Dispatch',
    desc: 'Goods can move forward according to your business requirement.',
  },
];

export function renderWarehouseFacilities(container) {
  container.innerHTML = `
    <div class="facilities-section section" id="facilities">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">How It Can Work</span>
          <h2>How Your Warehouse Operations Can Work</h2>
          <p class="section-subtitle centered">
            From the moment goods arrive to the moment they move forward — here's a simple look at the operational journey.
          </p>
        </div>

        <!-- Visual Operations Journey -->
        <div class="ops-journey reveal">
          <div class="ops-journey-track">
            ${JOURNEY_STEPS.map((step, i) => `
              <div class="ops-step">
                <div class="ops-step-icon">${step.icon}</div>
                <div class="ops-step-num">${i + 1}</div>
                <h4 class="ops-step-title">${step.title}</h4>
                <p class="ops-step-desc">${step.desc}</p>
                ${i < JOURNEY_STEPS.length - 1 ? '<div class="ops-step-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></div>' : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Day & Night 24×7 Comparison -->
        <div class="daynight-section" style="margin-top: var(--space-12);">
          <div class="section-header reveal">
            <span class="section-label">Round-The-Clock</span>
            <h2>The Warehouse Keeps Moving — Day & Night</h2>
          </div>

          <div class="daynight-grid">
            <div class="daynight-card daynight-day reveal-left">
              <div class="daynight-image">
                <img src="/images/warehouse-indian-dock.jpg" alt="Daytime warehouse loading operations in Gorakhpur" loading="lazy" />
                <div class="daynight-badge daynight-badge-day">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  Day Operations
                </div>
              </div>
              <div class="daynight-content">
                <h3>Daytime Activity</h3>
                <ul class="daynight-list">
                  <li>Truck loading & unloading</li>
                  <li>Order processing & packaging</li>
                  <li>Warehouse management</li>
                  <li>Business coordination</li>
                </ul>
              </div>
            </div>

            <div class="daynight-card daynight-night reveal-right">
              <div class="daynight-image">
                <img src="/images/warehouse-night-loading.jpg" alt="Nighttime 24x7 warehouse operations under floodlights in Gorakhpur" loading="lazy" />
                <div class="daynight-badge daynight-badge-night">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  Night Operations
                </div>
              </div>
              <div class="daynight-content">
                <h3>Nighttime Activity</h3>
                <ul class="daynight-list">
                  <li>Continued loading & unloading</li>
                  <li>Night dispatch support</li>
                  <li>Operational readiness</li>
                  <li>Business movement continues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
