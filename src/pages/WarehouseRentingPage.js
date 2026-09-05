/* ============================================
   WAREHOUSE RENTING PAGE — GRAPHIC-HEAVY STANDALONE WEBSITE
   ============================================
   Route: /warehouse-renting
   Visual-first, layman-friendly warehouse rental experience.
   Principle: SEE → UNDERSTAND → EXPLORE → CALCULATE → SUBMIT
   ============================================ */

import { CONFIG } from '../config.js';
import { submitCalculatorBookingApi } from '../utils/api.js';
import { attachPhoneMask, validatePhone } from '../utils/validation.js';

/* ── Indian Currency Formatter ── */
export function formatIndianCurrency(amount) {
  if (typeof amount !== 'number' || isNaN(amount) || amount === 0) return '₹0';
  const isNegative = amount < 0;
  const absAmount = Math.abs(Math.round(amount));
  const str = absAmount.toString();

  if (str.length <= 3) {
    return `${isNegative ? '-' : ''}₹${str}`;
  }

  const lastThree = str.slice(-3);
  const otherDigits = str.slice(0, -3);
  const formattedOther = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',');

  return `${isNegative ? '-' : ''}₹${formattedOther},${lastThree}`;
}

/* ── Pricing Calculation ── */
export function calculateRentingPrice(areaSqFt) {
  const area = Number(areaSqFt) || 0;

  if (area < 500) {
    return {
      area,
      rate: 60,
      total: 0,
      isValid: false,
      validationMessage: 'Minimum available warehouse requirement is 500 sq. ft. Please enter 500 sq. ft. or more.',
    };
  }

  if (area > 42000) {
    return {
      area,
      rate: 24,
      total: 0,
      isValid: false,
      validationMessage: 'For warehouse requirements above 42,000 sq. ft., please contact us for a custom solution.',
    };
  }

  // PRICING RULES:
  // 500 to 5,000 sq. ft. (inclusive): ₹60/sq. ft.
  // 5,001 to 42,000 sq. ft.: ₹24/sq. ft.
  const rate = area <= 5000 ? 60 : 24;
  const total = area * rate;

  return {
    area,
    rate,
    total,
    isValid: true,
    validationMessage: '',
  };
}

/* ── Calculator State ── */
let rentState = {
  tab: 'direct', // 'direct' | 'dimensions'
  area: 5000,
  length: 100,
  width: 50,
  height: '14 ft.', // '14 ft.' | '22 ft.' | 'Not Sure — Help Me Choose'
  rate: 60,
  total: 300000,
  isValid: true,
  validationMessage: '',
  isSubmitting: false,
};

export function renderWarehouseRentingPage(container) {
  document.title = 'Rent Ready Commercial Warehouse Space in Gorakhpur — Vardha Warehousing';
  const { contact } = CONFIG;

  const whatsappBaseUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}`
    : 'https://wa.me/919999999999';

  // Initialize state with default: 5,000 sq. ft.
  rentState = {
    tab: 'direct',
    area: 5000,
    length: 100,
    width: 50,
    height: '14 ft.',
    rate: 60,
    total: 300000,
    isValid: true,
    validationMessage: '',
    isSubmitting: false,
  };

  const quickPresets = [500, 1000, 2500, 5000, 10000, 20000, 42000];

  container.innerHTML = `
    <div class="renting-page-visual">

      <!-- ══ IN-PAGE STICKY NAV BAR ══ -->
      <nav class="rent-v-subnav" aria-label="Quick Section Navigation">
        <div class="container rent-v-subnav-container">
          <div class="rent-v-subnav-links">
            <a href="#rent-hero" class="rent-v-subnav-link">Overview</a>
            <a href="#rent-about" class="rent-v-subnav-link">About Space</a>
            <a href="#rent-usecases" class="rent-v-subnav-link">Use Cases</a>
            <a href="#rent-how-it-works" class="rent-v-subnav-link">How It Works</a>
            <a href="#rent-why-us" class="rent-v-subnav-link">Why Vardha</a>
            <a href="#rent-showcase" class="rent-v-subnav-link">Facility Tour</a>
            <a href="#rent-scale-guide" class="rent-v-subnav-link">Choose Space</a>
            <a href="#rent-calculator" class="rent-v-subnav-link highlight-pill">Calculator</a>
            <a href="#rent-faq" class="rent-v-subnav-link">FAQ</a>
          </div>
          <a href="#rent-calculator" class="rent-v-subnav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            <span>Estimate Rent</span>
          </a>
        </div>
      </nav>

      <!-- ══ SECTION 1: PREMIUM VISUAL HERO ══ -->
      <section class="rent-v-hero" id="rent-hero">
        <div class="rent-v-hero-bg">
          <img
            src="/images/warehouse-hero.jpg"
            alt="Vardha commercial warehouse facility in Gorakhpur"
            loading="eager"
          />
        </div>
        <div class="rent-v-hero-overlay"></div>

        <div class="container rent-v-hero-container">
          <div class="rent-v-hero-grid">
            <div class="rent-v-hero-text">
              <div class="rent-v-hero-badge">
                <span class="badge-pulse"></span>
                <span>READY COMMERCIAL WAREHOUSE SPACE • GORAKHPUR</span>
              </div>
              <h1 class="rent-v-hero-title">
                Find the Right Warehouse Space<br />
                <span class="text-gold-gradient">for Your Business</span>
              </h1>
              <p class="rent-v-hero-subtitle">
                Choose the space you need. Get an instant transparent estimate. Submit your requirement in minutes.
              </p>

              <!-- Dual CTAs -->
              <div class="rent-v-hero-actions">
                <a href="#rent-calculator" class="btn btn-primary btn-hero-main">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  <span>Calculate Your Requirement</span>
                </a>
                <a
                  href="${whatsappBaseUrl}?text=${encodeURIComponent('Hello Vardha Warehousing, I would like to inquire about renting warehouse space in Gorakhpur.')}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-hero-secondary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>Talk to Us</span>
                </a>
              </div>

              <!-- 3 Visual Step Indicator Pills -->
              <div class="rent-v-hero-steps-bar">
                <div class="hero-step-node">
                  <div class="node-number">1</div>
                  <div class="node-text">
                    <span class="node-title">Choose Space</span>
                    <span class="node-sub">500 to 42,000 sq.ft.</span>
                  </div>
                </div>
                <div class="hero-step-line"></div>
                <div class="hero-step-node">
                  <div class="node-number">2</div>
                  <div class="node-text">
                    <span class="node-title">See Estimate</span>
                    <span class="node-sub">₹24 - ₹60 / sq.ft.</span>
                  </div>
                </div>
                <div class="hero-step-line"></div>
                <div class="hero-step-node">
                  <div class="node-number">3</div>
                  <div class="node-text">
                    <span class="node-title">Send Inquiry</span>
                    <span class="node-sub">Instant team callback</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Hero Visual Card -->
            <div class="rent-v-hero-visual">
              <div class="hero-visual-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/warehouse-interior-lux.jpg" alt="Vardha warehouse interior" />
                  <div class="hero-card-tag">READY FOR OCCUPANCY</div>
                </div>
                <div class="hero-card-stats">
                  <div class="card-stat-box">
                    <span class="stat-label">Campus Capacity</span>
                    <span class="stat-val">42,000 <small>sq. ft.</small></span>
                  </div>
                  <div class="card-stat-divider"></div>
                  <div class="card-stat-box">
                    <span class="stat-label">Clear Heights</span>
                    <span class="stat-val">14 & 22 <small>ft.</small></span>
                  </div>
                  <div class="card-stat-divider"></div>
                  <div class="card-stat-box">
                    <span class="stat-label">Highway Access</span>
                    <span class="stat-val">NH-27 <small>Direct</small></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 2: ABOUT THE WAREHOUSE RENTING SERVICE (SPLIT VISUAL STORY) ══ -->
      <section class="rent-v-about-section" id="rent-about">
        <div class="container">
          <div class="rent-v-about-grid">
            
            <!-- Left: High Impact Visual Composition -->
            <div class="rent-v-about-media">
              <div class="about-media-primary">
                <img src="/images/service-find-space.jpg" alt="Vardha Warehouse Commercial Facility" />
                <div class="about-media-badge">
                  <div class="badge-icon-gold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <strong>24×7 Commercial Campus</strong>
                    <span>Bargadwa, Main Gorakhnath Road</span>
                  </div>
                </div>
              </div>
              <div class="about-media-secondary">
                <img src="/images/warehouse-security.jpg" alt="Gated Security Compound" />
                <span class="media-caption-chip">Gated Security Compound</span>
              </div>
            </div>

            <!-- Right: Infographic Value Pillars -->
            <div class="rent-v-about-info">
              <span class="section-pill-tag">WHAT WE PROVIDE</span>
              <h2 class="rent-v-section-title">
                Warehouse Space That Fits<br />
                <span class="text-gold">Your Business Growth</span>
              </h2>
              <p class="rent-v-lead-text">
                No complex enterprise contracts or pallet calculations. We provide clean, secure, and ready-to-occupy industrial warehouse spaces tailored to your exact area requirements.
              </p>

              <div class="about-pillars-list">
                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>Choose Exact Space Needed</h4>
                    <p>Rent from 500 sq. ft. up to 42,000 sq. ft. without paying for unused empty space.</p>
                  </div>
                </div>

                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>Transparent Pricing Upfront</h4>
                    <p>Instant price calculation with clear rates: ₹60/sq.ft. for standard and ₹24/sq.ft. for bulk areas.</p>
                  </div>
                </div>

                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>Easy Logistics & Truck Access</h4>
                    <p>Wide internal paved roads and dedicated loading docks for 32ft containers and heavy trailers.</p>
                  </div>
                </div>

                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>Ready For Immediate Move-In</h4>
                    <p>Equipped with commercial power backup, water lines, office setup, and dedicated on-site support.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ══ SECTION 3: "IS THIS FOR YOU?" VISUAL USE CASES ══ -->
      <section class="rent-v-usecases-section" id="rent-usecases">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">SUITABLE BUSINESSES</span>
            <h2 class="rent-v-section-title">Is This Warehouse Right for You?</h2>
            <p class="rent-v-section-sub">
              Designed to support a wide spectrum of commercial operations, storage types, and business sizes.
            </p>
          </div>

          <div class="rent-v-usecases-grid">
            <!-- Tile 1 -->
            <div class="usecase-tile-card">
              <div class="tile-bg-img">
                <img src="/images/warehouse-fulfillment-scan.jpg" alt="E-Commerce & Online Brands" />
              </div>
              <div class="tile-overlay-gradient"></div>
              <div class="tile-content">
                <div class="tile-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <h3 class="tile-title">E-Commerce & D2C Sellers</h3>
                <p class="tile-desc">Organized SKU racking, staging zone, and fast parcel dispatch for regional online delivery.</p>
                <span class="tile-tag">Fast Dispatch</span>
              </div>
            </div>

            <!-- Tile 2 -->
            <div class="usecase-tile-card">
              <div class="tile-bg-img">
                <img src="/images/warehouse-indian-dock.jpg" alt="Distributors & Wholesalers" />
              </div>
              <div class="tile-overlay-gradient"></div>
              <div class="tile-content">
                <div class="tile-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <h3 class="tile-title">Distributors & Wholesalers</h3>
                <p class="tile-desc">Bulk regional inventory holding with direct container truck unloading and wide turning aprons.</p>
                <span class="tile-tag">Heavy Logistics</span>
              </div>
            </div>

            <!-- Tile 3 -->
            <div class="usecase-tile-card">
              <div class="tile-bg-img">
                <img src="/images/warehouse-interior-racks.jpg" alt="FMCG & Consumer Goods" />
              </div>
              <div class="tile-overlay-gradient"></div>
              <div class="tile-content">
                <div class="tile-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </div>
                <h3 class="tile-title">FMCG & Consumer Goods</h3>
                <p class="tile-desc">Clean, dry, pest-protected, and well-ventilated campus for fast-moving retail products.</p>
                <span class="tile-tag">Clean & Dry</span>
              </div>
            </div>

            <!-- Tile 4 -->
            <div class="usecase-tile-card">
              <div class="tile-bg-img">
                <img src="/images/warehouse-interior.jpg" alt="Manufacturers & Raw Stock" />
              </div>
              <div class="tile-overlay-gradient"></div>
              <div class="tile-content">
                <div class="tile-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7 5V8l7 5V4h3v16"/></svg>
                </div>
                <h3 class="tile-title">Manufacturers & Importers</h3>
                <p class="tile-desc">Secure storage for industrial machinery, production parts, packaging, and raw stock staging.</p>
                <span class="tile-tag">High Ceiling</span>
              </div>
            </div>

            <!-- Tile 5 -->
            <div class="usecase-tile-card">
              <div class="tile-bg-img">
                <img src="/images/warehouse-exterior.jpg" alt="Retail Chains & City Buffers" />
              </div>
              <div class="tile-overlay-gradient"></div>
              <div class="tile-content">
                <div class="tile-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 class="tile-title">Retail Store Chains</h3>
                <p class="tile-desc">Centralized Gorakhpur buffer stock point to keep multiple city retail showrooms replenished.</p>
                <span class="tile-tag">City Buffer</span>
              </div>
            </div>

            <!-- Tile 6 -->
            <div class="usecase-tile-card">
              <div class="tile-bg-img">
                <img src="/images/warehouse-loading.jpg" alt="Seasonal Stock & Expansion" />
              </div>
              <div class="tile-overlay-gradient"></div>
              <div class="tile-content">
                <div class="tile-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
                <h3 class="tile-title">Seasonal & Surge Inventory</h3>
                <p class="tile-desc">Flexible overflow space to manage festival surges and temporary stock peaks with ease.</p>
                <span class="tile-tag">Flexible Terms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 4: VISUAL "HOW IT WORKS" FLOWCHART (GRAPHIC STORYTELLING) ══ -->
      <section class="rent-v-process-section" id="rent-how-it-works">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag tag-dark">THE 4-STEP JOURNEY</span>
            <h2 class="rent-v-section-title text-white">How Renting Works With Vardha</h2>
            <p class="rent-v-section-sub text-light-muted">
              From requirement calculation to key handover in four straightforward steps.
            </p>
          </div>

          <div class="rent-v-process-track">
            <!-- Step 1 -->
            <div class="process-track-step">
              <div class="step-badge-num">01</div>
              <div class="step-icon-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h3 class="step-heading">Select Your Space</h3>
              <p class="step-text">Choose a quick preset or enter custom square feet or room dimensions.</p>
              <div class="step-meta-chip">Area Input</div>
            </div>

            <div class="process-track-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>

            <!-- Step 2 -->
            <div class="process-track-step">
              <div class="step-badge-num">02</div>
              <div class="step-icon-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 class="step-heading">See Instant Price</h3>
              <p class="step-text">Live price updates automatically based on standard transparent ₹/sq.ft. rates.</p>
              <div class="step-meta-chip">Instant Quote</div>
            </div>

            <div class="process-track-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>

            <!-- Step 3 -->
            <div class="process-track-step">
              <div class="step-badge-num">03</div>
              <div class="step-icon-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
              </div>
              <h3 class="step-heading">Submit Contact Info</h3>
              <p class="step-text">Click "Continue" and submit your name & phone in the quick popup modal.</p>
              <div class="step-meta-chip">1-Minute Form</div>
            </div>

            <div class="process-track-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>

            <!-- Step 4 -->
            <div class="process-track-step">
              <div class="step-badge-num">04</div>
              <div class="step-icon-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 class="step-heading">Move In & Operate</h3>
              <p class="step-text">Our on-site team schedules a walkthrough and completes space handover smoothly.</p>
              <div class="step-meta-chip">Fast Handover</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 5: WHY RENT THROUGH US (CENTRAL HUB VISUAL) ══ -->
      <section class="rent-v-why-section" id="rent-why-us">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">WHY VARDHA</span>
            <h2 class="rent-v-section-title">Why Businesses Choose Our Warehouse Space</h2>
            <p class="rent-v-section-sub">
              Combining prime Gorakhpur highway connectivity with high-spec warehouse infrastructure.
            </p>
          </div>

          <div class="why-hub-composition">
            
            <!-- Left Benefit Column -->
            <div class="why-hub-col why-hub-left">
              <div class="hub-benefit-node">
                <div class="hub-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div>
                  <h4>Zero Wasted Space</h4>
                  <p>Pay only for the square footage your inventory requires today.</p>
                </div>
              </div>

              <div class="hub-benefit-node">
                <div class="hub-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>Gated 24×7 Security</h4>
                  <p>Continuous on-premise security guards, CCTV surveillance, and secure compound.</p>
                </div>
              </div>

              <div class="hub-benefit-node">
                <div class="hub-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <h4>100% Utilities Backup</h4>
                  <p>Industrial power backup, water supply, and office connectivity available.</p>
                </div>
              </div>
            </div>

            <!-- Central Visual Photo Hub -->
            <div class="why-hub-center">
              <div class="hub-center-image-frame">
                <img src="/images/warehouse-exterior.jpg" alt="Vardha Warehouse Campus Gorakhpur" />
                <div class="hub-center-badge">
                  <span class="badge-title">42,000 SQ. FT. CAMPUS</span>
                  <span class="badge-subtitle">Main Gorakhnath Temple Road</span>
                </div>
              </div>
            </div>

            <!-- Right Benefit Column -->
            <div class="why-hub-col why-hub-right">
              <div class="hub-benefit-node">
                <div class="hub-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Direct NH-27 Access</h4>
                  <p>Swift highway access avoids city congestion for smooth inter-state freight transit.</p>
                </div>
              </div>

              <div class="hub-benefit-node">
                <div class="hub-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>
                </div>
                <div>
                  <h4>High Clear Ceilings</h4>
                  <p>14 ft. and 22 ft. vertical clearances ideal for multi-tier stacking racks.</p>
                </div>
              </div>

              <div class="hub-benefit-node">
                <div class="hub-icon-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4>On-Site Ground Assistance</h4>
                  <p>Experienced facility management staff on-site to assist your team daily.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ══ SECTION 6: WAREHOUSE EXPERIENCE & VISUAL SHOWCASE ══ -->
      <section class="rent-v-showcase-section" id="rent-showcase">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">FACILITY TOUR</span>
            <h2 class="rent-v-section-title">Warehouse Infrastructure Showcase</h2>
            <p class="rent-v-section-sub">
              High-resolution glimpses of our operational commercial storage facilities.
            </p>
          </div>

          <div class="rent-v-showcase-mosaic">
            <!-- Large Hero Mosaic Item -->
            <div class="mosaic-item mosaic-large">
              <img src="/images/warehouse-interior-lux.jpg" alt="Main storage floor" />
              <div class="mosaic-caption">
                <span class="mosaic-tag">STORAGE FLOOR</span>
                <h3>Expansive Clear-Span Concrete Storage Hall</h3>
                <p>Heavy load-bearing industrial flooring with zero waterlogging.</p>
              </div>
            </div>

            <!-- Mosaic Item 2 -->
            <div class="mosaic-item">
              <img src="/images/warehouse-interior-racks.jpg" alt="High clearance racking" />
              <div class="mosaic-caption">
                <span class="mosaic-tag">CLEAR HEIGHT</span>
                <h3>14 & 22 Ft. Vertical Height</h3>
                <p>Optimal for multi-level industrial stacking.</p>
              </div>
            </div>

            <!-- Mosaic Item 3 -->
            <div class="mosaic-item">
              <img src="/images/warehouse-indian-dock.jpg" alt="Loading dock" />
              <div class="mosaic-caption">
                <span class="mosaic-tag">LOADING APRON</span>
                <h3>Paved Heavy Vehicle Docks</h3>
                <p>Smooth loading for 32ft commercial trucks.</p>
              </div>
            </div>

            <!-- Mosaic Item 4 -->
            <div class="mosaic-item">
              <img src="/images/warehouse-night-loading.jpg" alt="24x7 Night operations" />
              <div class="mosaic-caption">
                <span class="mosaic-tag">24×7 ACCESS</span>
                <h3>Round-the-Clock Illumination</h3>
                <p>Fully illuminated compound for night shifts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 7: VISUAL "CHOOSE YOUR SPACE" TRANSITION ══ -->
      <section class="rent-v-scale-section" id="rent-scale-guide">
        <div class="container">
          <div class="rent-v-scale-box">
            <div class="scale-header-center">
              <span class="section-pill-tag tag-gold">SPACE SIZING GUIDE</span>
              <h2 class="scale-title">How Much Space Does Your Business Need?</h2>
              <p class="scale-subtitle">
                Compare typical operational requirements to easily choose your ideal square footage.
              </p>
            </div>

            <!-- Visual Sizing Spectrum Comparison -->
            <div class="scale-spectrum-row">
              <div class="scale-spectrum-card" data-preset="1000">
                <div class="scale-visual-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </div>
                <span class="scale-bracket-tag">COMPACT SPACE</span>
                <h3 class="scale-bracket-title">500 – 2,500 <small>sq. ft.</small></h3>
                <p class="scale-bracket-desc">Ideal for small retailers, local e-commerce stores, and seasonal overflow stock.</p>
                <div class="scale-rate-chip">Rate: ₹60 / sq. ft.</div>
              </div>

              <div class="scale-spectrum-card featured" data-preset="5000">
                <div class="popular-ribbon">MOST POPULAR</div>
                <div class="scale-visual-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
                </div>
                <span class="scale-bracket-tag">GROWING OPERATION</span>
                <h3 class="scale-bracket-title">5,000 – 10,000 <small>sq. ft.</small></h3>
                <p class="scale-bracket-desc">Perfect for wholesale distributors, FMCG stock holding, and regional supply hubs.</p>
                <div class="scale-rate-chip rate-highlight">Rate: ₹24 – ₹60 / sq. ft.</div>
              </div>

              <div class="scale-spectrum-card" data-preset="20000">
                <div class="scale-visual-icon">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M2 20h20"/><path d="M5 20V8l7 5V8l7 5V4h3v16"/></svg>
                </div>
                <span class="scale-bracket-tag">LARGE ENTERPRISE</span>
                <h3 class="scale-bracket-title">10,000 – 42,000 <small>sq. ft.</small></h3>
                <p class="scale-bracket-desc">Full campus bays for manufacturing distribution, 3PL logistics, and high-volume staging.</p>
                <div class="scale-rate-chip">Rate: ₹24 / sq. ft. (Bulk)</div>
              </div>
            </div>

            <!-- Transition CTA to Calculator -->
            <div class="scale-cta-center">
              <a href="#rent-calculator" class="btn btn-primary btn-scale-lead">
                <span>Calculate Your Exact Rent Below</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 8: EXISTING WAREHOUSE CALCULATOR (PREMIUM FOCAL TOOL) ══ -->
      <section class="rent-v-calculator-section" id="rent-calculator">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag tag-accent">INTERACTIVE CALCULATOR</span>
            <h2 class="rent-v-section-title">Calculate Your Warehouse Requirement & Rent</h2>
            <p class="rent-v-section-sub">
              Enter your required square footage or dimensions to see an instant transparent calculation.
            </p>
          </div>

          <div class="rent-calc-console-wrapper">
            <div class="rent-calc-console">
              
              <!-- Console Header -->
              <div class="calc-console-header">
                <div class="console-title-wrap">
                  <h3 class="console-title">Requirement Estimator Console</h3>
                  <span class="live-calc-badge"><span class="badge-dot"></span> LIVE CALCULATION</span>
                </div>
                <p class="console-sub">Choose your input method and preferred ceiling height below.</p>
              </div>

              <!-- Two Interactive Tabs -->
              <div class="calc-mode-tabs" role="tablist">
                <button
                  type="button"
                  class="calc-mode-tab-btn ${rentState.tab === 'direct' ? 'active' : ''}"
                  id="tab-direct-btn"
                  role="tab"
                  aria-selected="${rentState.tab === 'direct'}"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                  <span>Enter Area Directly (sq. ft.)</span>
                </button>
                <button
                  type="button"
                  class="calc-mode-tab-btn ${rentState.tab === 'dimensions' ? 'active' : ''}"
                  id="tab-dimensions-btn"
                  role="tab"
                  aria-selected="${rentState.tab === 'dimensions'}"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"/><path d="m14.5 3.5 6 6"/><path d="m7.5 10.5 2 2"/><path d="m10.5 13.5 2 2"/></svg>
                  <span>Calculate from Dimensions (L × W)</span>
                </button>
              </div>

              <!-- Tab 1: Enter Area Directly -->
              <div class="calc-tab-panel ${rentState.tab === 'direct' ? 'active' : ''}" id="tab-direct-content">
                <div class="calc-control-group">
                  <label class="calc-control-label" for="direct-area-input">
                    <span class="label-primary">Total Warehouse Space Needed:</span>
                    <span class="label-hint">Enter your required area in square feet.</span>
                  </label>
                  
                  <div class="console-input-wrap">
                    <input
                      type="number"
                      id="direct-area-input"
                      class="console-number-input"
                      placeholder="e.g. 5,000"
                      value="${rentState.area}"
                      min="100"
                      max="100000"
                      step="100"
                    />
                    <span class="console-unit-tag">sq. ft.</span>
                  </div>

                  <!-- Quick Select Pills -->
                  <div class="calc-presets-bar">
                    <span class="presets-label">Quick Presets:</span>
                    <div class="presets-pills-row">
                      ${quickPresets
                        .map(
                          (preset) => `
                        <button
                          type="button"
                          class="preset-pill-btn ${rentState.area === preset ? 'active' : ''}"
                          data-preset="${preset}"
                        >
                          ${preset.toLocaleString('en-IN')} sq. ft.
                        </button>
                      `
                        )
                        .join('')}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab 2: Calculate from Dimensions -->
              <div class="calc-tab-panel ${rentState.tab === 'dimensions' ? 'active' : ''}" id="tab-dimensions-content">
                <div class="calc-control-group">
                  <label class="calc-control-label">
                    <span class="label-primary">Enter Room / Hall Dimensions:</span>
                    <span class="label-hint">Enter the length and width in feet.</span>
                  </label>

                  <div class="console-dimensions-grid">
                    <div class="dim-col">
                      <span class="dim-label-text">Length</span>
                      <div class="dim-field-wrap">
                        <input
                          type="number"
                          id="dim-length-input"
                          class="console-dim-input"
                          placeholder="100"
                          value="${rentState.length}"
                          min="10"
                          max="1000"
                          step="5"
                        />
                        <span class="dim-tag">ft.</span>
                      </div>
                    </div>

                    <div class="dim-operator">×</div>

                    <div class="dim-col">
                      <span class="dim-label-text">Width</span>
                      <div class="dim-field-wrap">
                        <input
                          type="number"
                          id="dim-width-input"
                          class="console-dim-input"
                          placeholder="50"
                          value="${rentState.width}"
                          min="10"
                          max="1000"
                          step="5"
                        />
                        <span class="dim-tag">ft.</span>
                      </div>
                    </div>
                  </div>

                  <!-- Dimensions Live Calculated Result Pill -->
                  <div class="dim-live-result">
                    <span class="dim-formula-text">${rentState.length} ft. × ${rentState.width} ft.</span>
                    <span class="dim-arrow-eq">=</span>
                    <span class="dim-total-space">Total Area: <strong>${(rentState.length * rentState.width).toLocaleString('en-IN')} sq. ft.</strong></span>
                  </div>
                </div>
              </div>

              <!-- Validation Message Notice -->
              <div
                class="calc-validation-notice ${!rentState.isValid ? 'visible' : ''}"
                id="calc-validation-notice"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span id="calc-validation-text">${rentState.validationMessage}</span>
              </div>

              <!-- Height Preference Selector -->
              <div class="console-height-selector">
                <label class="calc-control-label">
                  <span class="label-primary">Preferred Ceiling Clear Height:</span>
                  <span class="label-hint">Select the height clearance best suited for your racking.</span>
                </label>

                <div class="height-cards-row">
                  <button
                    type="button"
                    class="height-select-card ${rentState.height === '14 ft.' ? 'active' : ''}"
                    data-height="14 ft."
                  >
                    <div class="height-check-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div class="height-info">
                      <span class="height-val">14 ft. Height</span>
                      <span class="height-note">Standard Industrial</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    class="height-select-card ${rentState.height === '22 ft.' ? 'active' : ''}"
                    data-height="22 ft."
                  >
                    <div class="height-check-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div class="height-info">
                      <span class="height-val">22 ft. Height</span>
                      <span class="height-note">High Clear Ceiling</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    class="height-select-card ${rentState.height === 'Not Sure — Help Me Choose' ? 'active' : ''}"
                    data-height="Not Sure — Help Me Choose"
                  >
                    <div class="height-check-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div class="height-info">
                      <span class="height-val">Not Sure</span>
                      <span class="height-note">Help Me Choose</span>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Live Calculated Result Card (Focal Point) -->
              <div class="console-result-card" id="rent-price-summary-card">
                <div class="result-card-inner">
                  <div class="result-metric">
                    <span class="metric-label">REQUIRED SPACE</span>
                    <span class="metric-value" id="summary-display-area">${rentState.area.toLocaleString('en-IN')} sq. ft.</span>
                  </div>

                  <div class="result-divider"></div>

                  <div class="result-metric">
                    <span class="metric-label">APPLICABLE RATE</span>
                    <span class="metric-value gold-rate" id="summary-display-rate">₹${rentState.rate} / sq. ft.</span>
                  </div>

                  <div class="result-divider"></div>

                  <div class="result-metric metric-total">
                    <span class="metric-label">ESTIMATED MONTHLY RENT</span>
                    <span class="metric-total-value" id="summary-display-total">${formatIndianCurrency(rentState.total)}</span>
                  </div>
                </div>

                <div class="result-card-footer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  <span>Standard rental estimate based on selected space. Final customized terms discussed with our leasing team.</span>
                </div>
              </div>

              <!-- Console Actions -->
              <div class="console-actions-row">
                <button
                  type="button"
                  class="btn btn-primary btn-console-submit"
                  id="btn-continue-inquiry"
                >
                  <span>Continue With This Requirement</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>

                <a
                  href="${whatsappBaseUrl}?text=${encodeURIComponent('Hello Vardha Warehousing, I am inquiring about renting warehouse space in Gorakhpur.')}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-whatsapp-console"
                  id="btn-whatsapp-inquiry"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>Talk to Us on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 10: TRUST & CONFIDENCE (GENUINE VERIFIED METRICS) ══ -->
      <section class="rent-v-trust-section">
        <div class="container">
          <div class="trust-metrics-grid">
            <div class="trust-metric-box">
              <div class="trust-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="trust-metric-text">
                <span class="trust-val">Prime Gorakhpur</span>
                <span class="trust-sub">Main Gorakhnath Temple Road</span>
              </div>
            </div>

            <div class="trust-metric-box">
              <div class="trust-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <div class="trust-metric-text">
                <span class="trust-val">42,000 Sq. Ft.</span>
                <span class="trust-sub">Total Campus Capacity</span>
              </div>
            </div>

            <div class="trust-metric-box">
              <div class="trust-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div class="trust-metric-text">
                <span class="trust-val">24×7 Secure</span>
                <span class="trust-sub">Gated Campus & CCTV</span>
              </div>
            </div>

            <div class="trust-metric-box">
              <div class="trust-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div class="trust-metric-text">
                <span class="trust-val">Transparent</span>
                <span class="trust-sub">Clear Square-Foot Rates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 11: MINIMAL ACCORDION FAQ ══ -->
      <section class="rent-v-faq-section" id="rent-faq">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 class="rent-v-section-title">Got Questions? Quick Answers</h2>
            <p class="rent-v-section-sub">
              Simple, clear answers about our warehouse space rental process.
            </p>
          </div>

          <div class="rent-v-faq-accordion">
            <!-- FAQ 1 -->
            <div class="v-faq-item">
              <button type="button" class="v-faq-btn" aria-expanded="false">
                <span>How do I calculate the warehouse space I need?</span>
                <span class="v-faq-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div class="v-faq-panel">
                <p>Use our interactive calculator above! Choose a quick preset (like 1,000, 5,000, or 10,000 sq. ft.) or enter your room's length and width in feet under the "Dimensions" tab.</p>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="v-faq-item">
              <button type="button" class="v-faq-btn" aria-expanded="false">
                <span>Is the price shown an accurate estimate?</span>
                <span class="v-faq-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div class="v-faq-panel">
                <p>Yes. Our rates are ₹60/sq.ft. for requirements up to 5,000 sq.ft., and ₹24/sq.ft. for larger areas. Final duration and customized electrical fittings are confirmed with our on-site manager.</p>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="v-faq-item">
              <button type="button" class="v-faq-btn" aria-expanded="false">
                <span>What happens after I submit my requirement?</span>
                <span class="v-faq-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div class="v-faq-panel">
                <p>Our leasing manager receives your exact requirement summary and calls you within a few business hours to schedule a campus walkthrough and finalize your space.</p>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="v-faq-item">
              <button type="button" class="v-faq-btn" aria-expanded="false">
                <span>Can I talk directly to someone right now?</span>
                <span class="v-faq-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div class="v-faq-panel">
                <p>Yes! Click the "Talk to Us on WhatsApp" button anywhere on this page to start an immediate chat with our team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 12: STRONG FINAL VISUAL CTA ══ -->
      <section class="rent-v-final-cta-section">
        <div class="container">
          <div class="rent-v-final-cta-box">
            <div class="cta-box-bg">
              <img src="/images/service-find-space.jpg" alt="Vardha Warehouse" />
            </div>
            <div class="cta-box-overlay"></div>

            <div class="cta-box-content text-center">
              <span class="cta-box-badge">GET STARTED IN MINUTES</span>
              <h2 class="cta-box-title">Ready to Secure Your Warehouse Space?</h2>
              <p class="cta-box-desc">
                Calculate your space requirement and get an estimated price in just a few clicks.
              </p>

              <div class="cta-box-actions">
                <a href="#rent-calculator" class="btn btn-primary btn-cta-main">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  <span>Calculate My Requirement</span>
                </a>
                <a
                  href="${whatsappBaseUrl}?text=${encodeURIComponent('Hello Vardha Warehousing, I would like to discuss renting warehouse space in Gorakhpur.')}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-whatsapp-secondary btn-cta-wa"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>Talk to Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 9: FORM POPUP MODAL (PRESERVED WORKING FLOW) ══ -->
      <!-- ══ SECTION 9: FORM POPUP MODAL (SYNCHRONIZED TRANSPARENT FLOW) ══ -->
      <div class="rent-modal-backdrop" id="rent-inquiry-modal" aria-hidden="true">
        <div class="rent-modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
          
          <!-- Close Button -->
          <button type="button" class="rent-modal-close-btn" id="modal-close-btn" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <!-- Modal Body Content -->
          <div class="rent-modal-body" id="modal-form-view">
            <div class="rent-modal-header">
              <h3 class="rent-modal-title" id="modal-heading">Submit Your Warehouse Space Requirement</h3>
              <p class="rent-modal-subtitle">Review your calculated estimate and provide your contact & storage details for prompt processing.</p>
            </div>

            <!-- SECTION A: Compact Selected Requirement Summary Box (Calculated Automatically) -->
            <div class="modal-requirement-summary">
              <div class="modal-summary-header-row">
                <span class="modal-summary-heading">YOUR CALCULATED REQUIREMENT</span>
                <span class="calc-auto-badge">Calculated automatically</span>
              </div>
              <div class="modal-summary-grid">
                <div class="modal-summary-cell">
                  <span class="cell-label">Warehouse Space:</span>
                  <span class="cell-val" id="modal-sum-area">${rentState.area.toLocaleString('en-IN')} sq. ft.</span>
                </div>
                <div class="modal-summary-cell">
                  <span class="cell-label">Clear Height:</span>
                  <span class="cell-val" id="modal-sum-height">${rentState.height}</span>
                </div>
                <div class="modal-summary-cell">
                  <span class="cell-label">Applicable Rate:</span>
                  <span class="cell-val" id="modal-sum-rate">₹${rentState.rate} / sq. ft.</span>
                </div>
                <div class="modal-summary-cell highlight-cell">
                  <span class="cell-label">Estimated Monthly Rent:</span>
                  <span class="cell-val" id="modal-sum-total">${formatIndianCurrency(rentState.total)}</span>
                </div>
              </div>
            </div>

            <!-- Popup Contact Form -->
            <form class="rent-popup-form" id="rent-popup-inquiry-form" novalidate>
              
              <!-- GROUP 1: Your Contact Details -->
              <div class="modal-form-section">
                <div class="modal-section-title">Your Contact Details</div>
                
                <div class="form-row-2col">
                  <div class="popup-form-group">
                    <label for="popup-fullName">Full Name <span class="req">*</span></label>
                    <input
                      type="text"
                      id="popup-fullName"
                      name="fullName"
                      class="popup-form-input"
                      placeholder="e.g. Rahul Sharma"
                      required
                      autocomplete="name"
                    />
                    <span class="field-error" id="err-fullName"></span>
                  </div>

                  <div class="popup-form-group">
                    <label for="popup-companyName">Business / Company Name</label>
                    <input
                      type="text"
                      id="popup-companyName"
                      name="companyName"
                      class="popup-form-input"
                      placeholder="e.g. Sharma Logistics / Retail"
                      autocomplete="organization"
                    />
                  </div>
                </div>

                <div class="form-row-2col">
                  <div class="popup-form-group">
                    <label for="popup-phone">Mobile Phone Number <span class="req">*</span></label>
                    <div class="phone-input-wrap">
                      <span class="phone-prefix">+91</span>
                      <input
                        type="tel"
                        id="popup-phone"
                        name="phone"
                        class="popup-form-input phone-masked"
                        placeholder="98765 43210"
                        required
                        maxlength="10"
                        inputmode="numeric"
                      />
                    </div>
                    <span class="field-error" id="err-phone"></span>
                  </div>

                  <div class="popup-form-group">
                    <label for="popup-email">Email Address</label>
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      class="popup-form-input"
                      placeholder="e.g. rahul@company.com"
                      autocomplete="email"
                    />
                    <span class="field-error" id="err-email"></span>
                  </div>
                </div>
              </div>

              <!-- GROUP 2: Business & Storage Requirements -->
              <div class="modal-form-section">
                <div class="modal-section-title">Business & Storage Requirements</div>
                
                <div class="popup-form-group">
                  <label for="popup-businessType">Business / Industry Type <span class="req">*</span></label>
                  <select id="popup-businessType" name="businessType" class="popup-form-select">
                    <option value="General Commercial Storage">General Commercial Storage</option>
                    <option value="E-commerce & Online Brands">E-commerce & D2C Brands</option>
                    <option value="Distributors & Wholesalers">Distributors & Wholesalers</option>
                    <option value="FMCG & Consumer Goods">FMCG & Consumer Goods</option>
                    <option value="Manufacturers & Raw Materials">Manufacturers & Industrial</option>
                    <option value="Retail Store Chains">Retail Store Inventory</option>
                    <option value="Seasonal & Surge Stock">Seasonal / Overflow Storage</option>
                    <option value="Other">Other Specialized Storage</option>
                  </select>
                </div>

                <div class="popup-form-group">
                  <label for="popup-storageDescription">Storage Description / Goods Type (Optional)</label>
                  <input
                    type="text"
                    id="popup-storageDescription"
                    name="storageDescription"
                    class="popup-form-input"
                    placeholder="e.g. Packaged foods, machinery parts, apparel, electronics, heavy cartons"
                    maxlength="500"
                  />
                </div>
              </div>

              <!-- GROUP 3: Location & Contact Preference -->
              <div class="modal-form-section">
                <div class="modal-section-title">Location & Contact Preference</div>

                <div class="form-row-2col">
                  <div class="popup-form-group">
                    <label for="popup-city">Preferred Location / City <span class="req">*</span></label>
                    <input
                      type="text"
                      id="popup-city"
                      name="city"
                      class="popup-form-input"
                      value="Gorakhpur"
                      placeholder="e.g. Gorakhpur, UP"
                      required
                    />
                    <span class="field-error" id="err-city"></span>
                  </div>

                  <div class="popup-form-group">
                    <label>Preferred Contact Method</label>
                    <div class="contact-pref-row" id="contact-pref-row">
                      <label class="contact-pref-pill">
                        <input type="radio" name="preferredContactMethod" value="phone" checked />
                        <span>Phone Call</span>
                      </label>
                      <label class="contact-pref-pill">
                        <input type="radio" name="preferredContactMethod" value="whatsapp" />
                        <span>WhatsApp</span>
                      </label>
                      <label class="contact-pref-pill">
                        <input type="radio" name="preferredContactMethod" value="email" />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- GROUP 4: Additional Requirement / Timeline -->
              <div class="modal-form-section">
                <div class="modal-section-title">Additional Requirement / Timeline</div>

                <div class="popup-form-group">
                  <label for="popup-message">Specific Requirements or Expected Move-in Date (Optional)</label>
                  <textarea
                    id="popup-message"
                    name="message"
                    class="popup-form-textarea"
                    rows="2"
                    placeholder="e.g. Ready to occupy by next month, need 3-phase power backup, container truck loading dock access"
                  ></textarea>
                </div>
              </div>

              <!-- General Form Error Notice -->
              <div class="popup-form-alert error-alert" id="popup-general-error" style="display: none;"></div>

              <div class="popup-form-submit-row">
                <button type="submit" class="btn btn-primary btn-submit-popup" id="btn-submit-inquiry">
                  <span class="btn-text">Submit My Requirement</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </button>
              </div>
            </form>
          </div>

          <!-- Modal Success View -->
          <div class="rent-modal-body rent-success-view" id="modal-success-view" style="display: none;">
            <div class="success-icon-badge">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>

            <h3 class="success-title">Your Warehouse Requirement Has Been Received</h3>
            <p class="success-desc">
              Thank you. Your space inquiry has been logged in our system. Our leasing manager will review your requirement and connect with you shortly.
            </p>

            <!-- Server-Generated Reference Number Box -->
            <div class="reference-number-box">
              <span class="ref-label">ENQUIRY REFERENCE NUMBER</span>
              <span class="ref-code" id="success-ref-code">VAR-RENT-XXXXX</span>
            </div>

            <div class="success-summary-box">
              <div class="success-sum-item">
                <span class="sum-label">Required Space:</span>
                <span class="sum-value" id="success-sum-space">5,000 sq. ft.</span>
              </div>
              <div class="success-sum-item">
                <span class="sum-label">Clear Height:</span>
                <span class="sum-value" id="success-sum-height">14 ft.</span>
              </div>
              <div class="success-sum-item">
                <span class="sum-label">Estimated Monthly Rent:</span>
                <span class="sum-value highlight-price" id="success-sum-price">₹3,00,000</span>
              </div>
            </div>

            <div class="success-actions-row">
              <button type="button" class="btn btn-secondary btn-back-site" id="btn-success-back">
                Back to Website
              </button>

              <a
                href="${whatsappBaseUrl}?text=${encodeURIComponent('Hello Vardha Warehousing, I have submitted a warehouse space inquiry on your website.')}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-whatsapp-secondary"
                id="btn-success-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  // Attach all DOM Event Handlers & Interactions
  initVisualRentingEvents(container, whatsappBaseUrl);
}

/* ── Interactive Events, Calculations & FAQ Logic ── */
function initVisualRentingEvents(container, whatsappBaseUrl) {
  // Elements
  const tabDirectBtn = container.querySelector('#tab-direct-btn');
  const tabDimBtn = container.querySelector('#tab-dimensions-btn');
  const tabDirectContent = container.querySelector('#tab-direct-content');
  const tabDimContent = container.querySelector('#tab-dimensions-content');

  const directAreaInput = container.querySelector('#direct-area-input');
  const dimLengthInput = container.querySelector('#dim-length-input');
  const dimWidthInput = container.querySelector('#dim-width-input');
  const quickPillBtns = container.querySelectorAll('.preset-pill-btn');
  const heightSelectCards = container.querySelectorAll('.height-select-card');
  const scaleCards = container.querySelectorAll('.scale-spectrum-card');

  const dimResultFormula = container.querySelector('.dim-formula-text');
  const dimResultTotal = container.querySelector('.dim-total-space');

  const valNotice = container.querySelector('#calc-validation-notice');
  const valText = container.querySelector('#calc-validation-text');

  const displayArea = container.querySelector('#summary-display-area');
  const displayRate = container.querySelector('#summary-display-rate');
  const displayTotal = container.querySelector('#summary-display-total');

  const btnContinue = container.querySelector('#btn-continue-inquiry');
  const modal = container.querySelector('#rent-inquiry-modal');
  const modalCloseBtn = container.querySelector('#modal-close-btn');
  const modalFormView = container.querySelector('#modal-form-view');
  const modalSuccessView = container.querySelector('#modal-success-view');

  const modalSumArea = container.querySelector('#modal-sum-area');
  const modalSumHeight = container.querySelector('#modal-sum-height');
  const modalSumRate = container.querySelector('#modal-sum-rate');
  const modalSumTotal = container.querySelector('#modal-sum-total');

  const popupForm = container.querySelector('#rent-popup-inquiry-form');
  const phoneInput = container.querySelector('#popup-phone');
  const btnSubmit = container.querySelector('#btn-submit-inquiry');
  const btnSuccessBack = container.querySelector('#btn-success-back');
  const btnSuccessWhatsapp = container.querySelector('#btn-success-whatsapp');

  // FAQ Accordion
  const faqButtons = container.querySelectorAll('.v-faq-btn');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      faqButtons.forEach((otherBtn) => {
        otherBtn.setAttribute('aria-expanded', 'false');
        otherBtn.parentElement.classList.remove('active');
      });
      if (!isExpanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.parentElement.classList.add('active');
      }
    });
  });

  if (phoneInput) {
    attachPhoneMask(phoneInput);
  }

  // Update UI Function
  function updateCalculatorUI() {
    const calc = calculateRentingPrice(rentState.area);
    rentState.rate = calc.rate;
    rentState.total = calc.total;
    rentState.isValid = calc.isValid;
    rentState.validationMessage = calc.validationMessage;

    // Direct Input & Pills update
    if (directAreaInput && document.activeElement !== directAreaInput) {
      directAreaInput.value = rentState.area || '';
    }

    quickPillBtns.forEach((btn) => {
      const p = Number(btn.getAttribute('data-preset'));
      if (p === rentState.area) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Dimensions display update
    if (dimResultFormula && dimResultTotal) {
      dimResultFormula.textContent = `${rentState.length} ft. × ${rentState.width} ft.`;
      dimResultTotal.innerHTML = `Total Area: <strong>${(rentState.length * rentState.width).toLocaleString('en-IN')} sq. ft.</strong>`;
    }

    // Validation notice
    if (valNotice && valText) {
      if (!rentState.isValid && rentState.validationMessage) {
        valText.textContent = rentState.validationMessage;
        valNotice.classList.add('visible');
      } else {
        valNotice.classList.remove('visible');
      }
    }

    // Summary Card
    if (displayArea) {
      displayArea.textContent = `${rentState.area.toLocaleString('en-IN')} sq. ft.`;
    }
    if (displayRate) {
      displayRate.textContent = `₹${rentState.rate} / sq. ft.`;
    }
    if (displayTotal) {
      displayTotal.textContent = rentState.isValid ? formatIndianCurrency(rentState.total) : '—';
    }

    // Modal summary values
    if (modalSumArea) {
      modalSumArea.textContent = `${rentState.area.toLocaleString('en-IN')} sq. ft.`;
    }
    if (modalSumHeight) {
      modalSumHeight.textContent = rentState.height;
    }
    if (modalSumRate) {
      modalSumRate.textContent = `₹${rentState.rate} / sq. ft.`;
    }
    if (modalSumTotal) {
      modalSumTotal.textContent = rentState.isValid ? formatIndianCurrency(rentState.total) : 'Custom Quote';
    }

    // Continue button state
    if (btnContinue) {
      btnContinue.disabled = !rentState.isValid;
    }
  }

  // 1. Tab Switching
  function switchTab(newTab) {
    rentState.tab = newTab;
    if (newTab === 'direct') {
      tabDirectBtn.classList.add('active');
      tabDirectBtn.setAttribute('aria-selected', 'true');
      tabDimBtn.classList.remove('active');
      tabDimBtn.setAttribute('aria-selected', 'false');

      tabDirectContent.classList.add('active');
      tabDimContent.classList.remove('active');

      rentState.area = Number(directAreaInput.value) || 5000;
    } else {
      tabDimBtn.classList.add('active');
      tabDimBtn.setAttribute('aria-selected', 'true');
      tabDirectBtn.classList.remove('active');
      tabDirectBtn.setAttribute('aria-selected', 'false');

      tabDimContent.classList.add('active');
      tabDirectContent.classList.remove('active');

      const l = Number(dimLengthInput.value) || 100;
      const w = Number(dimWidthInput.value) || 50;
      rentState.length = l;
      rentState.width = w;
      rentState.area = l * w;
    }
    updateCalculatorUI();
  }

  if (tabDirectBtn && tabDimBtn) {
    tabDirectBtn.addEventListener('click', () => switchTab('direct'));
    tabDimBtn.addEventListener('click', () => switchTab('dimensions'));
  }

  // 2. Direct Area Input Handler
  if (directAreaInput) {
    directAreaInput.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      rentState.area = val;
      updateCalculatorUI();
    });
  }

  // 3. Quick Select Pills
  quickPillBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = Number(btn.getAttribute('data-preset'));
      rentState.area = preset;
      if (directAreaInput) {
        directAreaInput.value = preset;
      }
      updateCalculatorUI();
    });
  });

  // 3b. Sizing Spectrum Cards Click
  scaleCards.forEach((card) => {
    card.addEventListener('click', () => {
      const preset = Number(card.getAttribute('data-preset'));
      if (preset) {
        rentState.area = preset;
        if (directAreaInput) {
          directAreaInput.value = preset;
        }
        if (rentState.tab !== 'direct') {
          switchTab('direct');
        } else {
          updateCalculatorUI();
        }
        const calcElem = container.querySelector('#rent-calculator');
        if (calcElem) {
          calcElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 4. Dimensions Inputs Handler
  function handleDimChange() {
    const l = Math.max(0, Number(dimLengthInput.value) || 0);
    const w = Math.max(0, Number(dimWidthInput.value) || 0);
    rentState.length = l;
    rentState.width = w;
    rentState.area = l * w;
    updateCalculatorUI();
  }

  if (dimLengthInput) {
    dimLengthInput.addEventListener('input', handleDimChange);
  }
  if (dimWidthInput) {
    dimWidthInput.addEventListener('input', handleDimChange);
  }

  // 5. Height Selection Handler
  heightSelectCards.forEach((btn) => {
    btn.addEventListener('click', () => {
      const h = btn.getAttribute('data-height');
      rentState.height = h;
      heightSelectCards.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      updateCalculatorUI();
    });
  });

  // 6. Modal Open / Close Logic
  function openModal() {
    if (!rentState.isValid) {
      if (valNotice) {
        valNotice.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    updateCalculatorUI();
    modalFormView.style.display = 'block';
    modalSuccessView.style.display = 'none';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const nameInput = container.querySelector('#popup-fullName');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 150);
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnContinue) {
    btnContinue.addEventListener('click', openModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 7. Popup Form Submission
  if (popupForm) {
    popupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (rentState.isSubmitting) return;

      const fullName = (container.querySelector('#popup-fullName')?.value || '').trim();
      const companyName = (container.querySelector('#popup-companyName')?.value || '').trim();
      const phone = (container.querySelector('#popup-phone')?.value || '').trim();
      const email = (container.querySelector('#popup-email')?.value || '').trim();
      const city = (container.querySelector('#popup-city')?.value || '').trim();
      const businessType = (container.querySelector('#popup-businessType')?.value || 'General Commercial Storage').trim();
      const storageDescription = (container.querySelector('#popup-storageDescription')?.value || '').trim();
      const preferredContactMethod = (container.querySelector('input[name="preferredContactMethod"]:checked')?.value || 'phone').trim();
      const message = (container.querySelector('#popup-message')?.value || '').trim();

      const errFullName = container.querySelector('#err-fullName');
      const errPhone = container.querySelector('#err-phone');
      const errEmail = container.querySelector('#err-email');
      const errCity = container.querySelector('#err-city');
      const generalErr = container.querySelector('#popup-general-error');

      // Clear existing errors
      [errFullName, errPhone, errEmail, errCity].forEach((el) => {
        if (el) el.textContent = '';
      });
      if (generalErr) {
        generalErr.style.display = 'none';
        generalErr.textContent = '';
      }

      let hasError = false;

      if (!fullName || fullName.length < 2) {
        if (errFullName) errFullName.textContent = 'Please enter your full name (at least 2 characters).';
        hasError = true;
      }

      const phoneErrText = validatePhone(phone);
      if (phoneErrText) {
        if (errPhone) errPhone.textContent = phoneErrText;
        hasError = true;
      }

      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          if (errEmail) errEmail.textContent = 'Please enter a valid email address.';
          hasError = true;
        }
      }

      if (!city) {
        if (errCity) errCity.textContent = 'Please enter your preferred location / city.';
        hasError = true;
      }

      if (hasError) return;

      // Prepare explicit 1-to-1 payload (Single Source of Truth)
      const numericCeilingHeight = parseInt(rentState.height, 10) || 0;
      const payload = {
        fullName,
        phone,
        email,
        companyName,
        areaSqFt: rentState.area,
        ceilingHeight: numericCeilingHeight,
        pricingRate: rentState.rate,
        estimatedMonthlyTotal: rentState.total,
        city,
        businessType,
        storageDescription,
        preferredContactMethod,
        message,
      };

      try {
        rentState.isSubmitting = true;
        if (btnSubmit) {
          btnSubmit.disabled = true;
          const btnText = btnSubmit.querySelector('.btn-text');
          if (btnText) btnText.textContent = 'Submitting...';
        }

        const res = await submitCalculatorBookingApi(payload);

        if (res && res.success) {
          // Success View populated with explicit confirmation details
          const successRefCode = container.querySelector('#success-ref-code');
          const successSpace = container.querySelector('#success-sum-space');
          const successHeight = container.querySelector('#success-sum-height');
          const successPrice = container.querySelector('#success-sum-price');

          const returnedRef = res.data?.referenceNumber || 'VAR-RENT-CONFIRMED';

          if (successRefCode) {
            successRefCode.textContent = returnedRef;
          }
          if (successSpace) {
            successSpace.textContent = `${rentState.area.toLocaleString('en-IN')} sq. ft.`;
          }
          if (successHeight) {
            successHeight.textContent = rentState.height;
          }
          if (successPrice) {
            successPrice.textContent = formatIndianCurrency(rentState.total);
          }

          modalFormView.style.display = 'none';
          modalSuccessView.style.display = 'block';

          // Update WhatsApp button with booking context & reference code
          if (btnSuccessWhatsapp) {
            const waMsg = `Hello Vardha Warehousing, I have submitted a warehouse space requirement (Ref: ${returnedRef}) for ${rentState.area.toLocaleString('en-IN')} sq. ft. (${formatIndianCurrency(rentState.total)}/mo) under name: ${fullName}.`;
            btnSuccessWhatsapp.href = `${whatsappBaseUrl}?text=${encodeURIComponent(waMsg)}`;
          }

          popupForm.reset();
        } else {
          if (generalErr) {
            generalErr.textContent = res?.message || 'Unable to submit requirement. Please check your details and try again.';
            generalErr.style.display = 'block';
          }
        }
      } catch (err) {
        if (generalErr) {
          generalErr.textContent = 'An unexpected network error occurred. Please try again.';
          generalErr.style.display = 'block';
        }
      } finally {
        rentState.isSubmitting = false;
        if (btnSubmit) {
          btnSubmit.disabled = false;
          const btnText = btnSubmit.querySelector('.btn-text');
          if (btnText) btnText.textContent = 'Submit My Requirement';
        }
      }
    });
  }

  // 8. Success View Buttons
  if (btnSuccessBack) {
    btnSuccessBack.addEventListener('click', closeModal);
  }

  // Initialize
  updateCalculatorUI();
}

