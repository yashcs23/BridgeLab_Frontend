const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 5 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 500, stock: 2 },
  { id: 3, name: 'Desk', category: 'Furniture', price: 10000, stock: 8 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 5000, stock: 1 },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 15000, stock: 3 }
];

function getLowStockProducts(lowStockThreshold = 3) {
  return products.filter(p => p.stock <= lowStockThreshold);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

function groupByCategory() {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});
}

// Test
console.log('Low Stock Products:', getLowStockProducts(3));
console.log('\nProducts Sorted by Price:', sortProductsByPrice());
console.log('\nTotal Inventory Value: ₹' + calculateTotalInventoryValue());
console.log('\nGrouped by Category:', groupByCategory());
