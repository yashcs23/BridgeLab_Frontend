let scores = [];
for (let i = 0; i < 8; i++) {
	scores.push(Math.floor(Math.random() * 71) + 30);
}

console.log(`Student Scores: [${scores.join(", ")}]\n`);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

let passed = scores.filter(score => score >= 50).length;

console.log(`=== Performance Analysis ===`);
console.log(`Total Students: ${scores.length}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Passed (≥50): ${passed}`);
console.log(`Failed (<50): ${scores.length - passed}`);
console.log(`Pass Rate: ${((passed / scores.length) * 100).toFixed(1)}%`);

console.log(`\n=== Grade Distribution ===`);
scores.forEach((score, index) => {
	let grade = score >= 80 ? "A" : score >= 60 ? "B" : "C";
	console.log(`Student ${index + 1}: ${score} (Grade: ${grade})`);
});
