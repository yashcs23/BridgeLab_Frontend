function greetUser(name, callback) {
	console.log(`Hello ${name}`);
	callback();
}

function showEndMessage() {
	console.log("Welcome to the course!");
}

// Demonstrate callback flow
greetUser("Alice", showEndMessage);
greetUser("Bob", () => console.log("Welcome to the course!"));
