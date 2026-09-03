/* ============================================
   PROPERTY & STRATEGIC CONNECTIVITY COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderPropertyInformation(container) {
  const { property } = CONFIG;

  container.innerHTML = `
    <div class="property-section section" id="property-section">
      <div class="container">
        <!-- Property Overview -->
        <div class="section-header reveal">
          <span class="section-label">Prime Commercial Real Estate</span>
          <h2>A Strategic Warehouse Hub in Gorakhpur</h2>
          <p class="section-subtitle centered">Positioned on Main Gorakhnath Temple Road, Bargadwa, with a 36-metre wide front road for seamless 24×7 commercial fleet operations.</p>
        </div>

        <div class="property-grid">
          <div class="property-cards stagger-children">
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Main Road Location</h4>
              <p>${property.location}</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M12 3v4"/><path d="M12 11v2"/><path d="M12 17v4"/></svg>
              </div>
              <h4>36-Metre Wide Access</h4>
              <p>${property.roadWidth} ensuring heavy multi-axle trucks enter and maneuver with complete ease.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4>24×7 Truck Loading</h4>
              <p>Continuous loading and unloading operations day and night to keep supply chains moving.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <h4>1,000 to 42,000 sq. ft.</h4>
              <p>Flexible commercial storage with 14 ft and 22 ft ceiling heights tailored to your business scale.</p>
            </div>
          </div>

          <div class="property-image reveal-right">
            <img src="/images/warehouse-interior-racks.jpg" alt="Organized commercial storage interior with heavy-duty pallet racks in Gorakhpur" loading="lazy" />
          </div>
        </div>

        <!-- Dedicated Connectivity Network Section -->
        <div class="connectivity-wrapper section" id="connectivity" style="padding-top: var(--space-16);">
          <div class="section-header reveal">
            <span class="section-label">Regional Connectivity</span>
            <h2>Connected Across North India & Trade Corridors</h2>
            <p class="section-subtitle centered">From Gorakhpur as your operational center, distribute rapidly across Uttar Pradesh, Delhi NCR, Bihar, and cross-border trade with Nepal.</p>
          </div>

          <!-- Transit Proximity Cards -->
          <div class="transit-hubs-grid reveal">
            <div class="transit-hub-card">
              <div class="transit-hub-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>
              </div>
              <div class="transit-hub-info">
                <h4>Gorakhpur Railway Junction</h4>
                <div class="transit-time-badge">Approx. 15 Minutes Away</div>
                <p>Direct access to Northern Railway freight lines for bulk cargo & rake transport.</p>
              </div>
            </div>

            <div class="transit-hub-card">
              <div class="transit-hub-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              <div class="transit-hub-info">
                <h4>Gorakhpur Airport</h4>
                <div class="transit-time-badge">Approx. 30 Minutes Away</div>
                <p>Rapid air courier, high-priority cargo movement, and quick executive connectivity.</p>
              </div>
            </div>
          </div>

          <!-- Corridors Graphic Grid -->
          <div class="connectivity-corridors reveal">
            <div class="connectivity-hub-center">
              <div class="hub-center-badge">
                <span class="hub-dot"></span>
                <strong>GORAKHPUR HUB</strong>
                <small>Main Gorakhnath Road</small>
              </div>
            </div>
            
            <div class="corridors-grid">
              ${property.connectivityRoutes.map(route => `
                <div class="corridor-card">
                  <div class="corridor-header">
                    <span class="corridor-indicator">⇄</span>
                    <h4>${route.destination}</h4>
                  </div>
                  <p class="corridor-tag">${route.tag}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
