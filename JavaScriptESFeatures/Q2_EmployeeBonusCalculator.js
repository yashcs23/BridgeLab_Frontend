"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Q2: Employee Bonus Calculator ===\n");

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) throw new Error("Invalid salary or years");

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    const total = salary + bonus;

    console.log(`${emp.name}: Salary ₹${salary}, Years ${years}, Bonus ₹${bonus.toFixed(2)}, Total ₹${total.toFixed(2)}`);
  } catch (e) {
    console.log(`Error processing ${employees[i]?.name || "Employee"}: ${e.message}`);
  }
}
