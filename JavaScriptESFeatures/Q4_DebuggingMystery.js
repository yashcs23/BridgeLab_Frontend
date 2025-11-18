"use strict";

console.log("=== Q4: Debugging Mystery ===\n");

function showMessage() {
  let greeting = "Welcome";
  console.log(greeting);
}

showMessage();

console.log("Fix: Added 'let' declaration. In strict mode, undeclared variables throw ReferenceError.");
console.log("Scope rule: Variables must be declared with var, let, or const before use.");
