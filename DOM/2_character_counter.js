const textArea = document.getElementById('textArea');
const charCounter = document.getElementById('charCounter');
const resetBtn = document.getElementById('resetBtn');
const MAX_CHARS = 100;

// Track character input
textArea.addEventListener('input', (e) => {
  const currentLength = textArea.value.length;
  const remainingChars = MAX_CHARS - currentLength;

  charCounter.textContent = `${remainingChars}/${MAX_CHARS}`;

  // Turn yellow at 20 chars left
  if (remainingChars <= 20 && remainingChars > 0) {
    charCounter.classList.add('warning-yellow');
    charCounter.classList.remove('warning-red');
  }
  // Turn red at 0 chars and prevent typing
  else if (remainingChars === 0) {
    charCounter.classList.add('warning-red');
    charCounter.classList.remove('warning-yellow');
  }
  // Normal state
  else {
    charCounter.classList.remove('warning-yellow', 'warning-red');
  }
});

// Prevent typing when limit reached
textArea.addEventListener('keypress', (e) => {
  if (textArea.value.length >= MAX_CHARS) {
    e.preventDefault();
  }
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  textArea.value = '';
  charCounter.textContent = `${MAX_CHARS}/${MAX_CHARS}`;
  charCounter.classList.remove('warning-yellow', 'warning-red');
});
