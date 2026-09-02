/* ============================================
   PRICING ENGINE
   ============================================ */

import { CONFIG } from '../config.js';

/**
 * Calculate the price for a given area.
 * Returns an object with rate, total, slab info, validity, and any validation message.
 */
export function calculatePrice(area) {
  const { pricing, warehouse } = CONFIG;
  const numArea = parseFloat(area);

  // Empty or invalid
  if (!area || isNaN(numArea) || numArea <= 0) {
    return {
      area: 0,
      rate: 0,
      total: 0,
      slab: null,
      isValid: false,
      validationMessage: '',
      showValidation: false,
    };
  }

  // Below minimum
  if (numArea < warehouse.minArea) {
    return {
      area: numArea,
      rate: 0,
      total: 0,
      slab: null,
      isValid: false,
      showValidation: true,
      validationMessage: `The displayed pricing currently starts from ${warehouse.minArea.toLocaleString('en-IN')} ${pricing.unit}. Please contact us for smaller requirements.`,
    };
  }

  // Above maximum
  if (numArea > warehouse.maxArea) {
    return {
      area: numArea,
      rate: 0,
      total: 0,
      slab: null,
      isValid: false,
      showValidation: true,
      validationMessage: `Your requirement is outside the currently displayed pricing range. Please send us your requirement for a custom quotation.`,
    };
  }

  // Find the applicable slab
  const slab = findSlab(numArea, pricing);

  if (!slab) {
    return {
      area: numArea,
      rate: 0,
      total: 0,
      slab: null,
      isValid: false,
      showValidation: true,
      validationMessage: 'Unable to calculate pricing for this area. Please contact us.',
    };
  }

  const total = numArea * slab.rate;

  return {
    area: numArea,
    rate: slab.rate,
    total,
    slab,
    isValid: true,
    showValidation: false,
    validationMessage: '',
  };
}

/**
 * Find the applicable pricing slab for a given area.
 * Handles the configurable boundary value logic.
 */
function findSlab(area, pricing) {
  const { slabs, boundaryValue, boundaryBelongsTo } = pricing;

  for (const slab of slabs) {
    let min = slab.min;
    let max = slab.max;

    // Handle boundary logic
    if (area === boundaryValue) {
      if (boundaryBelongsTo === 'upper' && slab.min === boundaryValue) {
        return slab;
      }
      if (boundaryBelongsTo === 'lower' && slab.max < boundaryValue) {
        // The lower slab's max is 4999, so we check if area == boundaryValue
        // and boundaryBelongsTo is 'lower', return slab-1
        return { ...slabs[0], max: boundaryValue };
      }
      if (boundaryBelongsTo === 'lower' && slab.id === 'slab-1') {
        return slab;
      }
    }

    if (area >= min && area <= max) {
      return slab;
    }
  }

  return null;
}

/**
 * Calculate area from dimensions (width × length).
 * Height is NOT factored in — it's a separate preference.
 */
export function calculateArea(width, length) {
  const w = parseFloat(width);
  const l = parseFloat(length);

  if (!width || !length || isNaN(w) || isNaN(l) || w <= 0 || l <= 0) {
    return 0;
  }

  return Math.round(w * l);
}
