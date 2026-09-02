/* ============================================
   HERO SECTION COMPONENT
   ============================================ */

import { scrollToSection } from '../utils/scroll.js';

export function renderHeroSection(container) {
  container.innerHTML = `
    <div class="hero">
      <div class="hero-bg">
        <img 
          src="/images/hero-warehouse-bg.webp" 
          alt="Vardha Warehousing — Commercial warehouse exterior with loading dock bays and transport access" 
          loading="eager" 
        />
      </div>
      <div class="hero-overlay"></div>

      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-label">VARDHA WAREHOUSING</span>
          <h1 class="hero-title">
            Find the Right<br />
            <span class="hero-highlight">Warehouse Space</span><br />
            for Your Business
          </h1>
          <p class="hero-subtitle">
            Explore commercial warehouse space, calculate your estimated requirement
            and send your request in just a few simple steps.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-hero-primary" id="hero-find-space">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              Find Your Space
            </button>
            <button class="btn btn-hero-secondary" id="hero-explore">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Explore Warehouse
            </button>
          </div>
        </div>

        <!-- Connected Bottom Feature Strip -->
        <div class="hero-feature-strip">
          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                <path d="M9 22v-4h6v4"/>
                <path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/>
                <path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/>
                <path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">Commercial Property</h4>
              <p class="feature-strip-sub">Purpose-built for business</p>
            </div>
          </div>

          <div class="feature-strip-divider"></div>

          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">24×7 Transport Access</h4>
              <p class="feature-strip-sub">Easy movement, every time</p>
            </div>
          </div>

          <div class="feature-strip-divider"></div>

          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">CCTV & Security</h4>
              <p class="feature-strip-sub">Safe, secure & monitored</p>
            </div>
          </div>

          <div class="feature-strip-divider"></div>

          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">Experience Since 1987</h4>
              <p class="feature-strip-sub">Decades of trusted service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // CTA button handlers
  document.getElementById('hero-find-space')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });

  document.getElementById('hero-explore')?.addEventListener('click', () => {
    scrollToSection('#warehouse');
  });
}
