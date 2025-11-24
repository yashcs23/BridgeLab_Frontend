function Car(brand, model) {
	this.brand = brand;
	this.model = model;
}

// Add method to prototype - shared across all instances
Car.prototype.getDetails = function() {
	console.log(`Car: ${this.brand} ${this.model}`);
};

// Create two car objects
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

// Call prototype method
car1.getDetails(); // Car: Toyota Camry
car2.getDetails(); // Car: Honda Civic

console.log("\nMethod sharing via prototype:");
console.log("car1.getDetails === car2.getDetails:", car1.getDetails === car2.getDetails); // true
