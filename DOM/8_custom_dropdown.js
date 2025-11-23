const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const options = document.querySelectorAll('.dropdown-option');

// Toggle dropdown
dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Select option
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const selectedText = e.target.textContent;
    dropdownBtn.textContent = selectedText;
    dropdownMenu.classList.remove('active');
  });
});

// Close dropdown on outside click using capturing phase
document.addEventListener(
  'click',
  (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('active');
    }
  },
  true // Capturing phase
);
