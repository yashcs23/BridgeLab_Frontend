const trackingBox = document.getElementById('trackingBox');
const coordDisplay = document.getElementById('coordDisplay');

// Track mouse movement
trackingBox.addEventListener('mousemove', (e) => {
  const rect = trackingBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  coordDisplay.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

// Hide coordinates when mouse leaves
trackingBox.addEventListener('mouseleave', () => {
  coordDisplay.textContent = 'Move mouse over the box';
});

// Drop red dot on double-click
trackingBox.addEventListener('dblclick', (e) => {
  const rect = trackingBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement('div');
  dot.className = 'red-dot';
  dot.style.left = `${x - 5}px`;
  dot.style.top = `${y - 5}px`;
  dot.title = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;

  trackingBox.appendChild(dot);
});

// Clear dots on right-click
trackingBox.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  document.querySelectorAll('.red-dot').forEach((dot) => dot.remove());
});
