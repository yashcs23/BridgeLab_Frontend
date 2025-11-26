function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

// Create 3 products
const product1 = new Product('Laptop', 50000);
const product2 = new Product('Phone', 20000);
const product3 = new Product('Headphones', 5000);

console.log(`${product1.name}: Original = ${product1.price}, After 10% discount = ${product1.applyDiscount(10)}`);
console.log(`${product2.name}: Original = ${product2.price}, After 15% discount = ${product2.applyDiscount(15)}`);
console.log(`${product3.name}: Original = ${product3.price}, After 20% discount = ${product3.applyDiscount(20)}`);

// Abstraction benefit: applyDiscount() encapsulates discount logic, simplifying code
console.log('\nAbstraction Benefits:');
console.log('- Discount calculation is centralized in prototype method');
console.log('- Reusable for all Product instances');
console.log('- Easy to modify discount logic in one place');
