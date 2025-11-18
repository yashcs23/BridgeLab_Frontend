"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

console.log("=== Q7: Smart Calculator ===\n");

const results = [];

for (let op of operations) {
  try {
    let result;
    switch (op) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "divide":
        if (num2 === 0) throw new Error("Division by zero");
        result = num1 / num2;
        break;
      case "power":
        result = Math.pow(num1, num2);
        break;
      case "root":
        if (num1 < 0) throw new Error("Root of negative number");
        result = Math.sqrt(num1);
        break;
      default:
        throw new Error("InvalidOperationError");
    }
    results.push({ operation: op, result: result.toFixed(2), status: "✓" });
    console.log(`${op}: ${result.toFixed(2)} ✓`);
  } catch (e) {
    results.push({ operation: op, error: e.message, status: "✗" });
    console.log(`${op}: ${e.message} ✗`);
  }
}

console.log("\n--- SUMMARY ---");
console.log(`Successful: ${results.filter(r => r.status === "✓").length} | Failed: ${results.filter(r => r.status === "✗").length}`);
