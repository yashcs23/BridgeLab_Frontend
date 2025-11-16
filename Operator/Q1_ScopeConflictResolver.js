let bonus = 5000;

function calculateSalary() {
	let salary = 40000;
	let isPermanent = true;

	let totalSalary = isPermanent ? salary + bonus : salary;

	console.log(`Salary: ${salary}`);
	console.log(`Bonus: ${isPermanent ? bonus : 0}`);
	console.log(`Total Salary: ${totalSalary}`);
	console.log(`Global Bonus Value: ${bonus}`);
}

console.log("=== Test 1: isPermanent = true ===");
calculateSalary();

function calculateSalaryContractual() {
	let salary = 40000;
	let isPermanent = false;

	let totalSalary = isPermanent ? salary + bonus : salary;
	console.log("\n=== Test 2: isPermanent = false ===");
	console.log(`Salary: ${salary}`);
	console.log(`Bonus: ${isPermanent ? bonus : 0}`);
	console.log(`Total Salary: ${totalSalary}`);
	console.log(`Global Bonus remains unchanged: ${bonus}`);
}

calculateSalaryContractual();
