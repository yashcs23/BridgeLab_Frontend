class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department} department`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} (Manager) is leading a team of ${this.teamSize} in ${this.department} department`;
  }
}

// Create objects
const emp1 = new Employee('John', 'IT');
const emp2 = new Employee('Sarah', 'HR');
const mgr1 = new Manager('David', 'Sales', 5);

// Runtime polymorphism
console.log(emp1.work());
console.log(emp2.work());
console.log(mgr1.work());

console.log('\nRuntime Polymorphism: Manager overrides work() method while inheriting from Employee');
