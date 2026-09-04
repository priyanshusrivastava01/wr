/* ============================================
   CENTRALIZED FRONTEND API CLIENT
   ============================================ */

const API_BASE = '/api';
const DIRECT_BACKEND_URL = 'http://127.0.0.1:5000/api';

/**
 * Generic Fetch Wrapper with proper error parsing and direct fallback
 */
async function apiRequest(endpoint, payload) {
  let response = null;

  // 1. Try relative URL via Vite proxy (/api/...)
  try {
    response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Proxy threw network exception, fallback below
  }

  // 2. Fallback to direct backend URL if proxy failed or returned bad gateway
  if (!response || response.status === 502 || response.status === 504) {
    try {
      response = await fetch(`${DIRECT_BACKEND_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (fallbackErr) {
      console.error('❌ Backend connection failed:', fallbackErr);
      return {
        success: false,
        status: 0,
        message: 'Unable to reach backend server. Please check if backend is running on port 5000.',
      };
    }
  }

  // 3. Parse JSON response
  let data = null;
  try {
    data = await response.json();
  } catch (parseErr) {
    console.warn('Could not parse JSON response:', parseErr);
  }

  // 4. Handle HTTP Statuses with clear, distinct messages
  if (!response.ok) {
    let errorMessage = data?.message;
    if (!errorMessage) {
      if (response.status === 400) {
        errorMessage = 'Please check the entered details and try again.';
      } else if (response.status === 404) {
        errorMessage = 'The requested form endpoint was not found on the server (404).';
      } else if (response.status === 503) {
        errorMessage = 'Database service is currently connecting. Please try again in a few moments.';
      } else if (response.status >= 500) {
        errorMessage = 'A server error occurred. Please try again later.';
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

  // 5. Success
  return {
    success: true,
    status: response.status,
    message: data?.message || 'Form submitted successfully.',
    data: data?.data,
  };
}

/**
 * FORM 1: Space Inquiry Submission
 * Endpoint: POST /api/space-inquiries
 * Collection: spaceinquiries
 */
export async function submitSpaceInquiryApi(payload) {
  return apiRequest('/space-inquiries', payload);
}

/**
 * FORM 2: Warehouse Build Request Submission
 * Endpoint: POST /api/warehouse-build-requests
 * Collection: warehousebuildrequests
 */
export async function submitWarehouseBuildApi(payload) {
  return apiRequest('/warehouse-build-requests', payload);
}

/**
 * FORM 3: Calculator Booking Submission
 * Endpoint: POST /api/calculator-bookings
 * Collection: calculatorbookings
 */
export async function submitCalculatorBookingApi(payload) {
  return apiRequest('/calculator-bookings', payload);
}

// Aliases for compatibility
export const submitInquiryApi = submitSpaceInquiryApi;
export const submitBuildWarehouseApi = submitWarehouseBuildApi;
export const submitEnquiryApi = submitSpaceInquiryApi;
export const submitContactApi = submitSpaceInquiryApi;
