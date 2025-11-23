const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');
let editingItem = null;

// Add product on button click or Enter key
addBtn.addEventListener('click', addProduct);
productInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addProduct();
});

function addProduct() {
  const productName = productInput.value.trim();
  if (!productName) return;

  const li = document.createElement('li');
  li.className = 'product-item';
  li.innerHTML = `
    <span class="product-name">${productName}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  productList.appendChild(li);
  productInput.value = '';
}

// Event delegation for Edit and Delete buttons
productList.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    editProduct(e.target.closest('li'));
  } else if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove();
  }
});

// Enter edit mode - replace span with input
function editProduct(li) {
  const span = li.querySelector('.product-name');
  const currentText = span.textContent;

  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.className = 'edit-input';

  span.replaceWith(input);
  input.focus();
  editingItem = { li, input, originalText: currentText };
}

// Auto-save on blur (click outside)
document.addEventListener('click', (e) => {
  if (editingItem && e.target !== editingItem.input) {
    saveEdit();
  }
});

// Save edit changes
function saveEdit() {
  if (!editingItem) return;

  const newText = editingItem.input.value.trim() || editingItem.originalText;
  const span = document.createElement('span');
  span.className = 'product-name';
  span.textContent = newText;

  editingItem.input.replaceWith(span);
  editingItem = null;
}

// Allow Enter to save, Escape to cancel
document.addEventListener('keydown', (e) => {
  if (!editingItem) return;
  if (e.key === 'Enter') saveEdit();
  if (e.key === 'Escape') {
    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = editingItem.originalText;
    editingItem.input.replaceWith(span);
    editingItem = null;
  }
});
