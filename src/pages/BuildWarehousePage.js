/* ============================================
   BUILD A WAREHOUSE PAGE — DEDICATED CONSTRUCTION SERVICE WEBSITE
   ============================================
   Route: /build-a-warehouse
   Visual-first warehouse planning, engineering, and construction journey:
   LAND → FOUNDATION → STEEL → ROOF → FLOOR → DOCK → UTILITIES → HANDOVER.
   Supports seamless English & Hindi language switching.
   ============================================ */

import { CONFIG } from '../config.js';
import { submitBuildWarehouseApi } from '../utils/api.js';
import { attachPhoneMask } from '../utils/validation.js';
import { buildWarehouseTranslations } from '../translations/buildWarehouseTranslations.js';
import {
  calculateWarehouseEstimate,
  formatLakhCrore,
  parseAreaInput,
  WAREHOUSE_MIN_AREA,
} from '../utils/warehouseConstructionPricing.js';

// Global / module language state for Build a Warehouse page
let currentLang = 'en';

// Form preserved state across language toggles
let formState = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  location: '',
  landStatus: 'Yes, I have land',
  plotArea: '',
  size: '',
  notes: '',
  warehouseArea: '10000',
  selectedPurpose: 'E-Commerce & Logistics Fulfillment',
  selectedTimeline: '1–3 Months (Immediate)',
};

/**
 * Resolves the initial language preference:
 * 1. URL search parameter: ?lang=hi or ?lang=en
 * 2. Stored localStorage preference
 * 3. Default to 'en'
 */
function resolveInitialLanguage() {
  if (typeof window !== 'undefined' && window.location) {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (paramLang === 'hi' || paramLang === 'en') {
      return paramLang;
    }
  }

  try {
    const saved = localStorage.getItem('vardha_build_lang');
    if (saved === 'hi' || saved === 'en') {
      return saved;
    }
  } catch (e) {}

  return 'en';
}

/**
 * Updates URL search parameter smoothly without triggering page reload
 */
function updateLanguageUrl(lang) {
  if (typeof window !== 'undefined' && window.history && window.location) {
    const url = new URL(window.location.href);
    if (lang === 'hi') {
      url.searchParams.set('lang', 'hi');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState(null, '', url.toString());
  }
}

/**
 * Captures currently typed form inputs from DOM before switching language
 */
function captureCurrentFormInputs(container) {
  if (!container) return;
  const nameEl = container.querySelector('#build-name');
  const compEl = container.querySelector('#build-company');
  const phoneEl = container.querySelector('#build-phone');
  const emailEl = container.querySelector('#build-email');
  const locEl = container.querySelector('#build-location');
  const landEl = container.querySelector('#build-land-status');
  const plotEl = container.querySelector('#build-plot-area');
  const sizeEl = container.querySelector('#build-size');
  const notesEl = container.querySelector('#build-notes');
  const warehouseAreaEl = container.querySelector('#build-warehouse-area');

  if (nameEl) formState.fullName = nameEl.value;
  if (compEl) formState.companyName = compEl.value;
  if (phoneEl) formState.phone = phoneEl.value;
  if (emailEl) formState.email = emailEl.value;
  if (locEl) formState.location = locEl.value;
  if (landEl) formState.landStatus = landEl.value;
  if (plotEl) formState.plotArea = plotEl.value;
  if (sizeEl) formState.size = sizeEl.value;
  if (notesEl) formState.notes = notesEl.value;
  if (warehouseAreaEl) formState.warehouseArea = warehouseAreaEl.value;
}

/**
 * Restores previously entered form inputs into the DOM after re-render
 */
function restoreFormInputs(container) {
  if (!container) return;
  const nameEl = container.querySelector('#build-name');
  const compEl = container.querySelector('#build-company');
  const phoneEl = container.querySelector('#build-phone');
  const emailEl = container.querySelector('#build-email');
  const locEl = container.querySelector('#build-location');
  const landEl = container.querySelector('#build-land-status');
  const plotEl = container.querySelector('#build-plot-area');
  const sizeEl = container.querySelector('#build-size');
  const notesEl = container.querySelector('#build-notes');
  const warehouseAreaEl = container.querySelector('#build-warehouse-area');

  if (nameEl && formState.fullName) nameEl.value = formState.fullName;
  if (compEl && formState.companyName) compEl.value = formState.companyName;
  if (phoneEl && formState.phone) phoneEl.value = formState.phone;
  if (emailEl && formState.email) emailEl.value = formState.email;
  if (locEl && formState.location) locEl.value = formState.location;
  if (landEl && formState.landStatus) landEl.value = formState.landStatus;
  if (plotEl && formState.plotArea) plotEl.value = formState.plotArea;
  if (sizeEl && formState.size) sizeEl.value = formState.size;
  if (notesEl && formState.notes) notesEl.value = formState.notes;
  if (warehouseAreaEl && formState.warehouseArea) warehouseAreaEl.value = formState.warehouseArea;
}

export function renderBuildWarehousePage(container) {
  currentLang = resolveInitialLanguage();
  renderBuildWarehouseContent(container);
}

function renderBuildWarehouseContent(container) {
  const t = buildWarehouseTranslations[currentLang] || buildWarehouseTranslations.en;
  document.title = t.pageTitle;

  const { contact, whatsapp } = CONFIG;
  const whatsappUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        whatsapp?.constructionMessage ||
          'Hi Vardha Team, I want to discuss a custom warehouse construction project in Gorakhpur/UP.'
      )}`
    : '#build-inquiry';

  const quickAreaPresets = [5000, 10000, 20000, 35000, 50000, 100000];

  // Construction timeline image mapping
  const timelineImages = [
    '/images/build-foundation-rcc.jpg',
    '/images/build-steel-framing.jpg',
    '/images/build-roofing-cladding.jpg',
    '/images/build-flooring-laser.jpg',
    '/images/build-handover-facility.jpg',
  ];

  container.innerHTML = `
    <div class="build-page-visual">
      
      <!-- ══ LANGUAGE SWITCHER BAR ══ -->
      <nav class="build-lang-switch-bar" aria-label="${t.langSwitcher.ariaLabel}">
        <div class="container build-lang-switch-container">
          <div class="build-lang-tabs" role="tablist" aria-label="${t.langSwitcher.ariaLabel}">
            <button
              type="button"
              class="build-lang-tab-btn ${currentLang === 'hi' ? 'active' : ''}"
              id="lang-btn-hi"
              role="tab"
              aria-selected="${currentLang === 'hi'}"
              aria-label="Switch to Hindi"
            >
              ${currentLang === 'hi' ? '<span class="tab-dot"></span>' : ''}
              <span>${t.langSwitcher.hi}</span>
            </button>
            <button
              type="button"
              class="build-lang-tab-btn ${currentLang === 'en' ? 'active' : ''}"
              id="lang-btn-en"
              role="tab"
              aria-selected="${currentLang === 'en'}"
              aria-label="Switch to English"
            >
              ${currentLang === 'en' ? '<span class="tab-dot"></span>' : ''}
              <span>${t.langSwitcher.en}</span>
            </button>
          </div>
        </div>
      </nav>

      <!-- ══ SECTION 1: HERO (ACTIVE WAREHOUSE CONSTRUCTION) ══ -->
      <section class="build-v-hero" id="build-hero">
        <div class="build-v-hero-bg">
          <img 
            src="/images/build-hero-construction.jpg" 
            alt="Active commercial PEB warehouse construction site in Uttar Pradesh India with crane, steel frame and workers" 
            loading="eager" 
          />
        </div>
        <div class="build-v-hero-overlay"></div>

        <div class="container build-v-hero-container">
          <div class="build-v-hero-grid">
            
            <!-- Left Hero Content -->
            <div class="build-v-hero-text">
              <div class="build-v-hero-badge">
                <span class="badge-pulse"></span>
                <span>${t.hero.badge}</span>
              </div>
              <h1 class="build-v-hero-title">
                ${t.hero.titleMain}<br />
                <span class="text-gold-gradient">${t.hero.titleHighlight}</span>
              </h1>
              <p class="build-v-hero-subtitle">
                ${t.hero.subtitle}
              </p>

              <!-- Dual CTAs -->
              <div class="build-v-hero-actions">
                <a href="#build-inquiry" class="btn btn-primary btn-hero-main" id="build-hero-cta">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  <span>${t.hero.ctaPrimary}</span>
                </a>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-hero-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>${t.finalCta.ctaWhatsApp}</span>
                </a>
              </div>

              <!-- 3 Visual Step Indicator Pills Inside Hero -->
              <div class="build-v-hero-steps-bar">
                <div class="hero-step-node">
                  <div class="node-number">1</div>
                  <div class="node-text">
                    <span class="node-title">${t.pipeline.stages[0].title}</span>
                    <span class="node-sub">${t.hero.metric1Val}</span>
                  </div>
                </div>
                <div class="hero-step-line"></div>
                <div class="hero-step-node">
                  <div class="node-number">2</div>
                  <div class="node-text">
                    <span class="node-title">${t.pipeline.stages[3].title}</span>
                    <span class="node-sub">${t.hero.metric2Val}</span>
                  </div>
                </div>
                <div class="hero-step-line"></div>
                <div class="hero-step-node">
                  <div class="node-number">3</div>
                  <div class="node-text">
                    <span class="node-title">${t.pipeline.stages[4].title}</span>
                    <span class="node-sub">${t.hero.node3Sub}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Floating Hero Visual Card (Construction In Progress) -->
            <div class="build-v-hero-visual">
              <div class="hero-visual-card">
                <div class="hero-card-img-wrap">
                  <img src="/images/build-steel-framing.jpg" alt="${t.hero.floatingBadgeTitle}" />
                  <div class="hero-card-tag">${t.hero.floatingBadgeTitle}</div>
                </div>
                <div class="hero-card-stats">
                  <div class="card-stat-box">
                    <span class="stat-label">${t.hero.statClearHeightLabel}</span>
                    <span class="stat-val">${t.hero.statClearHeightVal}</span>
                  </div>
                  <div class="card-stat-divider"></div>
                  <div class="card-stat-box">
                    <span class="stat-label">${t.hero.statFloorRatingLabel}</span>
                    <span class="stat-val">${t.hero.statFloorRatingVal}</span>
                  </div>
                  <div class="card-stat-divider"></div>
                  <div class="card-stat-box">
                    <span class="stat-label">${t.hero.statExecutionLabel}</span>
                    <span class="stat-val">${t.hero.statExecutionVal}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ══ SECTION 2: 5-STAGE CONSTRUCTION PROCESS (VISUAL ROADMAP WITH IMAGES) ══ -->
      <section class="build-v-process-section" id="build-process">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">${t.construction.label}</span>
            <h2 class="build-v-section-title">${t.construction.title}</h2>
            <p class="build-v-section-sub">
              ${t.construction.subtitle}
            </p>
          </div>

          <!-- Horizontal Stepper Progress Indicator -->
          <div class="process-roadmap-stepper" aria-hidden="true">
            <div class="roadmap-track-line"></div>
            ${t.construction.phases
              .map(
                (phase, idx) => `
              <div class="roadmap-step-node ${idx === 4 ? 'is-final' : ''}">
                <div class="step-node-dot">
                  <span class="node-idx">0${idx + 1}</span>
                </div>
                <span class="step-node-name">${phase.stepperLabel || phase.badge}</span>
              </div>
            `
              )
              .join('')}
          </div>

          <!-- 5 Construction Phase Cards -->
          <div class="construction-timeline-grid">
            ${t.construction.phases
              .map((phase, idx) => {
                const isFinal = idx === t.construction.phases.length - 1;
                const cleanDeliverable = phase.deliverable.replace(/^✓\s*/, '');
                return `
              <div class="construction-phase-card ${isFinal ? 'is-final-phase' : ''}">
                <div class="phase-card-img-wrap">
                  <img src="${timelineImages[idx]}" alt="${phase.title}" loading="lazy" />
                  <div class="phase-img-gradient"></div>
                  <span class="phase-card-badge">${phase.badge}</span>
                </div>

                <div class="phase-card-body">
                  <h3 class="phase-title">${phase.title}</h3>

                  <ul class="phase-points-list">
                    ${(phase.points || []).map(pt => `
                      <li>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>${pt}</span>
                      </li>
                    `).join('')}
                  </ul>

                  <div class="phase-card-footer">
                    <div class="phase-milestone-pill ${isFinal ? 'milestone-success' : ''}">
                      <span class="milestone-label-tag">MILESTONE</span>
                      <span class="milestone-text-val">${cleanDeliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            `;
              })
              .join('')}
          </div>
        </div>
      </section>

      <!-- ══ SECTION 3: ENGINEERING EXCELLENCE & PLANNING (SPLIT STORY) ══ -->
      <section class="build-v-about-section" id="build-about">
        <div class="container">
          <div class="build-v-about-grid">
            
            <!-- Left: High Impact Construction Media Composition -->
            <div class="build-v-about-media">
              <div class="about-media-primary">
                <img src="/images/build-planning-engineer.jpg" alt="Indian Civil Engineers reviewing warehouse blueprints on site" />
                <div class="about-media-badge">
                  <div class="badge-icon-gold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                  </div>
                  <div>
                    <strong>${t.about.tagPeb}</strong>
                    <span>${t.about.tagHub} ${t.about.tagHighway}</span>
                  </div>
                </div>
              </div>
              <div class="about-media-secondary">
                <img src="/images/build-dock-construction.jpg" alt="${t.about.dockCaption}" />
                <span class="media-caption-chip">${t.about.dockCaption}</span>
              </div>
            </div>

            <!-- Right: Infographic Engineering Value Pillars -->
            <div class="build-v-about-info">
              <span class="section-pill-tag">${t.about.label}</span>
              <h2 class="build-v-section-title">
                ${t.about.titleMain}<br />
                <span class="text-gold">${t.about.titleHighlight}</span>
              </h2>
              <p class="build-v-lead-text">
                ${t.about.lead}
              </p>

              <div class="about-pillars-list">
                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>${t.about.pills[0].title}</h4>
                    <p>${t.about.pills[0].desc}</p>
                  </div>
                </div>

                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>${t.about.pills[1].title}</h4>
                    <p>${t.about.pills[1].desc}</p>
                  </div>
                </div>

                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>${t.about.pills[2].title}</h4>
                    <p>${t.about.pills[2].desc}</p>
                  </div>
                </div>

                <div class="about-pillar-item">
                  <div class="pillar-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="pillar-text">
                    <h4>${t.about.pills[3].title}</h4>
                    <p>${t.about.pills[3].desc}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ══ SECTION 4: WAREHOUSE CAPABILITIES & FORMATS ══ -->
      <section class="build-v-usecases-section" id="build-capabilities">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">${t.capabilities.label}</span>
            <h2 class="build-v-section-title">${t.capabilities.title}</h2>
            <p class="build-v-section-sub">
              ${t.capabilities.subtitle}
            </p>
          </div>

          <div class="build-v-capabilities-grid">
            <!-- Format 1 -->
            <div class="build-cap-tile-card">
              <div class="build-cap-bg-img">
                <img src="/images/build-steel-framing.jpg" alt="${t.capabilities.cards[0].title}" loading="lazy" />
              </div>
              <div class="build-cap-overlay"></div>
              <div class="build-cap-content">
                <div class="build-cap-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
                </div>
                <h3 class="build-cap-title">${t.capabilities.cards[0].title}</h3>
                <p class="build-cap-desc">${t.capabilities.cards[0].desc}</p>
                <div class="build-cap-chips-row">
                  ${t.capabilities.cards[0].chips.map(chip => `<span class="build-cap-tag">${chip}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Format 2 -->
            <div class="build-cap-tile-card">
              <div class="build-cap-bg-img">
                <img src="/images/build-dock-construction.jpg" alt="${t.capabilities.cards[1].title}" loading="lazy" />
              </div>
              <div class="build-cap-overlay"></div>
              <div class="build-cap-content">
                <div class="build-cap-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <h3 class="build-cap-title">${t.capabilities.cards[1].title}</h3>
                <p class="build-cap-desc">${t.capabilities.cards[1].desc}</p>
                <div class="build-cap-chips-row">
                  ${t.capabilities.cards[1].chips.map(chip => `<span class="build-cap-tag">${chip}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Format 3 -->
            <div class="build-cap-tile-card">
              <div class="build-cap-bg-img">
                <img src="/images/warehouse-interior-lux.jpg" alt="${t.capabilities.cards[2].title}" loading="lazy" />
              </div>
              <div class="build-cap-overlay"></div>
              <div class="build-cap-content">
                <div class="build-cap-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <h3 class="build-cap-title">${t.capabilities.cards[2].title}</h3>
                <p class="build-cap-desc">${t.capabilities.cards[2].desc}</p>
                <div class="build-cap-chips-row">
                  ${t.capabilities.cards[2].chips.map(chip => `<span class="build-cap-tag">${chip}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 5: FROM GROUND TO READY WAREHOUSE (VISUAL PROGRESSION GRID) ══ -->
      <section class="build-v-showcase-section" id="build-showcase">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">${t.transformation.label}</span>
            <h2 class="build-v-section-title">${t.transformation.title}</h2>
            <p class="build-v-section-sub">
              ${t.transformation.subtitle}
            </p>
          </div>

          <div class="transformation-cards-grid">
            ${t.transformation.steps
              .map((step, sIdx) => {
                const transformImages = [
                  '/images/build-land-site-prep.jpg',
                  '/images/build-foundation-rcc.jpg',
                  '/images/build-steel-framing.jpg',
                  '/images/build-roofing-cladding.jpg',
                  '/images/build-flooring-laser.jpg',
                  '/images/build-handover-facility.jpg',
                ];
                const isLast = sIdx === t.transformation.steps.length - 1;
                return `
              <div class="transformation-card ${isLast ? 'highlight-card' : ''}">
                <div class="transformation-img-wrap">
                  <img src="${transformImages[sIdx]}" alt="${step.title}" loading="lazy" />
                  <span class="transformation-step-badge ${isLast ? 'highlight' : ''}">${step.stepBadge}</span>
                </div>
                <div class="transformation-card-body">
                  <span class="transformation-tag ${isLast ? 'highlight' : ''}">${step.tag}</span>
                  <h4 class="transformation-title">${step.title}</h4>
                  <p class="transformation-desc">${step.desc}</p>
                </div>
              </div>
            `;
              })
              .join('')}
          </div>
        </div>
      </section>

      <!-- ══ SECTION 7: MATERIAL SOURCING ADVANTAGE ══ -->
      <section class="build-v-sourcing-section" id="build-sourcing">
        <div class="container">
          <!-- Heading Block -->
          <div class="text-center section-heading-block">
            <span class="section-pill-tag sourcing-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              ${t.sourcing.tag}
            </span>
            <h2 class="build-v-section-title text-white">
              ${t.sourcing.titleMain} <span class="text-gold-gradient">${t.sourcing.titleHighlight}</span>
            </h2>
            <p class="build-v-section-sub sourcing-sub">
              ${t.sourcing.subtitle}
            </p>
          </div>

          <!-- Main Sourcing Showcase Split: Left Hero Visual + Right Dealer Network -->
          <div class="sourcing-showcase-split">
            <!-- Left: High-Impact Raw Material / PEB Construction Visual -->
            <div class="sourcing-hero-visual-card">
              <div class="sourcing-hero-img-wrap">
                <img src="/images/build-steel-framing.jpg" alt="Industrial structural steel framing and warehouse material assembly in India" loading="lazy" />
                <div class="sourcing-visual-gradient-overlay"></div>
                <div class="sourcing-badge-float">
                  <div class="sourcing-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                  <div class="sourcing-badge-text">
                    <span class="sbt-title">${t.sourcing.badgeDirect}</span>
                    <span class="sbt-sub">${t.sourcing.badgeDirectSub}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Premium Material Supply Network Grid -->
            <div class="sourcing-network-card">
              <div class="sourcing-network-header">
                <div class="snh-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div>
                  <h3 class="sourcing-network-title">${t.sourcing.networkHeading}</h3>
                  <p class="sourcing-network-sub">${t.sourcing.networkSub}</p>
                </div>
              </div>

              <!-- 6 Dealer Logos Responsive Grid -->
              <div class="sourcing-dealers-grid">
                ${t.sourcing.dealers
                  .map(
                    d => `
                  <div class="dealer-logo-card">
                    <div class="dealer-logo-img-wrap">
                      <img src="${d.logo}" alt="${d.name}" loading="lazy" />
                    </div>
                    <span class="dealer-category-label">${d.category}</span>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>

          <!-- Bottom: 5 Key Material Categories -->
          <div class="sourcing-materials-container">
            <h4 class="sourcing-materials-heading">${t.sourcing.materialsHeading}</h4>
            <div class="sourcing-materials-grid">
              ${t.sourcing.materials
                .map(
                  m => `
                <div class="sourcing-mat-card">
                  <div class="sourcing-mat-img-wrap">
                    <img src="${m.image}" alt="${m.name}" loading="lazy" />
                  </div>
                  <div class="sourcing-mat-content">
                    <h5 class="sourcing-mat-name">${m.name}</h5>
                    <p class="sourcing-mat-desc">${m.desc}</p>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          <!-- Value Progression Flow Banner -->
          <div class="sourcing-flow-banner">
            <div class="sourcing-flow-grid">
              <div class="sourcing-flow-card">
                <div class="sfc-step-num">01</div>
                <div class="sfc-step-body">
                  <span class="sfc-step-title">${t.sourcing.flow.step1}</span>
                </div>
              </div>
              <div class="sourcing-flow-connector">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
              <div class="sourcing-flow-card">
                <div class="sfc-step-num">02</div>
                <div class="sfc-step-body">
                  <span class="sfc-step-title">${t.sourcing.flow.step2}</span>
                </div>
              </div>
              <div class="sourcing-flow-connector">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
              <div class="sourcing-flow-card">
                <div class="sfc-step-num">03</div>
                <div class="sfc-step-body">
                  <span class="sfc-step-title">${t.sourcing.flow.step3}</span>
                </div>
              </div>
              <div class="sourcing-flow-connector">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
              <div class="sourcing-flow-card highlight-card">
                <div class="sfc-step-num">04</div>
                <div class="sfc-step-body">
                  <span class="sfc-step-title">${t.sourcing.flow.step4}</span>
                </div>
              </div>
            </div>
            <div class="sourcing-flow-footer">
              <div class="sourcing-flow-note-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${t.sourcing.flow.footerNote}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 8: WHAT YOU RECEIVE AT HANDOVER ══ -->
      <section class="build-v-handover-section" id="build-handover">
        <div class="container">
          <div class="handover-grid">
            <div class="handover-image-wrap">
              <img src="/images/build-handover-facility.jpg" alt="${t.endResult.title}" />
              <div class="handover-status-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${t.endResult.handoverBadge}</span>
              </div>
            </div>

            <div class="handover-content">
              <span class="section-pill-tag">${t.endResult.label}</span>
              <h2 class="build-v-section-title">${t.endResult.title}</h2>
              <p class="build-v-lead-text">${t.endResult.intro}</p>

              <div class="handover-checklist-grid">
                ${t.endResult.checklist
                  .map(
                    item => `
                  <div class="handover-check-item">
                    <div class="check-icon-circle">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>${item}</span>
                  </div>
                `
                  )
                  .join('')}
              </div>

              <div class="handover-cta-wrap">
                <a href="#build-inquiry" class="btn btn-primary btn-hero-main">
                  <span>${t.endResult.cta}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 8: INTERACTIVE COST ESTIMATOR & CONSULTATION FORM ══ -->
      <section class="build-v-form-section" id="build-inquiry">
        <div class="container">
          <div class="text-center section-heading-block">
            <span class="section-pill-tag">${t.form.label}</span>
            <h2 class="build-v-section-title">${t.form.title}</h2>
            <p class="build-v-section-sub">
              ${t.form.subtitle}
            </p>
          </div>

          <div class="build-form-outer-card">
            
            <!-- Step 1: Visual Purpose Selector -->
            <div class="form-step-block">
              <div class="form-step-block-title">
                <span class="f-num">${t.form.step1Num}</span>
                <span class="f-label">${t.form.step1Title}</span>
              </div>
              <div class="purpose-visual-selector">
                ${t.form.purposes
                  .map(
                    p => `
                  <button type="button" class="purpose-btn ${formState.selectedPurpose === p.val ? 'active' : ''}" data-purpose="${p.val}">
                    ${getPurposeSvg(p.key)}
                    <span>${p.label}</span>
                  </button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Step 2: Project Timeline Selector -->
            <div class="form-step-block">
              <div class="form-step-block-title">
                <span class="f-num">${t.form.step2Num}</span>
                <span class="f-label">${t.form.step2Title}</span>
              </div>
              <div class="timeline-pill-selector">
                ${t.form.timelines
                  .map(
                    tl => `
                  <button type="button" class="timeline-pill ${formState.selectedTimeline === tl.val ? 'active' : ''}" data-timeline="${tl.val}">
                    ${tl.label}
                  </button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Step 3: Instant Construction Cost Estimator -->
            <div class="form-step-block">
              <div class="form-step-block-title">
                <span class="f-num">${t.costEstimator.stepNum}</span>
                <span class="f-label">${t.costEstimator.stepTitle}</span>
              </div>

              <div class="build-estimate-input-group">
                <label class="form-label" for="build-warehouse-area">${t.costEstimator.inputLabel}</label>
                
                <!-- Quick Preset Pills -->
                <div class="estimate-preset-pills">
                  ${quickAreaPresets.map(preset => `
                    <button type="button" class="preset-pill ${String(formState.warehouseArea) === String(preset) ? 'active' : ''}" data-area="${preset}">
                      ${preset.toLocaleString(currentLang === 'hi' ? 'hi-IN' : 'en-IN')} ${t.costEstimator.inputSuffix}
                    </button>
                  `).join('')}
                </div>

                <div class="estimate-input-wrapper">
                  <input
                    type="text"
                    class="form-input estimate-area-input"
                    id="build-warehouse-area"
                    placeholder="${t.costEstimator.inputPlaceholder}"
                    inputmode="numeric"
                    autocomplete="off"
                    aria-label="${t.costEstimator.inputLabel}"
                    value="${formState.warehouseArea || '10000'}"
                  />
                  <span class="estimate-input-suffix">${t.costEstimator.inputSuffix}</span>
                </div>
                <div id="build-estimate-validation" class="estimate-validation-error" style="display: none;" role="alert"></div>
              </div>

              <div id="build-estimate-result" class="build-estimate-result-card">
                <div class="estimate-result-header">
                  <div>
                    <h4 class="estimate-result-title">${t.costEstimator.resultTitle}</h4>
                    <div class="estimate-result-area">
                      <span class="estimate-area-label">${t.costEstimator.resultAreaLabel}:</span>
                      <span class="estimate-area-value" id="estimate-area-display">10,000 sq. ft.</span>
                    </div>
                  </div>
                  <div class="estimate-total-cost">
                    <span class="estimate-cost-label">${t.costEstimator.resultCostLabel}</span>
                    <span class="estimate-cost-value" id="estimate-total-display">₹37.20 – ₹46.80 Lakh</span>
                  </div>
                </div>

                <div class="estimate-breakdown">
                  <h5 class="estimate-breakdown-heading">${t.costEstimator.breakdownTitle}</h5>
                  <div class="estimate-breakdown-list">
                    <div class="estimate-breakdown-item">
                      <span class="ebi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg></span>
                      <span class="ebi-label">${t.costEstimator.steelStructure}</span>
                      <span class="ebi-value" id="estimate-steel">—</span>
                    </div>
                    <div class="estimate-breakdown-item">
                      <span class="ebi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg></span>
                      <span class="ebi-label">${t.costEstimator.roofingSheet}</span>
                      <span class="ebi-value" id="estimate-roofing">—</span>
                    </div>
                    <div class="estimate-breakdown-item">
                      <span class="ebi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/></svg></span>
                      <span class="ebi-label">${t.costEstimator.fabricationErection}</span>
                      <span class="ebi-value" id="estimate-fabrication">—</span>
                    </div>
                    <div class="estimate-breakdown-item">
                      <span class="ebi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M12 2v9"/><path d="M7 5l5-3 5 3"/></svg></span>
                      <span class="ebi-label">${t.costEstimator.civilFooting}</span>
                      <span class="ebi-value" id="estimate-civil">—</span>
                    </div>
                    <div class="estimate-breakdown-item">
                      <span class="ebi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
                      <span class="ebi-label">${t.costEstimator.paintingMiscellaneous}</span>
                      <span class="ebi-value" id="estimate-painting">—</span>
                    </div>
                  </div>
                  <div class="estimate-breakdown-total">
                    <span class="ebt-label">${t.costEstimator.estimatedTotal}</span>
                    <span class="ebt-value" id="estimate-breakdown-total">—</span>
                  </div>
                </div>

                <p class="estimate-disclaimer">${t.costEstimator.disclaimer}</p>
              </div>
            </div>

            <!-- Step 4: Detailed Project Information Form -->
            <form id="build-project-form" novalidate>
              <div class="form-step-block">
                <div class="form-step-block-title">
                  <span class="f-num">${t.form.step3Num}</span>
                  <span class="f-label">${t.form.step3Title}</span>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-name">${t.form.fieldName} <span class="req">*</span></label>
                    <input type="text" class="form-input" id="build-name" placeholder="${t.form.placeholderName}" required />
                    <div class="field-error-msg" id="err-build-name"></div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-company">${t.form.fieldCompany}</label>
                    <input type="text" class="form-input" id="build-company" placeholder="${t.form.placeholderCompany}" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-phone">${t.form.fieldPhone} <span class="req">*</span></label>
                    <input type="tel" class="form-input" id="build-phone" placeholder="${t.form.placeholderPhone}" maxlength="10" inputmode="numeric" required />
                    <div class="field-error-msg" id="err-build-phone"></div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-email">${t.form.fieldEmail}</label>
                    <input type="email" class="form-input" id="build-email" placeholder="${t.form.placeholderEmail}" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-location">${t.form.fieldLocation} <span class="req">*</span></label>
                    <input type="text" class="form-input" id="build-location" placeholder="${t.form.placeholderLocation}" required />
                    <div class="field-error-msg" id="err-build-location"></div>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-land-status">${t.form.fieldLandStatus}</label>
                    <select class="form-input form-select" id="build-land-status">
                      ${t.form.landOptions
                        .map(
                          opt => `
                        <option value="${opt.val}" ${formState.landStatus === opt.val ? 'selected' : ''}>${opt.label}</option>
                      `
                        )
                        .join('')}
                    </select>
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-plot-area">${t.form.fieldPlotArea}</label>
                    <input type="text" class="form-input" id="build-plot-area" placeholder="${t.form.placeholderPlotArea}" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-size">${t.form.fieldSize}</label>
                    <input type="text" class="form-input" id="build-size" placeholder="${t.form.placeholderSize}" />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="build-notes">${t.form.fieldNotes}</label>
                  <textarea class="form-input" id="build-notes" rows="3" placeholder="${t.form.placeholderNotes}"></textarea>
                </div>

                <div id="build-global-error" style="display: none;" class="build-msg-box error-box"></div>
                <div id="build-global-success" style="display: none;" class="build-msg-box success-box"></div>

                <div class="form-submit-row">
                  <button type="submit" class="btn btn-primary btn-submit-full" id="build-submit-btn">
                    <span>${t.form.submitBtn}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>

      <!-- ══ SECTION 9: LUXURY FINAL CTA ══ -->
      <section class="build-v-final-cta-section">
        <div class="container">
          <div class="build-v-final-cta-box">
            <span class="cta-gold-badge">${t.finalCta.miniTag}</span>
            <h2 class="final-cta-title">${t.finalCta.title}</h2>
            <p class="final-cta-subtitle">${t.finalCta.desc}</p>
            <div class="final-cta-actions">
              <a href="#build-inquiry" class="btn btn-primary btn-lg">
                <span>${t.finalCta.ctaPrimary}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                <span>${t.finalCta.ctaWhatsApp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;

  // Restore form inputs after re-render
  restoreFormInputs(container);

  // Initialize all interactive listeners
  initBuildPageInteractions(container, t);
}

function getPurposeSvg(key) {
  switch (key) {
    case 'ecommerce':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
    case 'fmcg':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
    case 'factory':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>`;
    case 'cold':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    case 'retail':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`;
    case 'general':
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`;
  }
}

function initBuildPageInteractions(container, t) {
  // ── Language Switcher Listeners (Dynamic / No Page Reload) ──
  const btnHi = container.querySelector('#lang-btn-hi');
  const btnEn = container.querySelector('#lang-btn-en');

  const switchLanguage = (newLang) => {
    if (newLang === currentLang) return;
    captureCurrentFormInputs(container);
    currentLang = newLang;
    try {
      localStorage.setItem('vardha_build_lang', newLang);
    } catch (e) {}
    updateLanguageUrl(newLang);
    renderBuildWarehouseContent(container);
  };

  btnHi?.addEventListener('click', () => switchLanguage('hi'));
  btnEn?.addEventListener('click', () => switchLanguage('en'));

  // ── Form Elements & Handlers ──
  const form = container.querySelector('#build-project-form');
  const phoneInput = container.querySelector('#build-phone');
  const errorBox = container.querySelector('#build-global-error');
  const successBox = container.querySelector('#build-global-success');
  const submitBtn = container.querySelector('#build-submit-btn');
  const landStatusSelect = container.querySelector('#build-land-status');

  // 1. Phone Input Masking
  if (phoneInput) {
    attachPhoneMask(phoneInput);
  }

  // 2. Land Status Selection in Form
  landStatusSelect?.addEventListener('change', (e) => {
    formState.landStatus = e.target.value;
  });

  // 3. Purpose Selector Buttons
  const purposeBtns = container.querySelectorAll('.purpose-btn');
  purposeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      purposeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      formState.selectedPurpose = btn.getAttribute('data-purpose') || 'General Commercial Warehouse';
    });
  });

  // 4. Timeline Pill Buttons
  const timelinePills = container.querySelectorAll('.timeline-pill');
  timelinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timelinePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      formState.selectedTimeline = pill.getAttribute('data-timeline') || '1–3 Months (Immediate)';
    });
  });

  // 5. Preset Area Buttons & Live Estimator
  const warehouseAreaInput = container.querySelector('#build-warehouse-area');
  const estimateResultCard = container.querySelector('#build-estimate-result');
  const estimateValidation = container.querySelector('#build-estimate-validation');
  const presetPills = container.querySelectorAll('.preset-pill');

  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      presetPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const areaVal = pill.getAttribute('data-area');
      if (areaVal && warehouseAreaInput) {
        warehouseAreaInput.value = areaVal;
        updateEstimateDisplay();
      }
    });
  });

  function updateEstimateDisplay() {
    if (!warehouseAreaInput || !estimateResultCard) return;

    const rawVal = warehouseAreaInput.value;
    formState.warehouseArea = rawVal;

    // Update preset pills active state
    presetPills.forEach(p => {
      if (p.getAttribute('data-area') === String(rawVal).trim()) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Empty input — hide everything
    if (!rawVal || rawVal.trim() === '') {
      estimateResultCard.style.display = 'none';
      if (estimateValidation) estimateValidation.style.display = 'none';
      return;
    }

    const parsedArea = parseAreaInput(rawVal);

    if (parsedArea === null) {
      estimateResultCard.style.display = 'none';
      if (estimateValidation) {
        estimateValidation.textContent = t.costEstimator.validationError;
        estimateValidation.style.display = 'block';
      }
      return;
    }

    // Below minimum area
    if (parsedArea < WAREHOUSE_MIN_AREA) {
      estimateResultCard.style.display = 'none';
      if (estimateValidation) {
        estimateValidation.textContent = t.costEstimator.minimumAreaError;
        estimateValidation.style.display = 'block';
      }
      return;
    }

    // Valid area — calculate and display
    if (estimateValidation) estimateValidation.style.display = 'none';

    const estimate = calculateWarehouseEstimate(parsedArea);
    if (!estimate) {
      estimateResultCard.style.display = 'none';
      return;
    }

    const lbl = t.costEstimator.lakhLabel;
    const crl = t.costEstimator.croreLabel;
    const fmt = (val) => formatLakhCrore(val, lbl, crl);

    // Update area display
    const areaDisplay = container.querySelector('#estimate-area-display');
    if (areaDisplay) areaDisplay.textContent = `${Math.round(parsedArea).toLocaleString(currentLang === 'hi' ? 'hi-IN' : 'en-IN')} ${t.costEstimator.inputSuffix}`;

    // Update total cost
    const totalDisplay = container.querySelector('#estimate-total-display');
    if (totalDisplay) totalDisplay.textContent = `${fmt(estimate.total.low)} – ${fmt(estimate.total.high)}`;

    // Update component breakdown
    const steelEl = container.querySelector('#estimate-steel');
    if (steelEl) steelEl.textContent = `${fmt(estimate.steelStructure.low)} – ${fmt(estimate.steelStructure.high)}`;

    const roofingEl = container.querySelector('#estimate-roofing');
    if (roofingEl) roofingEl.textContent = `${fmt(estimate.roofingSheet.low)} – ${fmt(estimate.roofingSheet.high)}`;

    const fabEl = container.querySelector('#estimate-fabrication');
    if (fabEl) fabEl.textContent = `${fmt(estimate.fabricationErection.low)} – ${fmt(estimate.fabricationErection.high)}`;

    const civilEl = container.querySelector('#estimate-civil');
    if (civilEl) civilEl.textContent = `${fmt(estimate.civilFooting.low)} – ${fmt(estimate.civilFooting.high)}`;

    const paintEl = container.querySelector('#estimate-painting');
    if (paintEl) paintEl.textContent = `${fmt(estimate.paintingMiscellaneous.low)} – ${fmt(estimate.paintingMiscellaneous.high)}`;

    const breakdownTotal = container.querySelector('#estimate-breakdown-total');
    if (breakdownTotal) breakdownTotal.textContent = `${fmt(estimate.total.low)} – ${fmt(estimate.total.high)}`;

    estimateResultCard.style.display = 'block';
  }

  if (warehouseAreaInput) {
    warehouseAreaInput.addEventListener('input', updateEstimateDisplay);
    updateEstimateDisplay();
  }

  // 6. Form Submission (Connected directly to submitBuildWarehouseApi -> warehousebuildrequests)
  let isSubmitting = false;

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (errorBox) errorBox.style.display = 'none';
    if (successBox) successBox.style.display = 'none';

    // Clear individual field errors
    const errName = container.querySelector('#err-build-name');
    const errPhone = container.querySelector('#err-build-phone');
    const errLoc = container.querySelector('#err-build-location');
    [errName, errPhone, errLoc].forEach(el => {
      if (el) el.textContent = '';
    });

    const name = container.querySelector('#build-name')?.value.trim();
    const company = container.querySelector('#build-company')?.value.trim();
    const phone = container.querySelector('#build-phone')?.value.trim();
    const email = container.querySelector('#build-email')?.value.trim();
    const location = container.querySelector('#build-location')?.value.trim();
    const landStatus = landStatusSelect?.value || 'Yes, I have land';
    const plotArea = container.querySelector('#build-plot-area')?.value.trim();
    const size = container.querySelector('#build-size')?.value.trim();
    const notes = container.querySelector('#build-notes')?.value.trim();

    let hasError = false;

    // Validation
    if (!name || name.length < 2) {
      if (errName) errName.textContent = t.form.validation.nameRequired;
      hasError = true;
    }

    const cleanPhone = String(phone || '').replace(/\D/g, '').slice(-10);
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      if (errPhone) errPhone.textContent = t.form.validation.phoneRequired;
      hasError = true;
    }

    if (!location) {
      if (errLoc) errLoc.textContent = t.form.validation.locationRequired;
      hasError = true;
    }

    if (hasError) {
      showError(t.form.validation.nameRequired || 'Please fill in all required fields.');
      return;
    }

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>${t.form.submittingText}</span>`;
    }

    try {
      // Calculate construction estimate for submission
      const warehouseAreaInput = container.querySelector('#build-warehouse-area');
      const parsedArea = warehouseAreaInput ? parseAreaInput(warehouseAreaInput.value) : null;
      const estimate = parsedArea ? calculateWarehouseEstimate(parsedArea) : null;

      let estimateNoteParts = [];
      if (estimate) {
        const lbl = t.costEstimator.lakhLabel;
        const crl = t.costEstimator.croreLabel;
        estimateNoteParts.push(
          `[Est. Cost]: ${formatLakhCrore(estimate.total.low, lbl, crl)} – ${formatLakhCrore(estimate.total.high, lbl, crl)}`,
          `[Steel]: ${formatLakhCrore(estimate.steelStructure.low, lbl, crl)}–${formatLakhCrore(estimate.steelStructure.high, lbl, crl)}`,
          `[Roofing]: ${formatLakhCrore(estimate.roofingSheet.low, lbl, crl)}–${formatLakhCrore(estimate.roofingSheet.high, lbl, crl)}`,
          `[Fabrication]: ${formatLakhCrore(estimate.fabricationErection.low, lbl, crl)}–${formatLakhCrore(estimate.fabricationErection.high, lbl, crl)}`,
          `[Civil]: ${formatLakhCrore(estimate.civilFooting.low, lbl, crl)}–${formatLakhCrore(estimate.civilFooting.high, lbl, crl)}`,
          `[Painting/Misc]: ${formatLakhCrore(estimate.paintingMiscellaneous.low, lbl, crl)}–${formatLakhCrore(estimate.paintingMiscellaneous.high, lbl, crl)}`
        );
      }

      const combinedNotes = [
        `[Sector/Purpose]: ${formState.selectedPurpose}`,
        `[Timeline]: ${formState.selectedTimeline}`,
        ...estimateNoteParts,
        notes ? `[Notes]: ${notes}` : '',
      ]
        .filter(Boolean)
        .join(' | ');

      const payload = {
        fullName: name,
        companyName: company || undefined,
        phone: cleanPhone,
        email: email || undefined,
        preferredLocation: location || undefined,
        landAvailability: landStatus || undefined,
        plotArea: plotArea || undefined,
        requiredSpace: size || undefined,
        intendedUsage: formState.selectedPurpose,
        projectNotes: combinedNotes,
        estimatedConstructionLow: estimate ? Math.round(estimate.total.low) : undefined,
        estimatedConstructionHigh: estimate ? Math.round(estimate.total.high) : undefined,
      };

      const result = await submitBuildWarehouseApi(payload);

      if (result.success) {
        form.reset();
        // Reset state
        formState.fullName = '';
        formState.companyName = '';
        formState.phone = '';
        formState.email = '';
        formState.location = '';
        formState.plotArea = '';
        formState.size = '';
        formState.notes = '';

        if (successBox) {
          successBox.style.display = 'block';
          successBox.innerHTML = t.form.successMessage(name, cleanPhone);
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        showError(result.message || t.form.validation.genericError);
      }
    } catch (err) {
      showError(t.form.validation.genericError);
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>${t.form.submitBtn}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
      }
    }
  });

  function showError(msg) {
    if (errorBox) {
      errorBox.style.display = 'block';
      errorBox.textContent = msg;
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
