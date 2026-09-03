/* ============================================
   VIDEO / REEL SECTION COMPONENT
   ============================================
   Dedicated section for a vertical 9:16 reel
   placeholder with supporting key points.
   ============================================ */

import { scrollToSection } from '../utils/scroll.js';

export function renderVideoSection(container) {
  container.innerHTML = `
    <div class="video-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">See It for Yourself</span>
          <h2>Take a Real Look Inside the Warehouse</h2>
          <p class="section-subtitle centered">
            Watch a short video to see where the warehouse is located, what the facility looks like, and how it supports business operations.
          </p>
        </div>

        <div class="video-grid">
          <!-- Left: 9:16 Vertical Reel Placeholder -->
          <div class="video-frame-wrapper reveal-left">
            <div class="video-frame">
              <div class="video-placeholder">
                <div class="video-play-ring">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <p class="video-coming-label">Video Coming Soon</p>
                <span class="video-format-tag">Vertical Reel</span>
              </div>
            </div>
          </div>

          <!-- Right: Key Points + CTA -->
          <div class="video-info reveal-right">
            <h3 class="video-info-heading">What You'll See in This Video</h3>

            <div class="video-points">
              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>Where the Warehouse Is Located</strong>
                  <p>Main Gorakhnath Temple Road, Bargadwa — Gorakhpur</p>
                </div>
              </div>

              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="m17 2-5 5-5-5"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>A Real Look at the Warehouse</strong>
                  <p>See the building, loading bays, and commercial infrastructure</p>
                </div>
              </div>

              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>How Goods Can Move Through the Facility</strong>
                  <p>Loading, unloading, and dispatch — day and night</p>
                </div>
              </div>

              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>What Businesses Can Use the Space For</strong>
                  <p>Storage, distribution, e-commerce operations, and more</p>
                </div>
              </div>
            </div>

            <div class="video-cta-row">
              <button class="btn btn-primary" id="video-explore-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                Explore Warehouse Space
              </button>
              <button class="btn btn-outline" id="video-discuss-btn" style="border-color: var(--color-border); color: var(--color-primary);">
                Discuss Your Requirement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('video-explore-btn')?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });

  document.getElementById('video-discuss-btn')?.addEventListener('click', () => {
    scrollToSection('#contact');
  });
}
