const departments = [
	["HR", 72],
	["Finance", 88],
	["Tech", 95],
	["Support", 63]
];

console.log("=== Employee Performance Evaluation ===\n");


let stats = { excellent: 0, good: 0, average: 0, needs: 0 };

departments.forEach(department => {
	let deptName = department[0];
	let score = department[1];
	let rating = "";

	if (score >= 90) {
		rating = "Excellent";
		stats.excellent++;
	} else if (score >= 75) {
		rating = "Good";
		stats.good++;
	} else if (score >= 60) {
		rating = "Average";
		stats.average++;
	} else {
		rating = "Needs Improvement";
		stats.needs++;
	}



	console.log(`${deptName.padEnd(12)} | Score: ${score} | ${symbol} ${rating}`);
});

console.log(`\n=== Performance Summary ===`);
console.log(`Excellent (≥90): ${stats.excellent}`);
console.log(`Good (75-89): ${stats.good}`);
console.log(`Average (60-74): ${stats.average}`);
console.log(`Needs Improvement (<60): ${stats.needs}`);

let overallAverage = departments.reduce((sum, dept) => sum + dept[1], 0) / departments.length;
console.log(`\nOverall Average Score: ${overallAverage.toFixed(1)}`);
