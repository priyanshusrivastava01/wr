/* ============================================
   PROPERTY & STRATEGIC CONNECTIVITY COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderPropertyInformation(container) {
  const { property } = CONFIG;

  container.innerHTML = `
    <div class="property-section section" id="warehouse">
      <div class="container">
        <!-- Space & Property Overview -->
        <div class="section-header reveal">
          <span class="section-label">Commercial Property • Gorakhpur</span>
          <h2>Space That Fits Your Business</h2>
          <p class="section-subtitle centered">
            Whether you are an FMCG distributor, e-commerce brand, or industrial supplier, 
            choose warehouse space configured specifically for your inventory and logistics operations.
          </p>
        </div>

        <!-- Prominent Space Banner -->
        <div class="space-highlight-banner reveal">
          <div class="space-highlight-pill">
            <span class="space-badge">Available Space</span>
            <span class="space-range">1,000 sq. ft. — 42,000 sq. ft.</span>
          </div>
          <p class="space-highlight-desc">
            Configurable floor layouts with <strong>14 ft</strong> and <strong>22 ft</strong> high-clearance ceiling options.
          </p>
        </div>

        <div class="property-grid">
          <div class="property-cards stagger-children">
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <h4>1,000 to 42,000 sq. ft.</h4>
              <p>Flexible commercial warehouse capacity tailored to both growing businesses and large enterprise storage.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Main Road Gorakhpur</h4>
              <p>${property.location} — quick and effortless commercial access.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M12 3v4"/><path d="M12 11v2"/><path d="M12 17v4"/></svg>
              </div>
              <h4>36-Metre (118 ft) Wide Road</h4>
              <p>Wide front road allowing multi-axle heavy transport trucks to enter, park, and turn without delays.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4>24×7 Truck Loading</h4>
              <p>Non-stop loading and unloading day and night to keep supply chains and distribution moving.</p>
            </div>
          </div>

          <div class="property-image reveal-right">
            <img src="/images/warehouse-interior-racks.jpg" alt="Organized commercial storage interior with heavy-duty pallet racks in Gorakhpur" loading="lazy" />
          </div>
        </div>

        <!-- Dedicated Connectivity Network Section -->
        <div class="connectivity-wrapper section" id="connectivity" style="padding-top: var(--space-16);">
          <div class="section-header reveal">
            <span class="section-label">Strategic Location & Connectivity</span>
            <h2>Connected From Gorakhpur to Key Business Routes</h2>
            <p class="section-subtitle centered">
              Our Gorakhpur warehouse provides convenient connectivity toward major business and logistics destinations across Uttar Pradesh, Delhi NCR, Bihar and Nepal.
            </p>
          </div>

          <!-- Visual Hub-and-Route Network Diagram -->
          <div class="connectivity-diagram-container reveal">
            <div class="connectivity-network-header">
              <span class="network-badge">Direct Business Routes</span>
              <p>Move goods seamlessly from our central Gorakhpur base to regional commercial centers</p>
            </div>

            <div class="connectivity-hub-layout">
              <!-- Destination Column West / South-West -->
              <div class="route-nodes-col route-col-left">
                <div class="route-dest-card" data-route="lucknow">
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Lucknow</h4>
                  </div>
                  <p class="route-dest-desc">Key Uttar Pradesh Business Connection</p>
                  <div class="route-connector-line to-center-right"></div>
                </div>

                <div class="route-dest-card" data-route="prayagraj">
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Prayagraj</h4>
                  </div>
                  <p class="route-dest-desc">Important Regional Business Route</p>
                  <div class="route-connector-line to-center-right"></div>
                </div>
              </div>

              <!-- Center Hub: GORAKHPUR -->
              <div class="route-central-hub-wrapper">
                <div class="route-pulse-ring"></div>
                <div class="route-central-hub">
                  <div class="hub-location-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>WAREHOUSE LOCATION</span>
                  </div>
                  <h3 class="hub-main-city">GORAKHPUR</h3>
                  <p class="hub-address">Main Gorakhnath Temple Road, Bargadwa</p>
                  <div class="hub-base-pill">
                    <span class="hub-live-dot"></span>
                    <span>Your Central Logistics Base</span>
                  </div>
                </div>
              </div>

              <!-- Destination Column East / North / South -->
              <div class="route-nodes-col route-col-right">
                <div class="route-dest-card" data-route="delhi">
                  <div class="route-connector-line to-center-left"></div>
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Delhi NCR</h4>
                  </div>
                  <p class="route-dest-desc">National Business & Distribution Access</p>
                </div>

                <div class="route-dest-card" data-route="bihar">
                  <div class="route-connector-line to-center-left"></div>
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Bihar</h4>
                  </div>
                  <p class="route-dest-desc">Eastern Market Connectivity</p>
                </div>
              </div>
            </div>

            <!-- Bottom Row Routes: Varanasi & Nepal -->
            <div class="connectivity-bottom-routes">
              <div class="route-dest-card bottom-dest" data-route="varanasi">
                <div class="route-dest-header">
                  <span class="route-dest-pin">●</span>
                  <h4>Varanasi</h4>
                </div>
                <p class="route-dest-desc">Major Trade & Commercial Connection</p>
              </div>

              <div class="route-dest-card bottom-dest" data-route="nepal">
                <div class="route-dest-header">
                  <span class="route-dest-pin">●</span>
                  <h4>Nepal</h4>
                </div>
                <p class="route-dest-desc">Cross-Border Business Connectivity</p>
              </div>
            </div>
          </div>

          <!-- Business Benefit Panel -->
          <div class="connectivity-benefits-panel reveal">
            <div class="benefits-panel-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              <h3>Why This Location Helps Your Business</h3>
            </div>
            <div class="benefits-panel-grid">
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Easier movement of goods</strong>
                  <p>Wide approach roads ensure trucks enter, load, and depart without city bottlenecks.</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Connectivity toward major markets</strong>
                  <p>Direct highway linkage to UP commercial centers, Bihar trade borders, and Nepal.</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Convenient access for transport operations</strong>
                  <p>36-metre wide front road accommodates multi-axle commercial vehicles effortlessly.</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Better support for business distribution</strong>
                  <p>Round-the-clock 24×7 operations allow goods to move whenever your schedule demands.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Major Transport Points Sub-Header & Cards -->
          <div class="transit-section-block reveal">
            <div class="transit-block-header">
              <span class="transit-label">Fast Regional Access</span>
              <h3>Quick Access to Major Transport Points</h3>
              <p>Close proximity to Gorakhpur's primary rail freight and air transit terminals.</p>
            </div>

            <div class="transit-hubs-grid">
              <div class="transit-hub-card">
                <div class="transit-hub-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>
                </div>
                <div class="transit-hub-info">
                  <div class="transit-badge-row">
                    <span class="transit-type-tag">🚆 Railway Connectivity</span>
                    <span class="transit-time-badge">Approx. 15 Minutes Away</span>
                  </div>
                  <h4>Gorakhpur Railway Junction</h4>
                  <p>Convenient access for businesses that require railway-based movement of goods.</p>
                </div>
              </div>

              <div class="transit-hub-card">
                <div class="transit-hub-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                </div>
                <div class="transit-hub-info">
                  <div class="transit-badge-row">
                    <span class="transit-type-tag">✈️ Airport Connectivity</span>
                    <span class="transit-time-badge">Approx. 30 Minutes Away</span>
                  </div>
                  <h4>Gorakhpur Airport</h4>
                  <p>Convenient access to airport connectivity for business travel and time-sensitive requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
