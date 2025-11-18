"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTx = [];
const invalidTx = [];

console.log("=== Q3: Transaction Validator ===\n");

for (let i = 0; i < transactions.length; i++) {
  try {
    const tx = transactions[i];

    if (tx === null) throw new Error("Null entry");
    if (tx.id === undefined) throw new Error("Missing id");
    if (tx.amount === undefined) throw new Error("Missing amount");
    if (tx.amount < 0) throw new Error("Negative amount");

    validTx.push(tx);
    console.log(`✓ TX ${tx.id}: ₹${tx.amount}`);
  } catch (e) {
    invalidTx.push({ index: i, error: e.message });
    console.log(`✗ TX [${i}]: ${e.message}`);
  }
}

console.log(`\n--- SUMMARY ---`);
console.log(`Valid: ${validTx.length} | Invalid: ${invalidTx.length}`);
console.log(`Success Rate: ${((validTx.length / transactions.length) * 100).toFixed(1)}%`);
