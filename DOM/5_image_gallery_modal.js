const gallery = document.getElementById('imageGallery');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');

// Sample images (replace with actual image URLs)
const images = [
  'https://via.placeholder.com/200?text=Image+1',
  'https://via.placeholder.com/200?text=Image+2',
  'https://via.placeholder.com/200?text=Image+3',
  'https://via.placeholder.com/200?text=Image+4',
  'https://via.placeholder.com/200?text=Image+5',
  'https://via.placeholder.com/200?text=Image+6'
];

// Create gallery items
images.forEach((src) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Gallery image';
  img.className = 'gallery-item';
  gallery.appendChild(img);
});

// Open modal on image click
gallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-item')) {
    modalImage.src = e.target.src;
    modal.classList.add('active');
  }
});

// Close modal on close button
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal on outside click (but not on image)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Prevent closing when clicking inside modal content
modal.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});
