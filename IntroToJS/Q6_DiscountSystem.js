const totalPurchase = 7500;

let discountPercent = 0;
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
}

const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = totalPurchase - discountAmount;

console.log(`Original Total: ${totalPurchase}`);
console.log(`Discount Percentage: ${discountPercent}%`);
console.log(`Final Price: ${Math.round(finalPrice)}`);
