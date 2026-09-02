/* ============================================
   FORMATTING UTILITIES
   ============================================ */

/**
 * Format a number as Indian Rupee currency.
 * e.g. 120000 → ₹1,20,000
 */
export function formatINR(amount) {
  if (!amount || isNaN(amount)) return '₹0';
  
  const num = Math.round(amount);
  const str = num.toString();
  
  // Indian number system: last 3 digits, then groups of 2
  if (str.length <= 3) return '₹' + str;
  
  let result = '';
  const lastThree = str.substring(str.length - 3);
  const remaining = str.substring(0, str.length - 3);
  
  if (remaining.length > 0) {
    // Add commas every 2 digits for the remaining part
    result = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    result += ',';
  }
  result += lastThree;
  
  return '₹' + result;
}

/**
 * Format area with commas and unit.
 * e.g. 2000 → '2,000 sq. ft.'
 */
export function formatArea(sqft) {
  if (!sqft || isNaN(sqft)) return '0 sq. ft.';
  return `${Math.round(sqft).toLocaleString('en-IN')} sq. ft.`;
}

/**
 * Format rate with currency and unit.
 * e.g. 60 → '₹60 / sq. ft.'
 */
export function formatRate(rate) {
  if (!rate || isNaN(rate)) return '';
  return `₹${rate} / sq. ft.`;
}

/**
 * Generate a unique reference number.
 * Format: VW-YYYYMMDD-XXXX
 */
export function generateReferenceNumber() {
  const now = new Date();
  const date = now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, '0') +
    now.getDate().toString().padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `VW-${date}-${random}`;
}

/**
 * Format date for display.
 */
export function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
