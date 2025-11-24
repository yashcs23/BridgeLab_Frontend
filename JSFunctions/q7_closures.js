function makeMultiplier(multiplier) {
	// Inner function 'multiply' has access to 'multiplier' parameter
	// This creates a closure
	return function(number) {
		return number * multiplier;
	};
}

// Create specialized multiplier functions
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log("Closure examples:");
console.log(`triple(5) = ${triple(5)}`); // 15
console.log(`double(10) = ${double(10)}`); // 20
console.log(`quadruple(3) = ${quadruple(3)}`); // 12

console.log("\nHow closure works:");
console.log("1. makeMultiplier(3) creates a function with 'multiplier' = 3");
console.log("2. The returned function remembers 'multiplier' in its closure");
console.log("3. Each call to triple() accesses the closed-over 'multiplier' variable");
console.log("4. This allows data persistence without global variables");
