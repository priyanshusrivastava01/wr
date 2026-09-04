/* ============================================
   VARDHA WAREHOUSING — MAIN APPLICATION ENTRY
   ============================================
   Initializes router, global header, footer,
   floating elements and multi-page routing.
   ============================================ */

import './styles/index.css';

// Layout Components
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderWhatsAppButton } from './components/WhatsAppButton.js';

// Dedicated Page Renderers
import { renderHomePage } from './pages/HomePage.js';
import { renderWarehouseRentingPage } from './pages/WarehouseRentingPage.js';
import { renderBuildWarehousePage } from './pages/BuildWarehousePage.js';

// Router & Utilities
import { initRouter } from './utils/router.js';
import { warmupBackendReadiness } from './utils/api.js';

/**
 * Initialize the application and mount router.
 */
function init() {
  const headerContainer = document.getElementById('site-header');
  const footerContainer = document.getElementById('site-footer');
  const whatsappContainer = document.getElementById('whatsapp-button');
  const appRoot = document.getElementById('app-root');

  // 1. Render persistent layout elements
  if (headerContainer) renderHeader(headerContainer);
  if (footerContainer) renderFooter(footerContainer);
  if (whatsappContainer) renderWhatsAppButton(whatsappContainer);

  // 2. Define page routes
  const routes = {
    '/': (path) => {
      if (appRoot) renderHomePage(appRoot);
    },
    '/warehouse-renting': (path) => {
      if (appRoot) renderWarehouseRentingPage(appRoot);
    },
    '/build-a-warehouse': (path) => {
      if (appRoot) renderBuildWarehousePage(appRoot);
    },
  };

  // 3. Start client-side router
  initRouter(routes);

  // 4. Global real-time input masks & error clearing
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

  // 5. Non-blocking backend readiness warmup (for seamless instant form submissions)
  warmupBackendReadiness();

  console.log('%c✓ Vardha Warehousing — 3-Level Architecture Ready', 'color: #C8965A; font-weight: bold; font-size: 14px;');
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
