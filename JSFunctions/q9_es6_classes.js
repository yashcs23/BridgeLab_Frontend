// ES6 Class: Person
class Person {
	constructor(name) {
		this.name = name;
	}

	printName() {
		console.log(`Name: ${this.name}`);
	}
}

// ES6 Class: Student (inherits from Person)
class Student extends Person {
	constructor(name, branch) {
		super(name); // Call parent constructor
		this.branch = branch;
	}

	printDetails() {
		console.log(`Name: ${this.name}, Branch: ${this.branch}`);
	}
}

// Create instance and test
const student = new Student("Diana", "Electronics");

console.log("ES6 Class inheritance:");
student.printName(); // Name: Diana
student.printDetails(); // Name: Diana, Branch: Electronics

// Comparison with prototype version from Q5
console.log("\nComparison: Both versions behave identically");
console.log("ES6 classes are syntactic sugar over prototype-based inheritance");
console.log("Classes provide cleaner, more readable syntax");
console.log("Both achieve the same prototype chain under the hood");

// Verify inheritance
console.log("\nInstanceof checks:");
console.log("student instanceof Student:", student instanceof Student); // true
console.log("student instanceof Person:", student instanceof Person); // true
