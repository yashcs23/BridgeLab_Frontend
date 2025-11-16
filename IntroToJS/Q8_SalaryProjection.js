const currentSalary = 500000;
const incrementRate = 8;

const projection = [];
let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
  projection.push({ Year: year, Salary: Math.round(salary) });
  salary += (salary * incrementRate) / 100;
}

console.table(projection);
