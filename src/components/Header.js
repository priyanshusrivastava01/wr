/* ============================================
   HEADER COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';
import { scrollToSection } from '../utils/scroll.js';

export function renderHeader(container) {
  const { brand, navigation } = CONFIG;

  container.innerHTML = `
    <div class="site-header" id="main-header">
      <div class="header-inner">
        <a href="#home" class="header-brand" aria-label="${brand.name} — Home">
          <div class="header-brand-badge">
            <span>V</span>
          </div>
          <div class="header-brand-details">
            <span class="header-brand-title">Vardha</span>
            <span class="header-brand-sub">WAREHOUSING</span>
          </div>
        </a>

        <nav class="header-nav" aria-label="Main navigation">
          ${navigation.map(item => `
            <a href="${item.href}" class="nav-link">${item.label}</a>
          `).join('')}
        </nav>

        <div class="header-actions">
          <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener" class="header-whatsapp-circle" aria-label="Contact on WhatsApp" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          <button class="btn-navbar-cta" id="header-find-space" aria-label="Find your warehouse space">
            Find Your Space
          </button>

          <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Professional Right-Side Sliding Drawer Navigation -->
      <div class="mobile-drawer-wrapper" id="mobile-drawer-wrapper" aria-hidden="true">
        <!-- Soft Backdrop Overlay (Click to close) -->
        <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>

        <!-- Drawer Content -->
        <nav class="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation">
          <div class="mobile-drawer-header">
            <a href="#home" class="header-brand mobile-drawer-brand" aria-label="${brand.name} — Home">
              <div class="header-brand-badge">
                <span>V</span>
              </div>
              <div class="header-brand-details">
                <span class="header-brand-title">Vardha</span>
                <span class="header-brand-sub">WAREHOUSING</span>
              </div>
            </a>
            <button class="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close navigation menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="mobile-drawer-links">
            ${navigation.map(item => `
              <a href="${item.href}" class="mobile-drawer-link">${item.label}</a>
            `).join('')}
          </div>

          <div class="mobile-drawer-footer">
            <button class="btn btn-primary btn-full mobile-find-space">
              Find Your Space
            </button>
            <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener" class="mobile-drawer-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  `;

  initHeaderBehavior();
}

function getWhatsAppUrl() {
  const { contact, whatsapp } = CONFIG;
  if (!contact.whatsapp) return '#';
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsapp.defaultMessage)}`;
}

function initHeaderBehavior() {
  const header = document.getElementById('main-header');
  const toggle = document.getElementById('mobile-menu-toggle');
  const drawerWrapper = document.getElementById('mobile-drawer-wrapper');
  const drawerOverlay = document.getElementById('mobile-drawer-overlay');
  const drawerCloseBtn = document.getElementById('mobile-drawer-close');
  const findSpaceBtn = document.getElementById('header-find-space');

  // Open & Close handlers
  const openDrawer = () => {
    toggle?.classList.add('open');
    drawerWrapper?.classList.add('open');
    drawerWrapper?.setAttribute('aria-hidden', 'false');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  };

  const closeDrawer = () => {
    toggle?.classList.remove('open');
    drawerWrapper?.classList.remove('open');
    drawerWrapper?.setAttribute('aria-hidden', 'true');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle button
  toggle?.addEventListener('click', () => {
    if (drawerWrapper?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Tap outside on blurred/darkened overlay to close
  drawerOverlay?.addEventListener('click', closeDrawer);

  // Close button inside drawer
  drawerCloseBtn?.addEventListener('click', closeDrawer);

  // Keyboard Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerWrapper?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Drawer nav links — navigate & close
  drawerWrapper?.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      closeDrawer();
      if (href && href.startsWith('#')) {
        e.preventDefault();
        // small timeout for smooth drawer exit before scrolling
        setTimeout(() => {
          scrollToSection(href);
        }, 150);
      }
    });
  });

  // Drawer brand logo link
  drawerWrapper?.querySelector('.mobile-drawer-brand')?.addEventListener('click', (e) => {
    closeDrawer();
    e.preventDefault();
    setTimeout(() => {
      scrollToSection('#home');
    }, 150);
  });

  // Drawer CTA
  drawerWrapper?.querySelector('.mobile-find-space')?.addEventListener('click', () => {
    closeDrawer();
    setTimeout(() => {
      scrollToSection('#calculator');
    }, 150);
  });

  // Header CTA — scroll to calculator
  findSpaceBtn?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });

  // Desktop nav links smooth scroll
  document.querySelectorAll('.header-nav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });
}
