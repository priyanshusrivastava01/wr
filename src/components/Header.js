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

          <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
        <div class="mobile-nav-header">
          <div class="header-brand-badge">
            <span>V</span>
          </div>
          <div class="header-brand-details">
            <span class="header-brand-title">Vardha</span>
            <span class="header-brand-sub">WAREHOUSING</span>
          </div>
        </div>
        <div class="mobile-nav-links">
          ${navigation.map(item => `
            <a href="${item.href}" class="mobile-nav-link">${item.label}</a>
          `).join('')}
        </div>
        <div class="mobile-nav-cta">
          <button class="btn btn-primary btn-full mobile-find-space">
            Find Your Space
          </button>
        </div>
      </nav>
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
  const mobileNav = document.getElementById('mobile-nav');
  const findSpaceBtn = document.getElementById('header-find-space');

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  // Mobile nav links
  mobileNav?.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    });
  });

  // Mobile CTA
  mobileNav?.querySelector('.mobile-find-space')?.addEventListener('click', () => {
    toggle.classList.remove('open');
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    scrollToSection('#calculator');
  });

  // Header CTA — scroll to calculator
  findSpaceBtn?.addEventListener('click', () => {
    scrollToSection('#calculator');
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });
}
