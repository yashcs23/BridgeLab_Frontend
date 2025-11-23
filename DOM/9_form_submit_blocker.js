const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMsg = document.getElementById('successMsg');

const errorMessages = {
  name: document.getElementById('nameError'),
  email: document.getElementById('emailError'),
  password: document.getElementById('passwordError')
};

// Validation rules
const validationRules = {
  name: (value) => value.trim().length > 0,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  password: (value) => value.length >= 6
};

// Real-time validation on input
[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener('input', () => {
    validateField(input.id);
  });
});

// Validate single field
function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const isValid = validationRules[fieldId](input.value);
  const errorEl = errorMessages[fieldId];

  if (isValid) {
    errorEl.style.display = 'none';
    input.classList.remove('error');
  } else {
    errorEl.style.display = 'block';
    input.classList.add('error');
  }
}

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate all fields
  const fieldsValid = Object.keys(validationRules).every((fieldId) => {
    const input = document.getElementById(fieldId);
    return validationRules[fieldId](input.value);
  });

  if (!fieldsValid) {
    ['name', 'email', 'password'].forEach(validateField);
    return;
  }

  // Show success message
  form.style.display = 'none';
  successMsg.style.display = 'block';
});
