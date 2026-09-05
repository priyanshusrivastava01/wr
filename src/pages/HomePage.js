/* ============================================
   HOME PAGE — MAIN DECISION-MAKING ENTRY POINT
   ============================================
   Route: /
   Visual Sections:
   1. Hero Section (#home-top)
   2. Company Introduction
   3. Main Service Selection (#choose-service)
   4. Strategic Location & Connectivity (#connectivity)
   5. Get In Touch / Contact Section (#contact)
   ============================================ */

import { CONFIG } from '../config.js';
import { setActiveNav, isNavigating, getRoutePath } from '../utils/router.js';
import { validateStep, attachPhoneMask } from '../utils/validation.js';
import { submitInquiryApi } from '../utils/api.js';

let homeObserver = null;

export function renderHomePage(container) {
  document.title = 'Vardha Warehousing — Commercial Warehouse Solutions in Gorakhpur';
  const { property, contact, whatsapp } = CONFIG;

  container.innerHTML = `
    <div class="home-page-wrapper">
      <!-- ── 1. HERO SECTION ── -->
      <section class="home-hero" id="home-top">
        <div class="home-hero-bg">
          <img 
            src="/images/hero-warehouse-bg.webp" 
            alt="Vardha Warehousing — Commercial warehouse solutions in Gorakhpur" 
            loading="eager" 
          />
        </div>
        <div class="home-hero-overlay"></div>

        <div class="container home-hero-container">
          <div class="home-hero-content">
            <div class="hero-location-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Main Gorakhnath Temple Road, Bargadwa, Gorakhpur</span>
            </div>

            <h1 class="home-hero-title">
              Warehouse Solutions<br />
              <span class="hero-highlight">for Your Business</span>
            </h1>

            <p class="home-hero-subtitle">
              Ready-to-use commercial warehouse space or a custom warehouse planned and built for your business requirements.
            </p>

            <div class="home-hero-actions">
              <a href="#choose-service" class="btn btn-hero-primary" id="hero-choose-cta">
                <span>Choose What You Need</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 2. BRIEF COMPANY INTRODUCTION ── -->
      <section class="home-intro-section">
        <div class="container">
          <div class="home-intro-card">
            <div class="home-intro-badge">WAREHOUSING EXPERTISE SINCE 1987</div>
            <h2 class="home-intro-title">Commercial Warehouse Partner in Eastern UP</h2>
            <p class="home-intro-text">
              For over 35 years, Vardha Warehousing has supported regional and national businesses with dedicated storage, commercial logistics infrastructure, and heavy vehicle transport access in Gorakhpur.
            </p>
          </div>
        </div>
      </section>

      <!-- ── 3. MAIN SERVICE SELECTION SECTION ── -->
      <section class="home-choice-section" id="choose-service">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">WHAT DO YOU NEED?</span>
            <h2 class="section-title">Choose What You Need</h2>
            <p class="section-subtitle centered">
              Whether you need ready warehouse space for your business or want a new warehouse built, choose the option that matches your requirement.
            </p>
          </div>

          <div class="home-doors-grid">
            <!-- DOOR 1: WAREHOUSE RENTING -->
            <div class="service-door-card service-door-rent" id="door-rent">
              <div class="service-door-image-wrap">
                <img 
                  src="/images/service-find-space.jpg" 
                  alt="Ready commercial warehouse space in Gorakhpur with loading docks" 
                  loading="lazy" 
                />
                <div class="service-door-badge badge-rent">OPTION 1</div>
              </div>

              <div class="service-door-content">
                <span class="service-door-tag">Need Warehouse Space?</span>
                <h3 class="service-door-title">Rent a Warehouse</h3>
                <p class="service-door-desc">
                  Choose ready-to-use commercial warehouse space in Gorakhpur for storage, operations, dispatch and business requirements.
                </p>

                <ul class="service-door-checklist">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Ready warehouse space</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>1,000 sq. ft. to 42,000 sq. ft. options</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>24×7 operations</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Loading and unloading support</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Strong connectivity</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Suitable for business storage and logistics</span>
                  </li>
                </ul>

                <div class="service-door-action">
                  <a href="/warehouse-renting" class="btn btn-primary btn-full door-cta-rent">
                    <span>Explore Warehouse Space</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                  <span class="service-door-subtext">Find the right space for your business.</span>
                </div>
              </div>
            </div>

            <!-- DOOR 2: WAREHOUSE BUILDING -->
            <div class="service-door-card service-door-build" id="door-build">
              <div class="service-door-image-wrap">
                <img 
                  src="/images/service-build-warehouse.jpg" 
                  alt="Warehouse construction and custom PEB development in India" 
                  loading="lazy" 
                />
                <div class="service-door-badge badge-build">OPTION 2</div>
              </div>

              <div class="service-door-content">
                <span class="service-door-tag tag-build">Need a Warehouse Built?</span>
                <h3 class="service-door-title">Build a Custom Warehouse</h3>
                <p class="service-door-desc">
                  Get a warehouse planned and built according to your land, location, business operations and space requirements.
                </p>

                <ul class="service-door-checklist checklist-build">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Land and layout planning</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Warehouse design guidance</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Custom size planning</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Civil construction</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Commercial warehouse infrastructure</span>
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7"/></svg>
                    <span>Project handover support</span>
                  </li>
                </ul>

                <div class="service-door-action">
                  <a href="/build-a-warehouse" class="btn btn-secondary-dark btn-full door-cta-build">
                    <span>Plan Your Warehouse</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                  <span class="service-door-subtext">Build a warehouse designed for your business needs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 4. TRUST & FACILITY SUMMARY ── -->
      <section class="home-trust-strip">
        <div class="container">
          <div class="home-trust-grid">
            <div class="home-trust-item">
              <div class="home-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <div class="home-trust-info">
                <h4>42,000 Sq. Ft. Facility</h4>
                <p>Scalable storage with 14 ft and 22 ft ceiling heights</p>
              </div>
            </div>

            <div class="home-trust-item">
              <div class="home-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <div class="home-trust-info">
                <h4>36m (118 ft) Wide Road</h4>
                <p>Main Gorakhnath Temple Road, Bargadwa, Gorakhpur</p>
              </div>
            </div>

            <div class="home-trust-item">
              <div class="home-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div class="home-trust-info">
                <h4>24×7 Operations</h4>
                <p>Unrestricted night and day loading & dispatch</p>
              </div>
            </div>

            <div class="home-trust-item">
              <div class="home-trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div class="home-trust-info">
                <h4>Established 1987</h4>
                <p>Trusted industrial partnership in Eastern Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 5. STRATEGIC LOCATION & CONNECTIVITY SECTION ── -->
      <section class="connectivity-wrapper section" id="connectivity" style="padding-top: var(--space-16); scroll-margin-top: calc(var(--header-height, 72px) + 16px);">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">STRATEGIC LOCATION & CONNECTIVITY</span>
            <h2 class="section-title">Connected From Gorakhpur to Key Business Routes</h2>
            <p class="section-subtitle centered">
              Our Gorakhpur warehouse provides convenient connectivity toward major business and logistics destinations across Uttar Pradesh, Delhi NCR, Bihar and Nepal.
            </p>
          </div>

          <!-- Visual Hub-and-Route Network Diagram -->
          <div class="connectivity-diagram-container">
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
                  <p class="hub-address">${property.location}</p>
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
          <div class="connectivity-benefits-panel" style="margin-top: var(--space-8);">
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
          <div class="transit-section-block" style="margin-top: var(--space-8);">
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
      </section>

      <!-- ── 6. GET IN TOUCH / CONTACT SECTION ── -->
      <section class="inquiry-section section" id="contact" style="padding: var(--space-16) 0; scroll-margin-top: calc(var(--header-height, 72px) + 16px);">
        <div class="container">
          <div class="inquiry-grid">
            <!-- Left: Direct Contact Info -->
            <div class="inquiry-content">
              <span class="section-label" style="color: var(--color-accent);">GET IN TOUCH</span>
              <h2 class="section-title">Ready to Store with Us? Let's Talk</h2>
              <p class="inquiry-lead">
                Whether you need ready-to-move warehouse space or want to discuss a custom built warehouse project, our team in Gorakhpur is here to help.
              </p>

              <!-- Dual Option Selector -->
              <div class="inquiry-options-box">
                <a href="/warehouse-renting" class="inquiry-option-card active clickable" style="text-decoration: none; color: inherit;">
                  <div class="option-card-header">
                    <span class="option-pill">OPTION 1</span>
                    <strong>Ready Warehouse Space</strong>
                  </div>
                  <p>1,000 to 42,000 sq. ft. ready space with 24×7 operations and loading support.</p>
                </a>
                <a href="/build-a-warehouse" class="inquiry-option-card clickable" style="text-decoration: none; color: inherit;">
                  <div class="option-card-header">
                    <span class="option-pill alt">OPTION 2</span>
                    <strong>Custom Warehouse Construction</strong>
                  </div>
                  <p>Need a warehouse on your land or ours? Explore our Build-to-Suit service →</p>
                </a>
              </div>

              <div class="inquiry-direct-info">
                <div class="direct-info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>${contact.address}</span>
                </div>
                ${contact.phone ? `
                  <div class="direct-info-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>${contact.phone}</span>
                  </div>
                ` : ''}
                <div class="direct-info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>24×7 Operations & Continuous Transport Support</span>
                </div>
              </div>
            </div>

            <!-- Right: Clear Space Inquiry Form -->
            <div class="inquiry-form-card" id="home-inquiry-form-container">
              <div class="inquiry-form-heading">
                <h3>Send Warehouse Space Inquiry</h3>
                <p>Fill in your basic details and required area.</p>
              </div>

              <form id="home-inquiry-form" novalidate>
                <div class="form-group">
                  <label class="form-label" for="home-inq-name">Full Name *</label>
                  <input type="text" class="form-input" id="home-inq-name" placeholder="Rahul Sharma" required />
                  <div class="field-error" id="err-home-inq-name" style="color: #EF4444; font-size: 0.8rem; margin-top: 4px;"></div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="home-inq-company">Business / Company Name</label>
                  <input type="text" class="form-input" id="home-inq-company" placeholder="Sharma Logistics Pvt. Ltd." />
                </div>
                <div class="inquiry-form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="home-inq-phone">Phone Number *</label>
                    <input type="tel" class="form-input" id="home-inq-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" required />
                    <div class="field-error" id="err-home-inq-phone" style="color: #EF4444; font-size: 0.8rem; margin-top: 4px;"></div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="home-inq-email">Email Address</label>
                    <input type="email" class="form-input" id="home-inq-email" placeholder="rahul.sharma@example.com" />
                    <div class="field-error" id="err-home-inq-email" style="color: #EF4444; font-size: 0.8rem; margin-top: 4px;"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="home-inq-space">Required Warehouse Space</label>
                  <input type="text" class="form-input" id="home-inq-space" placeholder="e.g. 5,000 sq. ft." />
                </div>
                <div class="form-group">
                  <label class="form-label" for="home-inq-message">Storage Requirement / Timeline</label>
                  <textarea class="form-input" id="home-inq-message" rows="3" placeholder="e.g. I need space for storing FMCG goods on standard pallet racks."></textarea>
                </div>
                
                <div id="home-inq-global-error" style="display: none; color: #EF4444; font-size: 0.85rem; margin-bottom: var(--space-3); background: rgba(239, 68, 68, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.25);"></div>

                <div class="inquiry-form-actions">
                  <button type="submit" class="btn btn-primary btn-lg" id="home-inq-submit-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
                    <span>Send Space Inquiry</span>
                  </button>
                  <a href="https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsapp.defaultMessage)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="home-inq-whatsapp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Attach Phone Mask to contact form
  const phoneInput = container.querySelector('#home-inq-phone');
  if (phoneInput) attachPhoneMask(phoneInput);

  // Attach Form Submit Handler
  const form = container.querySelector('#home-inquiry-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const globalErrorEl = container.querySelector('#home-inq-global-error');
      const errName = container.querySelector('#err-home-inq-name');
      const errPhone = container.querySelector('#err-home-inq-phone');
      const errEmail = container.querySelector('#err-home-inq-email');

      if (globalErrorEl) globalErrorEl.style.display = 'none';
      if (errName) errName.textContent = '';
      if (errPhone) errPhone.textContent = '';
      if (errEmail) errEmail.textContent = '';

      const name = (container.querySelector('#home-inq-name')?.value || '').trim();
      const phone = (container.querySelector('#home-inq-phone')?.value || '').trim();
      const email = (container.querySelector('#home-inq-email')?.value || '').trim();
      const company = (container.querySelector('#home-inq-company')?.value || '').trim();
      const space = (container.querySelector('#home-inq-space')?.value || '').trim();
      const message = (container.querySelector('#home-inq-message')?.value || '').trim();

      const validation = validateStep('inquiry', { name, phone, email });
      if (!validation.isValid) {
        if (validation.errors.name && errName) errName.textContent = validation.errors.name;
        if (validation.errors.phone && errPhone) errPhone.textContent = validation.errors.phone;
        if (validation.errors.email && errEmail) errEmail.textContent = validation.errors.email;
        return;
      }

      const submitBtn = container.querySelector('#home-inq-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
          <span>Submitting your inquiry...</span>
        `;
      }

      try {
        const payload = {
          fullName: name,
          phone: phone.replace(/\D/g, '').slice(0, 10),
          email,
          companyName: company,
          requiredWarehouseSpace: space,
          storageRequirement: message,
          timeline: '',
          message: message || (space ? `Required space: ${space}` : 'Ready Warehouse Space Inquiry'),
          sourcePage: 'HOME_CONTACT',
        };

        const response = await submitInquiryApi(payload);

        if (response && response.success) {
          const formCard = container.querySelector('#home-inquiry-form-container');
          if (formCard) {
            formCard.innerHTML = `
              <div class="inquiry-form-success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #22C55E; margin: 0 auto var(--space-3);"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                <h3 style="color: #FFFFFF; font-size: var(--text-h3); margin-bottom: var(--space-2);">Thank You! Inquiry Received</h3>
                <p style="color: rgba(255,255,255,0.7); line-height: 1.5;">Your requirement has been recorded. Our team will review your requirement and connect with you shortly.</p>
              </div>
            `;
          }
        } else {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
              <span>Send Space Inquiry</span>
            `;
          }
          if (globalErrorEl) {
            globalErrorEl.textContent = response?.message || 'Something went wrong. Please check your details and try again.';
            globalErrorEl.style.display = 'block';
          }
        }
      } catch (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
            <span>Send Space Inquiry</span>
          `;
        }
        if (globalErrorEl) {
          globalErrorEl.textContent = 'Unable to reach backend server. Please check your connection.';
          globalErrorEl.style.display = 'block';
        }
      }
    });
  }

  // Setup Home Scroll-Observer for mutually exclusive active navigation state
  initHomeScrollObserver(container);
}

function initHomeScrollObserver(container) {
  if (homeObserver) {
    homeObserver.disconnect();
    homeObserver = null;
  }

  const heroSec = container.querySelector('#home-top');
  const connSec = container.querySelector('#connectivity');
  const contactSec = container.querySelector('#contact');

  if (!heroSec || !connSec || !contactSec) return;

  const handleScrollSync = () => {
    if (isNavigating()) return;
    if (getRoutePath() !== '/') return; // Strictly only run on Home route

    const headerHeight = 80;
    const contactRect = contactSec.getBoundingClientRect();
    const connRect = connSec.getBoundingClientRect();

    // Check bottom-most section first
    if (contactRect.top <= headerHeight + 150) {
      setActiveNav('contact');
    } else if (connRect.top <= headerHeight + 150) {
      setActiveNav('connectivity');
    } else {
      setActiveNav('home');
    }
  };

  window.removeEventListener('scroll', handleScrollSync);
  window.addEventListener('scroll', handleScrollSync, { passive: true });

  // Initial check
  setTimeout(handleScrollSync, 100);
}
