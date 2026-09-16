/* ============================================
   CENTRALIZED FRONTEND API CLIENT
   ============================================
   Dedicated 1-Form to 1-Collection Mappings:
   - Form 1 (Warehouse Rental Calculator Booking) -> POST /api/calculator-bookings -> calculatorbookings
   - Form 2 (Custom Warehouse Build Request)     -> POST /api/warehouse-build-requests -> warehousebuildrequests
   ============================================ */

const RENDER_PRODUCTION_URL = 'https://warehouse-xmhc.onrender.com';

/**
 * Dynamically resolves API Base URL based on environment:
 * 1. If VITE_API_BASE_URL (or VITE_BACKEND_URL) is explicitly provided, use that.
 * 2. If running in local development (localhost / 127.0.0.1) without explicit override, use relative /api (Vite proxy).
 * 3. In production, use the production Render backend URL.
 */
function resolveApiBaseUrl() {
  const envUrl = (
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    (import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_API_URL)
  );

  if (envUrl && envUrl.trim()) {
    const clean = envUrl.trim().replace(/\/+$/, '');
    return clean.endsWith('/api') ? clean : `${clean}/api`;
  }

  // Local development fallback
  if (typeof window !== 'undefined' && window.location) {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      return '/api';
    }
  }

  return `${RENDER_PRODUCTION_URL}/api`;
}

/**
 * Generic Fetch Wrapper with comprehensive error parsing, timeout, and local dev fallback
 */
async function apiRequest(endpoint, payload) {
  const targetPath = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const primaryBase = resolveApiBaseUrl();
  const primaryUrl = `${primaryBase}${targetPath}`;

  let response = null;
  let isLocalProxyFailure = false;

  try {
    response = await fetch(primaryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // If on localhost and Vite proxy returns 500/502/504 (because local port 5000 is not started)
    if (!response.ok && primaryBase === '/api' && response.status >= 500) {
      isLocalProxyFailure = true;
    }
  } catch (err) {
    isLocalProxyFailure = true;
  }

  // If local server is not running or returned a proxy error, automatically fallback to live Render backend
  if (isLocalProxyFailure || !response) {
    try {
      console.warn(`⚠️ Local backend proxy on ${primaryUrl} returned error/unreachable, routing to live Render backend (${RENDER_PRODUCTION_URL})...`);
      response = await fetch(`${RENDER_PRODUCTION_URL}/api${targetPath}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (fallbackErr) {
      console.error('❌ Live backend fallback failed:', fallbackErr);
    }
  }

  if (!response) {
    return {
      success: false,
      status: 0,
      message: 'Unable to reach backend server. Please verify your internet connection.',
    };
  }

  let data = null;
  try {
    data = await response.json();
  } catch (parseErr) {
    // Non-JSON response (e.g., HTML 404 from edge)
  }

  if (!response.ok) {
    let errorMessage = data?.message;
    if (!errorMessage) {
      if (response.status === 400) {
        errorMessage = 'Please check the required information and try again.';
      } else if (response.status === 404) {
        errorMessage = 'The requested form endpoint was not found on the server (404).';
      } else if (response.status === 503) {
        errorMessage = 'Database service is currently connecting. Please try again in a few moments.';
      } else if (response.status >= 500) {
        errorMessage = 'A server error occurred. Please try again in a few moments.';
      } else {
        errorMessage = `Request failed with status ${response.status}.`;
      }
    }

    return {
      success: false,
      status: response.status,
      message: errorMessage,
    };
  }

  return {
    success: true,
    status: response.status,
    message: data?.message || 'Your request has been submitted successfully.',
    data: data?.data,
  };
}

/**
 * FORM 1: Warehouse Rental Calculator Booking Submission
 * Endpoint: POST /api/calculator-bookings
 * Target Collection: calculatorbookings
 */
export async function submitCalculatorBookingApi(payload) {
  return apiRequest('/calculator-bookings', payload);
}

/**
 * FORM 2: Custom Warehouse Build Request Submission
 * Endpoint: POST /api/warehouse-build-requests
 * Target Collection: warehousebuildrequests
 */
export async function submitWarehouseBuildApi(payload) {
  return apiRequest('/warehouse-build-requests', payload);
}

/**
 * FORM 3: Warehouse Space & Contact Inquiry Submission
 * Endpoint: POST /api/inquiries
 * Target Collection: inquiries
 */
export async function submitInquiryApi(payload) {
  return apiRequest('/inquiries', payload);
}

// Aliases for compatibility across components
export const submitBuildWarehouseApi = submitWarehouseBuildApi;
export const submitSpaceInquiryApi = submitInquiryApi;
export const submitEnquiryApi = submitInquiryApi;
export const submitContactApi = submitInquiryApi;

/**
 * Non-blocking fire-and-forget backend warmup
 */
let hasWarmedUp = false;
export function warmupBackendReadiness() {
  if (hasWarmedUp || typeof window === 'undefined' || !window.fetch) return;
  hasWarmedUp = true;

  const ping = () => {
    const base = resolveApiBaseUrl();
    const rootBase = base.replace(/\/api$/, '');
    const healthUrl = `${rootBase}/health`;
    fetch(healthUrl, { method: 'GET', cache: 'no-store' }).catch(() => {});
  };

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(ping, { timeout: 3000 });
  } else {
    setTimeout(ping, 1000);
  }
}
