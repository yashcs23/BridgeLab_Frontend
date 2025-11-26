console.log("=== PREDICTING EXECUTION ORDER ===\n");

console.log("📝 PREDICTED OUTPUT:");
console.log("1. Script start");
console.log("2. Script end");
console.log("3. Promise callback");
console.log("4. Timeout callback");

console.log("\n📊 ACTUAL OUTPUT:\n");

// Now run the actual code
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

console.log("\n\n📖 EXPLANATION:\n");

console.log(`
The Event Loop has THREE main components:
1. CALL STACK - Executes synchronous code
2. MICROTASK QUEUE - Promises, MutationObserver, queueMicrotask()
3. MACROTASK QUEUE - setTimeout, setInterval, setImmediate, I/O

EXECUTION FLOW:
─────────────────────────────────────────────

Step 1: Execute ALL synchronous code first
  ✓ "Script start" logged
  ✓ setTimeout callback added to MACROTASK queue
  ✓ Promise.then() added to MICROTASK queue
  ✓ "Script end" logged

Step 2: Call Stack is empty, check MICROTASK queue
  ✓ Execute ALL microtasks
  ✓ "Promise callback" logged

Step 3: Call Stack is empty, check MACROTASK queue
  ✓ Execute ONE macrotask
  ✓ "Timeout callback" logged

WHY MICROTASKS RUN BEFORE MACROTASKS?
─────────────────────────────────────────────
- Microtasks represent immediate continuations
- Promises need to resolve in the same event cycle
- setTimeout is explicitly for NEXT event cycle (even with 0ms)
- Event Loop priority: Sync → Microtasks → Macrotasks
- This ensures Promise chains complete before other tasks

Real-world analogy:
- Synchronous code = Current task in hand
- Microtasks = Urgent follow-ups (check immediately after)
- Macrotasks = Schedule for next time slot
`);
