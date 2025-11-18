"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

console.log("=== Q9: JSON Audit ===\n");

const validEntries = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    const parsed = JSON.parse(rawData[i]);

    if (!parsed.user || !parsed.age) {
      throw new Error("Missing keys (user/age)");
    }

    const age = Number(parsed.age);
    if (isNaN(age)) throw new Error("Age is not a number");

    if (age >= 18) {
      validEntries.push({ user: parsed.user, age: age });
      console.log(`✓ [${i}] ${parsed.user}, Age: ${age}`);
    }
  } catch (e) {
    errors.push({ line: i, error: e.message });
    console.log(`✗ [${i}] ${e.message}`);
  }
}

console.log(`\n--- SUMMARY ---`);
console.log(`Valid 18+: ${validEntries.length}`);
console.log(`Parse Errors: ${errors.length}`);
validEntries.forEach(v => console.log(`  • ${v.user} (${v.age})`));
