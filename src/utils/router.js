/* ============================================
   VARDHA WAREHOUSING — CLIENT-SIDE ROUTER
   ============================================
   Zero-dependency router supporting HTML5 History
   paths (/warehouse-renting) and hash routes (#/...)
   ============================================ */

let registeredRoutes = {};
let currentRoute = null;

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
  // Strip trailing slash if not root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (path === '/index.html') {
    path = '/';
  }
  return path;
}

/**
 * Navigate to a specific route programmatically.
 * @param {string} path - e.g. '/warehouse-renting' or '/warehouse-renting#contact'
 * @param {boolean} replace - whether to replace current history state
 */
export function navigateTo(path, replace = false) {
  const [routePath, anchor] = path.split('#');
  const targetRoute = routePath || '/';

  if (replace) {
    window.history.replaceState({ route: targetRoute }, '', path);
  } else {
    window.history.pushState({ route: targetRoute }, '', path);
  }

  handleRouteChange(anchor);
}

/**
 * Handle route change execution.
 */
function handleRouteChange(anchor = null) {
  const path = getRoutePath();
  const handler = registeredRoutes[path] || registeredRoutes['/'];

  currentRoute = path;

  if (handler) {
    handler(path);
  }

  // Handle anchor scrolling or scroll to top
  const currentAnchor = anchor || (window.location.hash.startsWith('#') && !window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : null);
  
  if (currentAnchor) {
    setTimeout(() => {
      const el = document.getElementById(currentAnchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Update active states on nav links
  updateActiveNavLinks(path);
}

/**
 * Updates CSS active class on all matching router links.
 */
function updateActiveNavLinks(currentPath) {
  document.querySelectorAll('[data-route], a[href]').forEach(link => {
    const href = link.getAttribute('data-route') || link.getAttribute('href');
    if (!href) return;

    const [linkPath] = href.split('#');
    if (linkPath && (linkPath === currentPath || (linkPath === '/' && currentPath === '/'))) {
      link.classList.add('active');
    } else if (linkPath && linkPath !== '/') {
      link.classList.remove('active');
    }
  });
}

/**
 * Initialize router with route mappings.
 * @param {Object} routes - Mapping of paths to render functions
 */
export function initRouter(routes) {
  registeredRoutes = routes;

  // Intercept all internal anchor clicks for SPA transitions
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href], [data-route]');
    if (!link) return;

    // Ignore if target=_blank or external
    const target = link.getAttribute('target');
    if (target === '_blank') return;

    const href = link.getAttribute('data-route') || link.getAttribute('href');
    if (!href) return;

    // Ignore tel:, mailto:, wa.me, or external http links
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me') || href.startsWith('http://') || href.startsWith('https://')) {
      return;
    }

    // Pure same-page hash anchor (e.g. #contact)
    if (href.startsWith('#') && !href.startsWith('#/')) {
      e.preventDefault();
      const anchorId = href.slice(1);
      const targetEl = document.getElementById(anchorId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Path based link (e.g. /warehouse-renting, /build-a-warehouse, /)
    if (href.startsWith('/') || href.startsWith('#/')) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  // Listen to browser Back/Forward buttons
  window.addEventListener('popstate', () => {
    handleRouteChange();
  });

  // Initial load
  handleRouteChange();
}
