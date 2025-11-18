console.log("=== Q8: Strict Mode Showdown ===\n");

console.log("--- WITHOUT 'use strict' (Non-strict mode) ---");
function demoNonStrict(a, a) {
  total = 10;
  delete total;
}

try {
  demoNonStrict(5, 10);
  console.log("No error thrown. Duplicate parameters allowed, implicit global created, delete succeeded.");
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log("\n--- WITH 'use strict' (Strict mode) ---");

function demoStrict(a, b) {
  let total = 10;
}

try {
  demoStrict(5, 10);
  console.log("✓ Correct: Unique parameters, declared variable, no implicit globals.");
} catch (e) {
  console.log(`Error: ${e.message}`);
}

console.log("\nDifferences:");
console.log("1. Duplicate params: Non-strict allows, strict forbids");
console.log("2. Implicit globals: Non-strict creates, strict throws ReferenceError");
console.log("3. Delete operator: Non-strict may succeed, strict forbids on variables");
