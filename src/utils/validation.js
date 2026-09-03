/* ============================================
   FORM VALIDATION & INPUT HELPERS
   Clean, human-readable, non-technical validation
   ============================================ */

/**
 * Validate a required field with friendly, non-technical message.
 */
export function validateRequired(value, fieldName) {
  if (!value || value.toString().trim() === '') {
    return `Please enter your ${fieldName.toLowerCase()}.`;
  }
  return '';
}

/**
 * Validate email address with clean user-friendly message.
 */
export function validateEmail(email) {
  if (!email || email.trim() === '') {
    return 'Please enter your email address.';
  }
  const trimmed = email.trim();
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(trimmed)) {
    return 'Please enter a valid email address.';
  }
  return '';
}

/**
 * Validate Indian 10-digit phone number strictly without technical jargon.
 */
export function validatePhone(phone) {
  if (!phone || phone.trim() === '') {
    return 'Please enter a valid 10-digit mobile number.';
  }
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length !== 10) {
    return 'Please enter a valid 10-digit mobile number.';
  }
  if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
    return 'Please enter a valid 10-digit mobile number.';
  }
  return '';
}

/**
 * Validate warehouse area input.
 */
export function validateArea(area) {
  if (!area || area.toString().trim() === '') {
    return 'Please enter the required warehouse space.';
  }
  const num = parseFloat(area);
  if (isNaN(num) || num <= 0) {
    return 'Please enter a valid warehouse area in square feet.';
  }
  return '';
}

/**
 * Validate a form step with friendly, human-readable error messages.
 */
export function validateStep(step, data) {
  const errors = {};

  switch (step) {
    case 'business': {
      if (!data.businessName || data.businessName.trim() === '') {
        errors.businessName = 'Please enter your business or company name.';
      }
      if (!data.businessType || data.businessType.trim() === '') {
        errors.businessType = 'Please select your business type.';
      }
      break;
    }

    case 'contact': {
      if (!data.fullName || data.fullName.trim() === '') {
        errors.fullName = 'Please enter your full name.';
      }
      const phoneErr = validatePhone(data.phone);
      if (phoneErr) errors.phone = phoneErr;

      const emailErr = validateEmail(data.email);
      if (emailErr) errors.email = emailErr;
      break;
    }

    case 'setup': {
      if (!data.name || data.name.trim() === '') {
        errors.name = 'Please enter your full name.';
      }
      const phoneErr = validatePhone(data.phone);
      if (phoneErr) errors.phone = phoneErr;

      const emailErr = validateEmail(data.email);
      if (emailErr) errors.email = emailErr;

      if (!data.location || data.location.trim() === '') {
        errors.location = 'Please enter your project location.';
      }

      if (!data.hasLand || data.hasLand.trim() === '') {
        errors.hasLand = 'Please select whether you have land.';
      }
      break;
    }

    case 'inquiry': {
      if (!data.name || data.name.trim() === '') {
        errors.name = 'Please enter your full name.';
      }
      const phoneErr = validatePhone(data.phone);
      if (phoneErr) errors.phone = phoneErr;

      const emailErr = validateEmail(data.email);
      if (emailErr) errors.email = emailErr;
      break;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Enforce only digits and max 10 characters on phone inputs.
 */
export function attachPhoneMask(input) {
  if (!input) return;
  input.setAttribute('inputmode', 'numeric');
  input.setAttribute('maxlength', '10');
  input.setAttribute('pattern', '[0-9]{10}');

  const handleInput = (e) => {
    const clean = e.target.value.replace(/\D/g, '').slice(0, 10);
    if (e.target.value !== clean) {
      e.target.value = clean;
    }
  };

  input.removeEventListener('input', handleInput);
  input.addEventListener('input', handleInput);

  input.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Enter') {
      e.preventDefault();
    }
  });
}
