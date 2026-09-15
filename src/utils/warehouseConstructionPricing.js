/* ============================================
   WAREHOUSE CONSTRUCTION COST ESTIMATOR
   ============================================
   Central pricing configuration & calculation
   for the Build a Warehouse page.

   IMPORTANT: All per-sq.ft. rates below are the
   FINAL customer-facing rates. They already include
   the business markup. Do NOT display any other
   pricing on the website.

   This module is completely independent of the
   existing rental/space calculator (pricing.js).
   ============================================ */

/**
 * Single source of truth — per sq.ft. cost components.
 * Derived from the 10,000 sq.ft. reference estimate.
 */
export const WAREHOUSE_CONSTRUCTION_PRICING = {
  steelStructure: {
    lowPerSqFt: 180,
    highPerSqFt: 216,
  },
  roofingSheet: {
    lowPerSqFt: 72,
    highPerSqFt: 96,
  },
  fabricationErection: {
    lowPerSqFt: 48,
    highPerSqFt: 60,
  },
  civilFooting: {
    lowPerSqFt: 48,
    highPerSqFt: 60,
  },
  paintingMiscellaneous: {
    lowPerSqFt: 24,
    highPerSqFt: 36,
  },
};

/** Minimum warehouse area accepted by the estimator */
export const WAREHOUSE_MIN_AREA = 1000;

/**
 * Calculate estimated construction cost for a given area.
 *
 * @param {number} areaSqFt — warehouse area in square feet
 * @returns {object|null} — estimate breakdown, or null for invalid input
 *
 * Return shape:
 * {
 *   areaSqFt,
 *   steelStructure:        { low, high },
 *   roofingSheet:          { low, high },
 *   fabricationErection:   { low, high },
 *   civilFooting:          { low, high },
 *   paintingMiscellaneous: { low, high },
 *   total:                 { low, high },
 * }
 *
 * Component totals always add up exactly to the overall total
 * because the total is computed by summing components (not
 * independently from an overall rate).
 */
export function calculateWarehouseEstimate(areaSqFt) {
  if (!areaSqFt || typeof areaSqFt !== 'number' || !isFinite(areaSqFt) || areaSqFt <= 0) {
    return null;
  }
  if (areaSqFt < WAREHOUSE_MIN_AREA) {
    return null;
  }

  const p = WAREHOUSE_CONSTRUCTION_PRICING;

  const steelStructure = {
    low: areaSqFt * p.steelStructure.lowPerSqFt,
    high: areaSqFt * p.steelStructure.highPerSqFt,
  };

  const roofingSheet = {
    low: areaSqFt * p.roofingSheet.lowPerSqFt,
    high: areaSqFt * p.roofingSheet.highPerSqFt,
  };

  const fabricationErection = {
    low: areaSqFt * p.fabricationErection.lowPerSqFt,
    high: areaSqFt * p.fabricationErection.highPerSqFt,
  };

  const civilFooting = {
    low: areaSqFt * p.civilFooting.lowPerSqFt,
    high: areaSqFt * p.civilFooting.highPerSqFt,
  };

  const paintingMiscellaneous = {
    low: areaSqFt * p.paintingMiscellaneous.lowPerSqFt,
    high: areaSqFt * p.paintingMiscellaneous.highPerSqFt,
  };

  // Total is the SUM of components — guarantees consistency
  const total = {
    low:
      steelStructure.low +
      roofingSheet.low +
      fabricationErection.low +
      civilFooting.low +
      paintingMiscellaneous.low,
    high:
      steelStructure.high +
      roofingSheet.high +
      fabricationErection.high +
      civilFooting.high +
      paintingMiscellaneous.high,
  };

  return {
    areaSqFt,
    steelStructure,
    roofingSheet,
    fabricationErection,
    civilFooting,
    paintingMiscellaneous,
    total,
  };
}

/**
 * Format a numeric rupee amount into a human-readable
 * Indian Lakh / Crore string.
 *
 * Examples:
 *   186000   → "₹1.86 Lakh"
 *   3720000  → "₹37.20 Lakh"
 *   11160000 → "₹1.12 Crore"
 *
 * @param {number} amount — amount in rupees
 * @param {string} [lakhLabel='Lakh'] — label for lakh
 * @param {string} [croreLabel='Crore'] — label for crore
 * @returns {string}
 */
export function formatLakhCrore(amount, lakhLabel = 'Lakh', croreLabel = 'Crore') {
  if (amount === null || amount === undefined || isNaN(amount) || !isFinite(amount)) {
    return '₹0';
  }

  const CRORE = 10000000; // 1,00,00,000
  const LAKH = 100000;    // 1,00,000

  if (amount >= CRORE) {
    const croreVal = amount / CRORE;
    // Use enough decimals to avoid misleading rounding
    // but keep it clean (2 decimal places)
    const formatted = croreVal.toFixed(2);
    // Remove trailing zeros after decimal only if both are zero
    const clean = formatted.replace(/\.00$/, '');
    return `₹${clean === formatted ? formatted : clean} ${croreLabel}`;
  }

  if (amount >= LAKH) {
    const lakhVal = amount / LAKH;
    const formatted = lakhVal.toFixed(2);
    return `₹${formatted} ${lakhLabel}`;
  }

  // Below 1 lakh — use Indian formatting
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

/**
 * Parse and sanitize user-entered area input.
 *
 * Handles:
 *  - commas (10,000)
 *  - spaces (10 000)
 *  - trailing text (10000 sq ft)
 *  - plain numbers (10000)
 *
 * Rejects:
 *  - empty / whitespace-only
 *  - negative numbers
 *  - NaN / Infinity
 *  - pure letters / symbols
 *
 * @param {string} rawInput — raw value from the input field
 * @returns {number|null} — parsed numeric area, or null if invalid
 */
export function parseAreaInput(rawInput) {
  if (!rawInput || typeof rawInput !== 'string') return null;

  // Strip everything except digits and dots
  const cleaned = rawInput.replace(/[^0-9.]/g, '');

  if (!cleaned) return null;

  const num = parseFloat(cleaned);

  if (isNaN(num) || !isFinite(num) || num <= 0) return null;

  return num;
}
