class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    return 'F';
  }
}

// Test for 3 students
const student1 = new Student('Alice', [85, 90, 88, 92]);
const student2 = new Student('Bob', [75, 78, 82, 80]);
const student3 = new Student('Charlie', [95, 93, 97, 96]);

console.log(`${student1.name}: Avg = ${student1.calculateAverage().toFixed(2)}, Grade = ${student1.getGrade()}`);
console.log(`${student2.name}: Avg = ${student2.calculateAverage().toFixed(2)}, Grade = ${student2.getGrade()}`);
console.log(`${student3.name}: Avg = ${student3.calculateAverage().toFixed(2)}, Grade = ${student3.getGrade()}`);
