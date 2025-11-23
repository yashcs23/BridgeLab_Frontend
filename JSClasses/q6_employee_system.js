class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    const bonusAmount = (this.salary * percent) / 100;
    return bonusAmount;
  }

  displayDetails() {
    return `${this.id} | ${this.name} | ${this.department} | Monthly: ₹${this.salary} | Annual: ₹${this.getAnnualSalary()}`;
  }
}

// Create 5 employees
const employees = [
  new Employee(101, "Raj Kumar", "IT", 50000),
  new Employee(102, "Priya Singh", "HR", 40000),
  new Employee(103, "Amit Patel", "Finance", 60000),
  new Employee(104, "Neha Gupta", "IT", 55000),
  new Employee(105, "Rohan Sharma", "Sales", 45000),
];

// Display all employees with annual salary
console.log("=== Employee Details ===");
employees.forEach(emp => console.log(emp.displayDetails()));

// Calculate total annual payout using reduce
const totalAnnualPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`\nTotal Annual Payout: ₹${totalAnnualPayout}`);

// Apply bonus and display
console.log("\n=== Bonus (10%) ===");
employees.forEach(emp => {
  console.log(`${emp.name}: ₹${emp.applyBonus(10)}`);
});

// Calculate total bonus amount
const totalBonus = employees.reduce((total, emp) => total + emp.applyBonus(10), 0);
console.log(`\nTotal Bonus Amount: ₹${totalBonus}`);
