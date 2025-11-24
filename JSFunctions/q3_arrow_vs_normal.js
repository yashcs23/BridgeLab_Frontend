// Problem: Arrow function doesn't bind 'this'
const user = {
	name: "Alice",
	showName: () => {
		console.log(this.name); // undefined - 'this' is global scope
	}
};

console.log("Arrow function result:");
user.showName(); // undefined

// Solution: Use normal function
const userFixed = {
	name: "Bob",
	showName: function() {
		console.log(this.name); // "Bob" - 'this' refers to object
	}
};

console.log("\nNormal function result:");
userFixed.showName(); // "Bob"

console.log("\nExplanation:");
console.log("Arrow functions inherit 'this' from enclosing scope (global/window)");
console.log("Normal functions bind 'this' to the object they're called on");
