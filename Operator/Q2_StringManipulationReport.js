let productName = "  wireless headphones PRO  ";

console.log(`Original: "${productName}"`);
console.log(`Length: ${productName.length}`);

let trimmed = productName.trim();
console.log(`\nAfter trim: "${trimmed}"`);

let lowercased = trimmed.toLowerCase();

let capitalized = lowercased
	.split(" ")
	.map(word => word.charAt(0).toUpperCase() + word.slice(1))
	.join(" ");

console.log(`After capitalize: "${capitalized}"`);

let finalTitle = capitalized.replace("pro", "Pro Edition");

console.log(`\n=== Final Result ===`);
console.log(`Cleaned Title: "${finalTitle}"`);
console.log(`Final Length: ${finalTitle.length}`);
