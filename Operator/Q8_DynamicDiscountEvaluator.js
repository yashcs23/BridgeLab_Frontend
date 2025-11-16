const cart = [
	{ item: "Laptop", category: "electronics", price: 45000 },
	{ item: "Shoes", category: "fashion", price: 2500 },
	{ item: "Book", category: "education", price: 600 }
];

console.log("=== Original Cart ===");
let totalBeforeDiscount = 0;

cart.forEach(product => {
	console.log(`${product.item}: ₹${product.price} (${product.category})`);
	totalBeforeDiscount += product.price;
});

console.log(`\nSubtotal: ₹${totalBeforeDiscount}`);

let cartAfterCategoryDiscount = cart.map(product => {
	let discount = 0;
	if (product.category === "electronics") discount = 0.10;
	else if (product.category === "fashion") discount = 0.05;
	
	let discountedPrice = product.price * (1 - discount);
	return { ...product, discount: discount * 100, discountedPrice };
});

console.log(`\n=== After Category Discounts ===`);
let totalAfterCategoryDiscount = cartAfterCategoryDiscount.reduce((sum, product) => {
	console.log(`${product.item}: ₹${product.discountedPrice} (-${product.discount}%)`);
	return sum + product.discountedPrice;
}, 0);

let extraDiscount = 0;
let finalTotal = totalAfterCategoryDiscount;

if (totalBeforeDiscount > 50000) {
	extraDiscount = totalAfterCategoryDiscount * 0.05;
	finalTotal = totalAfterCategoryDiscount - extraDiscount;
	console.log(`\n Cart exceeds ₹50000! Extra 5% discount applied`);
}

console.log(`\n=== Final Bill ===`);
console.log(`After Category Discounts: ${totalAfterCategoryDiscount.toFixed(2)}`);
console.log(`Extra Discount (5%): ${extraDiscount.toFixed(2)}`);
console.log(`Final Total: ${finalTotal.toFixed(2)}`);
console.log(`Total Savings: ${(totalBeforeDiscount - finalTotal).toFixed(2)}`);
