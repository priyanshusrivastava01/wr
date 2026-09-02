/* ============================================
   FORM VALIDATION & INPUT HELPERS
   ============================================ */

/**
 * Validate a required field with friendly Indian contextual message.
 */
export function validateRequired(value, fieldName) {
  if (!value || value.toString().trim() === '') {
    return `Please enter your ${fieldName}.`;
  }
  return '';
}

/**
 * Validate email with strict format checking.
 */
export function validateEmail(email) {
  if (!email || email.trim() === '') {
    return 'Please enter your email address.';
  }
  const trimmed = email.trim();
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(trimmed)) {
    return 'Please enter a valid email address (e.g. rahul.sharma@example.com).';
  }
  return '';
}

/**
 * Validate Indian 10-digit phone number.
 */
export function validatePhone(phone) {
  if (!phone || phone.trim() === '') {
    return 'Please enter your 10-digit mobile number.';
  }
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length !== 10) {
    return 'Please enter a complete 10-digit mobile number.';
  }
  if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
    return 'Please enter a valid Indian mobile number starting with 6, 7, 8, or 9.';
  }
  return '';
}

/**
 * Validate area input with friendly message.
 */
export function validateArea(area) {
  if (!area || area.toString().trim() === '') {
    return 'Please enter your required warehouse area.';
  }
  const num = parseFloat(area);
  if (isNaN(num) || num <= 0) {
    return 'Please enter a valid area in square feet.';
  }
  return '';
}

/**
 * Validate a form step — returns object with isValid and errors.
 */
export function validateStep(step, data) {
  const errors = {};

  switch (step) {
    case 'business': {
      const nameErr = validateRequired(data.businessName, 'business name');
      if (nameErr) errors.businessName = nameErr;

      const typeErr = validateRequired(data.businessType, 'business type');
      if (typeErr) errors.businessType = typeErr;
      break;
    }

    case 'contact': {
      const fullNameErr = validateRequired(data.fullName, 'full name');
      if (fullNameErr) errors.fullName = fullNameErr;

      const phoneErr = validatePhone(data.phone);
      if (phoneErr) errors.phone = phoneErr;

      const emailErr = validateEmail(data.email);
      if (emailErr) errors.email = emailErr;
      break;
    }

    case 'setup': {
      const nameErr = validateRequired(data.name, 'full name');
      if (nameErr) errors.name = nameErr;

      const phoneErr = validatePhone(data.phone);
      if (phoneErr) errors.phone = phoneErr;

      const emailErr = validateEmail(data.email);
      if (emailErr) errors.email = emailErr;

      const reqErr = validateRequired(data.requirement, 'requirement');
      if (reqErr) errors.requirement = reqErr;
      break;
    }

    case 'inquiry': {
      const nameErr = validateRequired(data.name, 'full name');
      if (nameErr) errors.name = nameErr;

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
 * Enforce only digits and max 10 characters on any phone input element.
 */
export function attachPhoneMask(input) {
  if (!input) return;
  input.setAttribute('inputmode', 'numeric');
  input.setAttribute('maxlength', '10');
  input.setAttribute('pattern', '[0-9]{10}');

  // Filter out any non-digits in real-time
  const handleInput = (e) => {
    const clean = e.target.value.replace(/\D/g, '').slice(0, 10);
    if (e.target.value !== clean) {
      e.target.value = clean;
    }
  };

  input.removeEventListener('input', handleInput);
  input.addEventListener('input', handleInput);

  input.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Enter' && e.key !== 'Backspace' && e.key !== 'Tab') {
      e.preventDefault();
    }
  });
}
