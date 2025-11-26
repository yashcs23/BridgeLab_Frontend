const menuItems = [
  { name: 'Burger', price: 250 },
  { name: 'Pizza', price: 500 },
  { name: 'Fries', price: 150 },
  { name: 'Coke', price: 80 }
];

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(itemName => {
      const item = menuItems.find(m => m.name === itemName);
      if (!item) throw new Error(`Invalid item: ${itemName} not found in menu`);
      return item.price;
    });

    const total = prices.reduce((sum, price) => sum + price, 0);
    return total;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

// Test cases
console.log('Order 1 (valid):', calculateBill(['Burger', 'Coke'])); // 330
console.log('Order 2 (valid):', calculateBill(['Pizza', 'Fries', 'Coke'])); // 730
console.log('Order 3 (invalid):', calculateBill(['Burger', 'Sandwich'])); // Error message
