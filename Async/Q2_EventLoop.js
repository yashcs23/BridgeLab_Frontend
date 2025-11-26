console.log("Start");

// Macrotask: setTimeout callback goes to macrotask queue
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: Promise.then() goes to microtask queue
Promise.resolve().then(() => {
  console.log("Promise.then() callback (microtask)");
});

// Synchronous code
console.log("Synchronous log");

console.log("End");

/*
PREDICTED OUTPUT:
1. Start
2. Synchronous log
3. End
4. Promise.then() callback (microtask)
5. setTimeout callback (macrotask)

EXPLANATION:
- JavaScript execution model has Call Stack, Microtask Queue, and Macrotask Queue
- Synchronous code runs first in the Call Stack
- After Call Stack is empty, the Event Loop checks Microtask Queue
- Microtasks (Promise callbacks, MutationObserver) execute BEFORE macrotasks
- Only after all Microtasks are done, Event Loop picks ONE macrotask
- This is why "Promise callback" logs before "setTimeout callback"

Why microtasks run first?
- Microtasks have higher priority in the Event Loop
- They represent immediate follow-up actions to completed operations
- setTimeout (macrotask) represents deferring to next event cycle
*/
