class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercent) {
    this.price -= (this.price * discountPercent) / 100;
    return this.price;
  }

  displayDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

// Create products
const products = [
  new Product(1, "Laptop", 80000, "Electronics"),
  new Product(2, "Headphones", 5000, "Electronics"),
  new Product(3, "Watch", 15000, "Accessories"),
  new Product(4, "Phone", 50000, "Electronics"),
  new Product(5, "Shoes", 3000, "Fashion"),
];

// Display all products
console.log("=== All Products ===");
products.forEach(p => console.log(p.displayDetails()));

// Filter and display products with price > 1000
console.log("\n=== Products with Price > ₹1000 ===");
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));

// Apply discount to a product
console.log("\n=== After 10% Discount on Laptop ===");
products[0].applyDiscount(10);
console.log(products[0].displayDetails());
