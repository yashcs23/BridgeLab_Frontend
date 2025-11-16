let results = [];

for (let i = 1; i <= 30; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		results.push("FizzBuzz");
	} else if (i % 2 === 0) {
		results.push("Even");
	} else {
		results.push("Odd");
	}
}

console.log("=== Number Classification (1-30) ===\n");

for (let i = 0; i < 30; i++) {
	let num = i + 1;
	let classification = results[i];
	
	let symbol = classification === "FizzBuzz" ? "" :
	             classification === "Even" ? "" : "";
	
	console.log(`${num.toString().padStart(2)}: ${symbol} ${classification}`);
	
	if ((i + 1) % 10 === 0) console.log("---");
}

console.log(`\n=== Summary ===`);
let fizzBuzzCount = results.filter(r => r === "FizzBuzz").length;
let evenCount = results.filter(r => r === "Even").length;
let oddCount = results.filter(r => r === "Odd").length;

console.log(`FizzBuzz (divisible by 3 & 5): ${fizzBuzzCount}`);
console.log(`Even: ${evenCount}`);
console.log(`Odd: ${oddCount}`);
