// Level 1: Person
function Person(name) {
	this.name = name;
}

Person.prototype.printName = function() {
	console.log(`Name: ${this.name}`);
};

// Level 2: Faculty
function Faculty(name, department) {
	Person.call(this, name);
	this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.printDepartment = function() {
	console.log(`Department: ${this.department}`);
};

// Level 3: Professor
function Professor(name, department, specialization) {
	Faculty.call(this, name, department);
	this.specialization = specialization;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.printSpecialization = function() {
	console.log(`Specialization: ${this.specialization}`);
};

// Create Professor instance
const prof = new Professor("Dr. Smith", "Engineering", "AI & ML");

console.log("Prototype chain: Person → Faculty → Professor");
prof.printName(); // Name: Dr. Smith (from Person)
prof.printDepartment(); // Department: Engineering (from Faculty)
prof.printSpecialization(); // Specialization: AI & ML (from Professor)

console.log("\nPrototype chain verification:");
console.log("prof → Professor → Faculty → Person → Object");
