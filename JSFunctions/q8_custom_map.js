// Add custom myMap method to Array prototype
Array.prototype.myMap = function(callback) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(callback(this[i], i, this));
	}
	return result;
};

console.log("Custom myMap() prototype method:");

// Example 1: Double each number
const doubled = [1, 2, 3].myMap(num => num * 2);
console.log("Doubled [1,2,3]:", doubled); // [2, 4, 6]

// Example 2: Square each number
const squared = [1, 2, 3, 4].myMap(num => num * num);
console.log("Squared [1,2,3,4]:", squared); // [1, 4, 9, 16]

// Example 3: Extract strings
const names = ["Alice", "Bob", "Charlie"].myMap((name, index) => `${index + 1}. ${name}`);
console.log("With index:", names); // ['1. Alice', '2. Bob', '3. Charlie']

console.log("\nVerification that myMap works like built-in map:");
const test = [5, 10, 15];
console.log("myMap result:", test.myMap(x => x / 5)); // [1, 2, 3]
console.log("map result:", test.map(x => x / 5)); // [1, 2, 3]
