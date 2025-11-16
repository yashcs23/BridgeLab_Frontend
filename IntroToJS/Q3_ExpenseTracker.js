const expenses = [5000, 3500, 12000, 2500, 1500];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

const average = total / expenses.length;
total += total * 0.1;

console.log(`Total Expenses: ${(total - total * 0.1).toFixed(2)}`);
console.log(`Average Expense: ${average.toFixed(2)}`);
console.log(`Final Amount After 10% Tax: ${total.toFixed(2)}`);
