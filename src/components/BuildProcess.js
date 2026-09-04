/* ============================================
   BUILD PROCESS COMPONENT
   ============================================
   "How We Help You Build a Warehouse"
   5-step visual process before the Build form.
   ============================================ */

import { scrollToSection } from '../utils/scroll.js';

export function renderBuildProcess(container) {
  container.innerHTML = `
    <div class="build-process-section section" id="build-process">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Warehouse Construction & Development</span>
          <h2>How We Help You Build a Warehouse</h2>
          <p class="section-subtitle centered">
            From your initial requirement to a fully built warehouse facility — here is how the process works.
          </p>
        </div>

        <div class="build-steps reveal">
          <!-- Step 1 -->
          <div class="build-step">
            <div class="build-step__number">1</div>
            <div class="build-step__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 class="build-step__title">Share Your Requirement</h3>
            <p class="build-step__desc">Tell us about your land, location and business requirement.</p>
          </div>

          <!-- Connector -->
          <div class="build-step__connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

          <!-- Step 2 -->
          <div class="build-step">
            <div class="build-step__number">2</div>
            <div class="build-step__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 class="build-step__title">Land & Site Assessment</h3>
            <p class="build-step__desc">We evaluate the site and understand the project requirements.</p>
          </div>

          <!-- Connector -->
          <div class="build-step__connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

          <!-- Step 3 -->
          <div class="build-step">
            <div class="build-step__number">3</div>
            <div class="build-step__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3 class="build-step__title">Warehouse Planning</h3>
            <p class="build-step__desc">Plan the warehouse size, layout and operational requirements.</p>
          </div>

          <!-- Connector -->
          <div class="build-step__connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

          <!-- Step 4 -->
          <div class="build-step">
            <div class="build-step__number">4</div>
            <div class="build-step__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/>
              </svg>
            </div>
            <h3 class="build-step__title">Construction & Development</h3>
            <p class="build-step__desc">Build the warehouse facility according to the approved plan.</p>
          </div>

          <!-- Connector -->
          <div class="build-step__connector">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

          <!-- Step 5 -->
          <div class="build-step">
            <div class="build-step__number">5</div>
            <div class="build-step__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
              </svg>
            </div>
            <h3 class="build-step__title">Project Handover</h3>
            <p class="build-step__desc">Complete the project and prepare the facility for business operations.</p>
          </div>
        </div>

        <div class="build-process-cta reveal">
          <button class="btn btn-primary" id="build-process-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/>
            </svg>
            Share Your Project Requirement
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('build-process-cta-btn')?.addEventListener('click', () => {
    scrollToSection('#warehouse-setup');
  });
}
