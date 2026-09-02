/* ============================================
   SCROLL UTILITIES
   ============================================ */

/**
 * Smoothly scroll to an element by selector.
 */
export function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
  const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}

/**
 * Initialize scroll-reveal animations using Intersection Observer.
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * Initialize active nav highlighting based on scroll position.
 */
export function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-80px 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}
