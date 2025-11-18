"use strict";

console.log("=== Q6: Pyramid Pattern Generator ===\n");

const rows = 4;

console.log("--- Using let ---");
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

console.log("\n--- Using var ---");
for (var i = 1; i <= rows; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

console.log(`\nFinal i value (var): ${i}, j value: ${j}`);
console.log("Note: var has function scope; let has block scope.");
