/* ============================================
   VARDHA WAREHOUSING — CLIENT-SIDE ROUTER & ACTIVE NAV
   ============================================ */

let registeredRoutes = {};
let currentRoute = null;
let programmaticScrollTimeout = null;
let isProgrammaticNav = false;

/**
 * Single Source of Truth for active navigation underline.
 * Mutually exclusive: only ONE navigation item can be active at a time.
 * @param {string} key - 'home' | 'renting' | 'build' | 'connectivity' | 'contact'
 */
export function setActiveNav(key) {
  const desktopLinks = document.querySelectorAll('.header-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-drawer-links .mobile-drawer-link');
  const allNavLinks = [...desktopLinks, ...mobileLinks];

  // 1. Remove active state from EVERY link
  allNavLinks.forEach(link => {
    link.classList.remove('active');
  });

  if (!key) return;

  // 2. Add active state ONLY to the single matching link
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href') || link.getAttribute('data-route') || '';
    let isMatch = false;

    if (key === 'home') {
      isMatch = (href === '/' || href === '/#' || href === '');
    } else if (key === 'renting') {
      isMatch = href.startsWith('/warehouse-renting');
    } else if (key === 'build') {
      isMatch = href.startsWith('/build-a-warehouse');
    } else if (key === 'connectivity') {
      isMatch = (href === '/#connectivity' || href === '#connectivity');
    } else if (key === 'contact') {
      isMatch = (href === '/#contact' || href === '#contact');
    }

    if (isMatch) {
      link.classList.add('active');
    }
  });
}

/**
 * Normalizes the current pathname or hash into a route key.
 * e.g., "/", "/warehouse-renting", "/build-a-warehouse"
 */
export function getRoutePath() {
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    return hash.slice(1).split('?')[0].split('#')[0] || '/';
  }
  
  let path = window.location.pathname || '/';
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (path === '/index.html') {
    path = '/';
  }
  return path;
}

/**
 * Smoothly scroll to an anchor element accounting for sticky header.
 */
export function scrollToAnchor(anchorId) {
  if (!anchorId) return;
  const el = document.getElementById(anchorId);
  if (!el) return;

  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerHeight - 16;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: 'smooth'
  });
}

/**
 * Programmatic navigation with single source of truth active state.
 */
export function navigateTo(path, replace = false) {
  const [routePart, anchorPart] = path.split('#');
  const targetRoute = routePart || '/';
  const anchor = anchorPart || null;

  // Determine intended active key from path
  let activeKey = 'home';
  if (targetRoute === '/warehouse-renting') {
    activeKey = 'renting';
  } else if (targetRoute === '/build-a-warehouse') {
    activeKey = 'build';
  } else if (anchor === 'connectivity') {
    activeKey = 'connectivity';
  } else if (anchor === 'contact') {
    activeKey = 'contact';
  }

  isProgrammaticNav = true;
  if (programmaticScrollTimeout) clearTimeout(programmaticScrollTimeout);
  programmaticScrollTimeout = setTimeout(() => {
    isProgrammaticNav = false;
  }, 1000);

  const fullUrl = anchor ? `${targetRoute}#${anchor}` : targetRoute;
  if (replace) {
    window.history.replaceState({ route: targetRoute, anchor }, '', fullUrl);
  } else {
    window.history.pushState({ route: targetRoute, anchor }, '', fullUrl);
  }

  handleRouteChange(targetRoute, anchor, activeKey);
}

/**
 * Handle route rendering and section scrolling.
 */
function handleRouteChange(targetPath = null, targetAnchor = null, forcedActiveKey = null) {
  const path = targetPath || getRoutePath();
  const hash = window.location.hash;
  const anchor = targetAnchor || (hash.startsWith('#') && !hash.startsWith('#/') ? hash.slice(1) : null);

  const isSameRoute = (currentRoute === path);
  currentRoute = path;

  // Render page if route changed or appRoot is empty
  const appRoot = document.getElementById('app-root');
  if (!isSameRoute || !appRoot || !appRoot.hasChildNodes()) {
    const handler = registeredRoutes[path] || registeredRoutes['/'];
    if (handler) {
      handler(path);
    }
  }

  // Handle scrolling and mutual exclusive active state
  if (path === '/') {
    if (anchor === 'connectivity') {
      setTimeout(() => scrollToAnchor('connectivity'), 80);
      setActiveNav('connectivity');
    } else if (anchor === 'contact') {
      setTimeout(() => scrollToAnchor('contact'), 80);
      setActiveNav('contact');
    } else if (anchor) {
      setTimeout(() => scrollToAnchor(anchor), 80);
      setActiveNav('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setActiveNav('home');
    }
  } else if (path === '/warehouse-renting') {
    if (anchor) {
      setTimeout(() => scrollToAnchor(anchor), 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setActiveNav('renting');
  } else if (path === '/build-a-warehouse') {
    if (anchor) {
      setTimeout(() => scrollToAnchor(anchor), 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setActiveNav('build');
  } else {
    setActiveNav(forcedActiveKey || 'home');
  }
}

export function isNavigating() {
  return isProgrammaticNav;
}

/**
 * Initialize router with route mappings and global event delegation.
 */
export function initRouter(routes) {
  registeredRoutes = routes;

  // Global click interception for SPA navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href], [data-route]');
    if (!link) return;

    if (link.getAttribute('target') === '_blank') return;

    const href = link.getAttribute('data-route') || link.getAttribute('href');
    if (!href) return;

    // Ignore tel:, mailto:, wa.me, or external http links
    if (
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('https://wa.me') ||
      href.startsWith('http://') ||
      href.startsWith('https://')
    ) {
      return;
    }

    // Pure same-page hash anchor (e.g. #connectivity, #contact, #choose-service)
    if (href.startsWith('#') && !href.startsWith('#/')) {
      e.preventDefault();
      const anchorId = href.slice(1);
      
      let activeKey = null;
      if (anchorId === 'connectivity') activeKey = 'connectivity';
      else if (anchorId === 'contact') activeKey = 'contact';

      if (activeKey) {
        if (getRoutePath() !== '/') {
          navigateTo(`/#${anchorId}`);
          return;
        }
        setActiveNav(activeKey);
      }

      isProgrammaticNav = true;
      if (programmaticScrollTimeout) clearTimeout(programmaticScrollTimeout);
      programmaticScrollTimeout = setTimeout(() => {
        isProgrammaticNav = false;
      }, 1000);

      window.history.pushState(null, '', href);
      scrollToAnchor(anchorId);
      return;
    }

    // Path based link (e.g. /, /warehouse-renting, /build-a-warehouse, /#connectivity, /#contact)
    if (href.startsWith('/') || href.startsWith('#/')) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  // Browser Back / Forward buttons
  window.addEventListener('popstate', () => {
    handleRouteChange();
  });

  // Initial load
  handleRouteChange();
}
