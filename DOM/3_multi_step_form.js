const form = document.getElementById('multiStepForm');
const steps = document.querySelectorAll('.form-step');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const summaryDiv = document.getElementById('summary');
let currentStep = 0;

// Validation rules
const validations = {
  0: (value) => value.trim().length > 0,
  1: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  2: (value) => value.length >= 6
};

// Show step
function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === stepIndex);
  });

  backBtn.style.display = stepIndex === 0 ? 'none' : 'inline';
  nextBtn.textContent = stepIndex === 2 ? 'Submit' : 'Next';
}

// Validate current step input
function isStepValid() {
  const input = steps[currentStep].querySelector('input');
  return validations[currentStep](input.value);
}

// Get input value from current step
function getStepValue(stepIndex) {
  return steps[stepIndex].querySelector('input').value.trim();
}

// Next button handler
nextBtn.addEventListener('click', () => {
  if (!isStepValid()) {
    alert('Please fill in this field correctly');
    return;
  }

  if (currentStep === 2) {
    showSummary();
  } else {
    currentStep++;
    showStep(currentStep);
  }
});

// Back button handler
backBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Show summary and submit
function showSummary() {
  const name = getStepValue(0);
  const email = getStepValue(1);
  const password = getStepValue(2);

  form.style.display = 'none';
  summaryDiv.innerHTML = `
    <h2>Form Summary</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
    <p style="color: green; font-weight: bold;">✓ Form Submitted Successfully</p>
  `;
}

// Initialize
showStep(0);
