// Parent constructor
function Person(name) {
	this.name = name;
}

Person.prototype.printName = function() {
	console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
	Person.call(this, name); // Call parent constructor
	this.branch = branch;
}

// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add Student-specific method
Student.prototype.printDetails = function() {
	console.log(`Name: ${this.name}, Branch: ${this.branch}`);
};

// Create instance
const student = new Student("Charlie", "Computer Science");

console.log("Prototype chain demonstration:");
student.printName(); // Name: Charlie (inherited)
student.printDetails(); // Name: Charlie, Branch: Computer Science

console.log("\nPrototype chain:", Object.getPrototypeOf(student) === Student.prototype);
console.log("Student inherits from Person:", Object.getPrototypeOf(Student.prototype) === Person.prototype);
