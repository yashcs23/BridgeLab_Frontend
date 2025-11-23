const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// Theme definitions
const themes = {
  light: { bg: '#ffffff', text: '#000000', accent: '#007bff' },
  dark: { bg: '#1a1a1a', text: '#ffffff', accent: '#00d4ff' },
  blue: { bg: '#e3f2fd', text: '#0d47a1', accent: '#1976d2' }
};

// Initialize with saved theme or default
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Attach click listeners to theme buttons
themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const themeName = btn.getAttribute('data-theme');
    applyTheme(themeName);
    localStorage.setItem('theme', themeName);
  });
});

// Apply theme using setAttribute
function applyTheme(themeName) {
  const theme = themes[themeName];

  body.setAttribute('data-theme', themeName);
  body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
  body.classList.add(`${themeName}-theme`);

  // Apply CSS custom properties
  body.style.backgroundColor = theme.bg;
  body.style.color = theme.text;

  // Update active button
  themeButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === themeName);
  });
}
