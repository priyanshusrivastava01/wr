/* ============================================
   HOME PAGE — MAIN DECISION-MAKING ENTRY POINT
   ============================================
   Route: /
   Clear, uncluttered choice between Renting and Building.
   ============================================ */

import { CONFIG } from '../config.js';
import { navigateTo } from '../utils/router.js';

export function renderHomePage(container) {
  document.title = 'Vardha Warehousing — Commercial Warehouse Solutions in Gorakhpur';
  
  container.innerHTML = `
    <!-- ── 1. HERO SECTION ── -->
    <div class="home-hero">
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
    </div>

    <!-- ── 2. BRIEF COMPANY INTRODUCTION ── -->
    <div class="home-intro-section">
      <div class="container">
        <div class="home-intro-card">
          <div class="home-intro-badge">WAREHOUSING EXPERTISE SINCE 1987</div>
          <h2 class="home-intro-title">Commercial Warehouse Partner in Eastern UP</h2>
          <p class="home-intro-text">
            For over 35 years, Vardha Warehousing has supported regional and national businesses with dedicated storage, commercial logistics infrastructure, and heavy vehicle transport access in Gorakhpur.
          </p>
        </div>
      </div>
    </div>

    <!-- ── 3. MAIN SERVICE SELECTION SECTION ── -->
    <div class="home-choice-section" id="choose-service">
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
    </div>

    <!-- ── 4. SHORT TRUST & LOCATION SUMMARY ── -->
    <div class="home-trust-strip">
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
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
    </div>
  `;
}
