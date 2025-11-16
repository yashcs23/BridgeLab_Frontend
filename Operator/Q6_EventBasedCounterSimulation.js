let count = 0;

function increment() {
	count++;
	console.log(`[+] Count increased: ${count}`);
	
	function logCountStatus() {
		console.log(`   Status: Count value is ${count}`);
	}
	logCountStatus();
}

function decrement() {
	count--;
	console.log(`[-] Count decreased: ${count}`);

	function logCountStatus() {
		console.log(`   Status: Count value is ${count}`);
	}
	logCountStatus();
}

console.log("=== Counter Simulation ===");
console.log(`Initial Count: ${count}\n`);

console.log("--- Simulating Clicks ---");
increment();
increment();
increment();
decrement();
increment();
decrement();
decrement();

console.log(`\nFinal Count: ${count}`);
