/* ============================================
   BUILD A WAREHOUSE PAGE — DEDICATED SERVICE WEBSITE
   ============================================
   Route: /build-a-warehouse
   Stand-alone, visual-first warehouse planning and construction experience.
   Principle: SEE → UNDERSTAND → EXPLORE → PLAN → DISCUSS
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
  warehouseArea: '',
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
      url.searchParams.delete('lang'); // clean URL for default 'en'
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
        whatsapp.constructionMessage ||
          'Hi Vardha Team, I want to discuss a custom warehouse construction project in Gorakhpur/UP.'
      )}`
    : '#build-inquiry';

  container.innerHTML = `
    <div class="build-page-visual">
      
      <!-- ══ GOOGLE FORMS STYLE LANGUAGE SWITCHER ══ -->
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

      <!-- ══ SECTION 1: HIGH-IMPACT VISUAL HERO ══ -->
      <section class="build-v-hero" id="build-hero">
        <div class="build-v-hero-bg">
          <img 
            src="/images/service-build-warehouse.jpg" 
            alt="Modern Indian industrial warehouse construction and steel shed in Uttar Pradesh" 
            loading="eager" 
          />
        </div>
        <div class="build-v-hero-overlay"></div>

        <div class="container build-v-hero-container">
          <div class="build-v-hero-grid">
            <div class="build-v-hero-text">
              <div class="build-v-hero-badge">
                <span class="badge-pulse"></span>
                <span>${t.hero.badge}</span>
              </div>
              <h1 class="build-v-hero-title">
                ${t.hero.titleMain}<br />
                <span class="highlight">${t.hero.titleHighlight}</span>
              </h1>
              <p class="build-v-hero-subtitle">
                ${t.hero.subtitle}
              </p>
              <div class="build-v-hero-actions">
                <a href="#build-inquiry" class="btn-primary" id="build-hero-cta">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
                  <span>${t.hero.ctaPrimary}</span>
                </a>
                <a href="#build-pipeline" class="btn-secondary-ghost">
                  <span>${t.hero.ctaSecondary}</span>
                </a>
              </div>

              <div class="build-v-hero-metrics">
                <div class="hero-metric-item">
                  <span class="hero-metric-value">${t.hero.metric1Val}</span>
                  <span class="hero-metric-label">${t.hero.metric1Label}</span>
                </div>
                <div class="hero-metric-item">
                  <span class="hero-metric-value">${t.hero.metric2Val}</span>
                  <span class="hero-metric-label">${t.hero.metric2Label}</span>
                </div>
                <div class="hero-metric-item">
                  <span class="hero-metric-value">${t.hero.metric3Val}</span>
                  <span class="hero-metric-label">${t.hero.metric3Label}</span>
                </div>
              </div>
            </div>

            <div class="build-v-hero-visual-card">
              <div class="hero-visual-img-wrap">
                <img src="/images/warehouse-hero.jpg" alt="Completed modern Indian commercial warehouse park" />
                <div class="hero-floating-badge">
                  <div class="hfb-text">
                    <h4>${t.hero.floatingBadgeTitle}</h4>
                    <p>${t.hero.floatingBadgeSub}</p>
                  </div>
                  <div class="hfb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 2: QUICK VISUAL PIPELINE ══ -->
      <section class="build-v-pipeline-section" id="build-pipeline">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label" style="color: #E2B178;">${t.pipeline.label}</span>
            <h2 class="section-title" style="color: #FFFFFF;">${t.pipeline.title}</h2>
            <p class="section-subtitle centered" style="color: #94A3B8;">
              ${t.pipeline.subtitle}
            </p>
          </div>

          <div class="pipeline-diagram">
            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span class="pipeline-node-step">${t.pipeline.stages[0].step}</span>
              <h4 class="pipeline-node-title">${t.pipeline.stages[0].title}</h4>
              <p class="pipeline-node-desc">${t.pipeline.stages[0].desc}</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <span class="pipeline-node-step">${t.pipeline.stages[1].step}</span>
              <h4 class="pipeline-node-title">${t.pipeline.stages[1].title}</h4>
              <p class="pipeline-node-desc">${t.pipeline.stages[1].desc}</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <span class="pipeline-node-step">${t.pipeline.stages[2].step}</span>
              <h4 class="pipeline-node-title">${t.pipeline.stages[2].title}</h4>
              <p class="pipeline-node-desc">${t.pipeline.stages[2].desc}</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
              </div>
              <span class="pipeline-node-step">${t.pipeline.stages[3].step}</span>
              <h4 class="pipeline-node-title">${t.pipeline.stages[3].title}</h4>
              <p class="pipeline-node-desc">${t.pipeline.stages[3].desc}</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <span class="pipeline-node-step">${t.pipeline.stages[4].step}</span>
              <h4 class="pipeline-node-title">${t.pipeline.stages[4].title}</h4>
              <p class="pipeline-node-desc">${t.pipeline.stages[4].desc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 3: ASYMMETRIC ABOUT SECTION ══ -->
      <section class="build-v-about-section" id="build-about">
        <div class="container">
          <div class="build-v-about-grid">
            <div class="build-v-about-visual">
              <div class="about-visual-main">
                <img src="/images/warehouse-exterior.jpg" alt="Modern Indian warehouse campus infrastructure in Uttar Pradesh" />
              </div>
              <div class="about-tag-chip top-left">
                <span class="about-tag-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                <span>${t.about.tagPeb}</span>
              </div>
              <div class="about-tag-chip bottom-right">
                <span class="about-tag-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>${t.about.tagHub} <span class="chip-val">${t.about.tagHighway}</span></span>
              </div>
            </div>

            <div class="build-v-about-content">
              <span class="section-label">${t.about.label}</span>
              <h2>${t.about.title}</h2>
              <p class="lead">
                ${t.about.lead}
              </p>

              <div class="about-pill-grid">
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>${t.about.pills[0].title}</h5>
                    <p>${t.about.pills[0].desc}</p>
                  </div>
                </div>
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>${t.about.pills[1].title}</h5>
                    <p>${t.about.pills[1].desc}</p>
                  </div>
                </div>
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>${t.about.pills[2].title}</h5>
                    <p>${t.about.pills[2].desc}</p>
                  </div>
                </div>
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>${t.about.pills[3].title}</h5>
                    <p>${t.about.pills[3].desc}</p>
                  </div>
                </div>
              </div>

              <a href="#build-inquiry" class="btn btn-primary">
                ${t.about.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 4: BLUEPRINT VISUAL STORYTELLING ══ -->
      <section class="build-v-blueprint-section" id="build-blueprint">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label" style="color: #E2B178;">${t.blueprint.label}</span>
            <h2 class="section-title" style="color: #FFFFFF;">${t.blueprint.title}</h2>
            <p class="section-subtitle centered" style="color: #94A3B8;">
              ${t.blueprint.subtitle}
            </p>
          </div>

          <div class="blueprint-showcase-grid">
            <div class="blueprint-card">
              <span class="blueprint-card-corner">${t.blueprint.cards[0].corner}</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
              </div>
              <h3>${t.blueprint.cards[0].title}</h3>
              <p>${t.blueprint.cards[0].desc}</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">${t.blueprint.cards[1].corner}</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
              </div>
              <h3>${t.blueprint.cards[1].title}</h3>
              <p>${t.blueprint.cards[1].desc}</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">${t.blueprint.cards[2].corner}</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
              </div>
              <h3>${t.blueprint.cards[2].title}</h3>
              <p>${t.blueprint.cards[2].desc}</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">${t.blueprint.cards[3].corner}</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3>${t.blueprint.cards[3].title}</h3>
              <p>${t.blueprint.cards[3].desc}</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">${t.blueprint.cards[4].corner}</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3>${t.blueprint.cards[4].title}</h3>
              <p>${t.blueprint.cards[4].desc}</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">${t.blueprint.cards[5].corner}</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3>${t.blueprint.cards[5].title}</h3>
              <p>${t.blueprint.cards[5].desc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 5: CAPABILITIES SHOWCASE ══ -->
      <section class="build-v-capabilities-section" id="build-capabilities">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">${t.capabilities.label}</span>
            <h2 class="section-title">${t.capabilities.title}</h2>
            <p class="section-subtitle centered">
              ${t.capabilities.subtitle}
            </p>
          </div>

          <div class="capabilities-visual-grid">
            <div class="cap-visual-card">
              <div class="cap-card-img-wrap">
                <img src="/images/service-build-warehouse.jpg" alt="Pre-Engineered Industrial Warehouse Shed" />
                <span class="cap-card-badge">${t.capabilities.cards[0].badge}</span>
              </div>
              <div class="cap-card-body">
                <h3>${t.capabilities.cards[0].title}</h3>
                <p>${t.capabilities.cards[0].desc}</p>
                <div class="cap-card-highlights">
                  ${t.capabilities.cards[0].chips.map(chip => `<span class="cap-chip">${chip}</span>`).join('')}
                </div>
              </div>
            </div>

            <div class="cap-visual-card">
              <div class="cap-card-img-wrap">
                <img src="/images/warehouse-indian-dock.jpg" alt="Logistics & Distribution Hub with Truck Bays" />
                <span class="cap-card-badge">${t.capabilities.cards[1].badge}</span>
              </div>
              <div class="cap-card-body">
                <h3>${t.capabilities.cards[1].title}</h3>
                <p>${t.capabilities.cards[1].desc}</p>
                <div class="cap-card-highlights">
                  ${t.capabilities.cards[1].chips.map(chip => `<span class="cap-chip">${chip}</span>`).join('')}
                </div>
              </div>
            </div>

            <div class="cap-visual-card">
              <div class="cap-card-img-wrap">
                <img src="/images/warehouse-interior-lux.jpg" alt="Manufacturing & Raw Material Storage Facility" />
                <span class="cap-card-badge">${t.capabilities.cards[2].badge}</span>
              </div>
              <div class="cap-card-body">
                <h3>${t.capabilities.cards[2].title}</h3>
                <p>${t.capabilities.cards[2].desc}</p>
                <div class="cap-card-highlights">
                  ${t.capabilities.cards[2].chips.map(chip => `<span class="cap-chip">${chip}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 6: LAND DECISION MATRIX ══ -->
      <section class="build-v-land-section" id="build-land">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">${t.landMatrix.label}</span>
            <h2 class="section-title">${t.landMatrix.title}</h2>
            <p class="section-subtitle centered">
              ${t.landMatrix.subtitle}
            </p>
          </div>

          <div class="land-decision-grid">
            <div class="land-decision-card ${formState.landStatus === 'Yes, I have land' ? 'selected' : ''}" data-land-val="Yes, I have land" id="land-card-a">
              <span class="land-card-tag">${t.landMatrix.cardA.tag}</span>
              <h3>${t.landMatrix.cardA.title}</h3>
              <p class="land-summary">
                ${t.landMatrix.cardA.summary}
              </p>
              <div class="land-flow-timeline">
                ${t.landMatrix.cardA.steps.map(step => `<div class="land-flow-step"><span class="lfs-dot"></span> ${step}</div>`).join('')}
              </div>
              <div class="land-card-action">
                <span>${formState.landStatus === 'Yes, I have land' ? t.landMatrix.cardA.selectedAction : t.landMatrix.cardA.selectAction}</span>
              </div>
            </div>

            <div class="land-decision-card ${formState.landStatus === 'No, I need land + build' ? 'selected' : ''}" data-land-val="No, I need land + build" id="land-card-b">
              <span class="land-card-tag">${t.landMatrix.cardB.tag}</span>
              <h3>${t.landMatrix.cardB.title}</h3>
              <p class="land-summary">
                ${t.landMatrix.cardB.summary}
              </p>
              <div class="land-flow-timeline">
                ${t.landMatrix.cardB.steps.map(step => `<div class="land-flow-step"><span class="lfs-dot"></span> ${step}</div>`).join('')}
              </div>
              <div class="land-card-action">
                <span>${formState.landStatus === 'No, I need land + build' ? t.landMatrix.cardB.selectedAction : t.landMatrix.cardB.selectAction}</span>
              </div>
            </div>

            <div class="land-decision-card ${formState.landStatus === 'Just exploring' ? 'selected' : ''}" data-land-val="Just exploring" id="land-card-c">
              <span class="land-card-tag">${t.landMatrix.cardC.tag}</span>
              <h3>${t.landMatrix.cardC.title}</h3>
              <p class="land-summary">
                ${t.landMatrix.cardC.summary}
              </p>
              <div class="land-flow-timeline">
                ${t.landMatrix.cardC.steps.map(step => `<div class="land-flow-step"><span class="lfs-dot"></span> ${step}</div>`).join('')}
              </div>
              <div class="land-card-action">
                <span>${formState.landStatus === 'Just exploring' ? t.landMatrix.cardC.selectedAction : t.landMatrix.cardC.selectAction}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 7: PLANNING & DESIGN PROGRESSION ══ -->
      <section class="build-v-design-section" id="build-design">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label" style="color: #E2B178;">${t.planning.label}</span>
            <h2 class="section-title" style="color: #FFFFFF;">${t.planning.title}</h2>
            <p class="section-subtitle centered" style="color: #94A3B8;">
              ${t.planning.subtitle}
            </p>
          </div>

          <div class="design-progression-grid">
            ${t.planning.steps
              .map(
                step => `
              <div class="design-step-card">
                <div class="design-step-num">${step.num}</div>
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- ══ SECTION 8: 5-STAGE CONSTRUCTION JOURNEY ══ -->
      <section class="build-v-construction-section" id="build-construction">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">${t.construction.label}</span>
            <h2 class="section-title">${t.construction.title}</h2>
            <p class="section-subtitle centered">
              ${t.construction.subtitle}
            </p>
          </div>

          <div class="construction-journey-list">
            ${t.construction.phases
              .map(
                phase => `
              <div class="journey-row-item">
                <div class="j-phase-badge">${phase.badge}</div>
                <div class="j-phase-content">
                  <h3>${phase.title}</h3>
                  <p>${phase.desc}</p>
                </div>
                <div class="j-phase-deliverable">${phase.deliverable}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- ══ SECTION 9: THE END RESULT ══ -->
      <section class="build-v-endresult-section" id="build-endresult">
        <div class="container">
          <div class="endresult-showcase-box">
            <div class="endresult-img-side">
              <img src="/images/warehouse-hero.jpg" alt="Delivered operational Indian commercial warehouse" />
            </div>
            <div class="endresult-info-side">
              <span class="section-label" style="color: #C8965A; font-weight: bold; font-size: 0.8125rem; text-transform: uppercase;">${t.endResult.label}</span>
              <h3>${t.endResult.title}</h3>
              <p class="intro">
                ${t.endResult.intro}
              </p>

              <div class="endresult-checklist">
                ${t.endResult.checklist
                  .map(
                    item => `
                  <div class="endresult-check-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${item}</span>
                  </div>
                `
                  )
                  .join('')}
              </div>

              <a href="#build-inquiry" class="btn btn-primary" style="align-self: flex-start;">
                ${t.endResult.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 10: INTERACTIVE REQUIREMENT DISCOVERY & CONSULTATION FORM ══ -->
      <section class="build-v-form-section" id="build-inquiry">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">${t.form.label}</span>
            <h2 class="section-title">${t.form.title}</h2>
            <p class="section-subtitle centered">
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

            <!-- Step 3: Instant Construction Estimate -->
            <div class="form-step-block">
              <div class="form-step-block-title">
                <span class="f-num">${t.costEstimator.stepNum}</span>
                <span class="f-label">${t.costEstimator.stepTitle}</span>
              </div>

              <div class="build-estimate-input-group">
                <label class="form-label" for="build-warehouse-area">${t.costEstimator.inputLabel}</label>
                <div class="estimate-input-wrapper">
                  <input
                    type="text"
                    class="form-input estimate-area-input"
                    id="build-warehouse-area"
                    placeholder="${t.costEstimator.inputPlaceholder}"
                    inputmode="numeric"
                    autocomplete="off"
                    aria-label="${t.costEstimator.inputLabel}"
                    value="${formState.warehouseArea || ''}"
                  />
                  <span class="estimate-input-suffix">${t.costEstimator.inputSuffix}</span>
                </div>
                <div id="build-estimate-validation" class="estimate-validation-error" style="display: none;" role="alert"></div>
              </div>

              <div id="build-estimate-result" class="build-estimate-result-card" style="display: none;">
                <div class="estimate-result-header">
                  <h4 class="estimate-result-title">${t.costEstimator.resultTitle}</h4>
                  <div class="estimate-result-area">
                    <span class="estimate-area-label">${t.costEstimator.resultAreaLabel}:</span>
                    <span class="estimate-area-value" id="estimate-area-display">—</span>
                  </div>
                  <div class="estimate-total-cost">
                    <span class="estimate-cost-label">${t.costEstimator.resultCostLabel}</span>
                    <span class="estimate-cost-value" id="estimate-total-display">—</span>
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

            <!-- Step 4: Detailed Information Form -->
            <form id="build-project-form" novalidate>
              <div class="form-step-block">
                <div class="form-step-block-title">
                  <span class="f-num">${t.form.step3Num}</span>
                  <span class="f-label">${t.form.step3Title}</span>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-name">${t.form.fieldName}</label>
                    <input type="text" class="form-input" id="build-name" placeholder="${t.form.placeholderName}" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-company">${t.form.fieldCompany}</label>
                    <input type="text" class="form-input" id="build-company" placeholder="${t.form.placeholderCompany}" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-phone">${t.form.fieldPhone}</label>
                    <input type="tel" class="form-input" id="build-phone" placeholder="${t.form.placeholderPhone}" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-email">${t.form.fieldEmail}</label>
                    <input type="email" class="form-input" id="build-email" placeholder="${t.form.placeholderEmail}" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-location">${t.form.fieldLocation}</label>
                    <input type="text" class="form-input" id="build-location" placeholder="${t.form.placeholderLocation}" />
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

                <div id="build-global-error" style="display: none; color: #EF4444; font-size: 0.875rem; margin-bottom: var(--space-4); background: rgba(239, 68, 68, 0.1); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25);"></div>
                <div id="build-global-success" style="display: none; color: #10B981; font-size: 0.9375rem; margin-bottom: var(--space-4); background: rgba(16, 185, 129, 0.1); padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.25);"></div>

                <div class="form-submit-row">
                  <button type="submit" class="btn btn-primary btn-full" id="build-submit-btn" style="padding: 16px; font-size: 1rem;">
                    <span>${t.form.submitBtn}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 11: STRONG FINAL CTA ══ -->
      <section class="build-v-final-cta">
        <div class="container">
          <div class="final-cta-dark-box">
            <span class="cta-mini-tag" style="display: inline-block; background: rgba(200, 150, 90, 0.15); color: #E2B178; padding: 4px 12px; border-radius: 9999px; font-size: 0.75rem; font-weight: bold; margin-bottom: 12px; letter-spacing: 0.05em;">${t.finalCta.miniTag}</span>
            <h2>${t.finalCta.title}</h2>
            <p>${t.finalCta.desc}</p>
            <div class="cta-buttons-row">
              <a href="#build-inquiry" class="btn btn-primary" style="padding: 14px 28px;">
                ${t.finalCta.ctaPrimary}
              </a>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn-whatsapp-direct">
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
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`;
    case 'fmcg':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
    case 'factory':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>`;
    case 'cold':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    case 'retail':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`;
    case 'general':
    default:
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
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

  // 2. Land Decision Cards Click -> Auto-select in form
  const landCards = container.querySelectorAll('.land-decision-card');
  landCards.forEach(card => {
    card.addEventListener('click', () => {
      landCards.forEach(c => {
        c.classList.remove('selected');
        const actionSpan = c.querySelector('.land-card-action span');
        const cVal = c.getAttribute('data-land-val');
        if (actionSpan) {
          if (cVal === 'Yes, I have land') actionSpan.textContent = t.landMatrix.cardA.selectAction;
          else if (cVal === 'No, I need land + build') actionSpan.textContent = t.landMatrix.cardB.selectAction;
          else if (cVal === 'Just exploring') actionSpan.textContent = t.landMatrix.cardC.selectAction;
        }
      });

      card.classList.add('selected');
      const landVal = card.getAttribute('data-land-val');
      if (landVal) {
        formState.landStatus = landVal;
        if (landStatusSelect) landStatusSelect.value = landVal;
        const selectedSpan = card.querySelector('.land-card-action span');
        if (selectedSpan) {
          if (landVal === 'Yes, I have land') selectedSpan.textContent = t.landMatrix.cardA.selectedAction;
          else if (landVal === 'No, I need land + build') selectedSpan.textContent = t.landMatrix.cardB.selectedAction;
          else if (landVal === 'Just exploring') selectedSpan.textContent = t.landMatrix.cardC.selectedAction;
        }
      }

      // Smooth scroll to form
      const formEl = container.querySelector('#build-inquiry');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Sync select dropdown change back to cards
  landStatusSelect?.addEventListener('change', (e) => {
    const val = e.target.value;
    formState.landStatus = val;
    landCards.forEach(card => {
      const cVal = card.getAttribute('data-land-val');
      const actionSpan = card.querySelector('.land-card-action span');
      if (cVal === val) {
        card.classList.add('selected');
        if (actionSpan) {
          if (val === 'Yes, I have land') actionSpan.textContent = t.landMatrix.cardA.selectedAction;
          else if (val === 'No, I need land + build') actionSpan.textContent = t.landMatrix.cardB.selectedAction;
          else if (val === 'Just exploring') actionSpan.textContent = t.landMatrix.cardC.selectedAction;
        }
      } else {
        card.classList.remove('selected');
        if (actionSpan) {
          if (cVal === 'Yes, I have land') actionSpan.textContent = t.landMatrix.cardA.selectAction;
          else if (cVal === 'No, I need land + build') actionSpan.textContent = t.landMatrix.cardB.selectAction;
          else if (cVal === 'Just exploring') actionSpan.textContent = t.landMatrix.cardC.selectAction;
        }
      }
    });
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

  // 5. Live Construction Cost Estimator
  const warehouseAreaInput = container.querySelector('#build-warehouse-area');
  const estimateResultCard = container.querySelector('#build-estimate-result');
  const estimateValidation = container.querySelector('#build-estimate-validation');

  function updateEstimateDisplay() {
    if (!warehouseAreaInput || !estimateResultCard) return;

    const rawVal = warehouseAreaInput.value;
    formState.warehouseArea = rawVal;

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
    if (areaDisplay) areaDisplay.textContent = `${Math.round(parsedArea).toLocaleString('en-IN')} ${t.costEstimator.inputSuffix}`;

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
    // If area was restored from formState, trigger calculation
    if (formState.warehouseArea) {
      updateEstimateDisplay();
    }
  }

  // 6. Form Submission (with duplicate submission guard)
  let isSubmitting = false;

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (errorBox) errorBox.style.display = 'none';
    if (successBox) successBox.style.display = 'none';

    const name = container.querySelector('#build-name')?.value.trim();
    const company = container.querySelector('#build-company')?.value.trim();
    const phone = container.querySelector('#build-phone')?.value.trim();
    const email = container.querySelector('#build-email')?.value.trim();
    const location = container.querySelector('#build-location')?.value.trim();
    const landStatus = landStatusSelect?.value || 'Yes, I have land';
    const plotArea = container.querySelector('#build-plot-area')?.value.trim();
    const size = container.querySelector('#build-size')?.value.trim();
    const notes = container.querySelector('#build-notes')?.value.trim();

    // Validation
    if (!name || name.length < 2) {
      showError(t.form.validation.nameRequired);
      return;
    }

    const cleanPhone = String(phone || '').replace(/\D/g, '').slice(-10);
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      showError(t.form.validation.phoneRequired);
      return;
    }

    if (!location) {
      showError(t.form.validation.locationRequired);
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
        formState.warehouseArea = '';
        // Reset estimate display
        const estimateResult = container.querySelector('#build-estimate-result');
        if (estimateResult) estimateResult.style.display = 'none';
        const areaInput = container.querySelector('#build-warehouse-area');
        if (areaInput) areaInput.value = '';

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
