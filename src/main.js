/* ============================================
   VARDHA WAREHOUSING — MAIN APPLICATION
   ============================================
   Orchestrates all components and initializes
   the complete website experience.
   ============================================ */

import './styles/index.css';

// Components
import { renderHeader } from './components/Header.js';
import { renderHeroSection } from './components/HeroSection.js';
import { renderQuickIntroduction } from './components/QuickIntroduction.js';
import { renderPropertyInformation } from './components/PropertyInformation.js';
import { renderWarehouseFacilities } from './components/WarehouseFacilities.js';
import { renderWarehouseGallery } from './components/WarehouseGallery.js';
import { renderSpaceCalculator } from './components/SpaceCalculator.js';
import { renderHowItWorks } from './components/HowItWorks.js';
import { renderInquiryWizard } from './components/InquiryWizard.js';
import { renderSuccessScreen } from './components/SuccessScreen.js';
import { renderDemoPayment } from './components/DemoPayment.js';
import { renderIndustriesSection } from './components/IndustriesSection.js';
import { renderExperienceSection } from './components/ExperienceSection.js';
import { renderWarehouseSetupSection } from './components/WarehouseSetupSection.js';
import { renderClienteleSection } from './components/ClienteleSection.js';
import { renderInquirySection } from './components/InquirySection.js';
import { renderWhatsAppButton } from './components/WhatsAppButton.js';
import { renderFooter } from './components/Footer.js';

// Utilities
import { initScrollReveal, initActiveNav } from './utils/scroll.js';

/**
 * Initialize the entire application.
 */
function init() {
  // ── Render all page components ──
  renderHeader(document.getElementById('site-header'));
  renderHeroSection(document.getElementById('home'));
  renderQuickIntroduction(document.getElementById('introduction'));
  renderPropertyInformation(document.getElementById('warehouse'));
  renderWarehouseFacilities(document.getElementById('facilities'));
  renderWarehouseGallery(document.getElementById('gallery'));
  renderSpaceCalculator(document.getElementById('calculator'));
  renderHowItWorks(document.getElementById('how-it-works'));
  renderIndustriesSection(document.getElementById('industries'));
  renderExperienceSection(document.getElementById('expertise'));
  renderWarehouseSetupSection(document.getElementById('warehouse-setup'));
  renderClienteleSection(document.getElementById('clients'));
  renderInquirySection(document.getElementById('contact'));
  renderFooter(document.getElementById('site-footer'));

  // ── Floating elements ──
  renderWhatsAppButton(document.getElementById('whatsapp-button'));

  // ── Modal containers (event-driven) ──
  renderInquiryWizard(document.getElementById('inquiry-wizard-modal'));
  renderSuccessScreen(document.getElementById('success-screen-modal'));
  renderDemoPayment(document.getElementById('demo-payment-modal'));

  // ── Initialize scroll animations ──
  // Small delay to ensure DOM is fully painted
  requestAnimationFrame(() => {
    initScrollReveal();
    initActiveNav();
  });

  // ── Global real-time input masks & error clearing ──
  document.addEventListener('input', (e) => {
    // Clear error styling on change
    if (e.target.classList.contains('error')) {
      e.target.classList.remove('error');
      const errorEl = e.target.parentElement?.querySelector('.form-error');
      if (errorEl) errorEl.remove();
    }

    // Enforce 10 digits only on any phone/tel field
    if (e.target.type === 'tel' || e.target.id?.includes('phone')) {
      const clean = e.target.value.replace(/\D/g, '').slice(0, 10);
      if (e.target.value !== clean) {
        e.target.value = clean;
      }
    }
  });

  // Block non-digit keys on phone inputs
  document.addEventListener('keypress', (e) => {
    if (e.target.type === 'tel' || e.target.id?.includes('phone')) {
      if (!/[0-9]/.test(e.key) && e.key !== 'Enter') {
        e.preventDefault();
      }
    }
  });

  console.log('%c✓ Vardha Warehousing loaded', 'color: #C8965A; font-weight: bold; font-size: 14px;');
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
