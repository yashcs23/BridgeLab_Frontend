class Cart {
  constructor() {
    this.items = [];
    this.coupon = null;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  validateCoupon(couponCode) {
    const couponPattern = /^(SAVE|DISC)(\d+)$/;
    const match = couponCode.match(couponPattern);

    if (match) {
      this.coupon = { code: couponCode, discount: parseInt(match[2]) };
      return { valid: true, discount: parseInt(match[2]) };
    }
    return { valid: false };
  }

  applyCoupon(couponCode) {
    const validation = this.validateCoupon(couponCode);
    if (validation.valid) {
      return validation.discount;
    }
    return 0;
  }

  getFinalTotal() {
    let total = this.getTotal();
    if (this.coupon) {
      total -= (total * this.coupon.discount) / 100;
    }
    return total;
  }

  displayCart() {
    const cartDiv = document.getElementById("cartDisplay");
    let cartHTML = '<h3>Shopping Cart</h3><table border="1" style="width: 100%; text-align: left;">';
    cartHTML += '<tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th></tr>';

    this.items.forEach(item => {
      cartHTML += `<tr><td>${item.name}</td><td>₹${item.price}</td><td>${item.quantity}</td><td>₹${item.price * item.quantity}</td></tr>`;
    });

    cartHTML += '</table>';
    cartHTML += `<p><strong>Subtotal: ₹${this.getTotal().toFixed(2)}</strong></p>`;

    if (this.coupon) {
      cartHTML += `<p style="color: green;"><strong>Coupon (${this.coupon.code}): -${this.coupon.discount}%</strong></p>`;
    }

    cartHTML += `<p style="font-size: 18px; color: #007bff;"><strong>Final Total: ₹${this.getFinalTotal().toFixed(2)}</strong></p>`;
    cartDiv.innerHTML = cartHTML;
  }
}

const cart = new Cart();

function handleAddItem(event) {
  event.preventDefault();
  
  const name = document.getElementById("itemName").value;
  const price = parseFloat(document.getElementById("itemPrice").value);
  const quantity = parseInt(document.getElementById("itemQuantity").value);

  cart.addItem(name, price, quantity);
  cart.displayCart();
  document.getElementById("addItemForm").reset();
}

function handleApplyCoupon(event) {
  event.preventDefault();

  const couponCode = document.getElementById("couponInput").value.toUpperCase();
  const validation = cart.validateCoupon(couponCode);

  const messageDiv = document.getElementById("couponMessage");
  if (validation.valid) {
    cart.coupon = { code: couponCode, discount: validation.discount };
    messageDiv.textContent = `✓ Coupon "${couponCode}" applied! ${validation.discount}% discount`;
    messageDiv.style.color = "green";
  } else {
    messageDiv.textContent = "✗ Invalid coupon format. Use: SAVE20 or DISC10";
    messageDiv.style.color = "red";
  }

  cart.displayCart();
  document.getElementById("couponInput").value = "";
}

// HTML to add:
/*
<h2>Shopping Cart</h2>

<form id="addItemForm" onsubmit="handleAddItem(event)">
  <div>
    <input type="text" id="itemName" placeholder="Item Name" required />
  </div>
  <div>
    <input type="number" id="itemPrice" placeholder="Price" step="0.01" required />
  </div>
  <div>
    <input type="number" id="itemQuantity" placeholder="Quantity" required />
  </div>
  <button type="submit">Add Item</button>
</form>

<form onsubmit="handleApplyCoupon(event)">
  <div>
    <input type="text" id="couponInput" placeholder="Enter coupon (e.g., SAVE20)" />
  </div>
  <button type="submit">Apply Coupon</button>
</form>

<p id="couponMessage"></p>
<div id="cartDisplay"></div>

<script src="q9_shopping_cart.js"></script>
*/
