// Helper: Delay with random duration (1-2 seconds)
function delay(ms = Math.random() * 1000 + 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Step 1: Take Order
async function takeOrder() {
  await delay();
  const success = Math.random() > 0.1;
  if (!success) throw new Error("Failed to take order");
  return "Order taken";
}

// Step 2: Prepare Food
async function prepare() {
  await delay();
  const success = Math.random() > 0.1;
  if (!success) throw new Error("Failed to prepare food");
  return "Food prepared";
}

// Step 3: Pack Order
async function pack() {
  await delay();
  const success = Math.random() > 0.1;
  if (!success) throw new Error("Failed to pack order");
  return "Package ready";
}

// Step 4: Dispatch
async function dispatch() {
  await delay();
  const success = Math.random() > 0.1;
  if (!success) throw new Error("Failed to dispatch");
  return "Out for delivery";
}

// Step 5: Deliver
async function deliver() {
  await delay();
  const success = Math.random() > 0.1;
  if (!success) throw new Error("Failed to deliver");
  return "Delivered";
}

// Main Pipeline
async function runPipeline() {
  const startTime = Date.now();
  
  console.log("🍕 FOOD DELIVERY SIMULATION\n");
  console.log("Start Pipeline\n");

  try {
    // Step 1: Take Order
    console.log("▶️  Step 1: Taking order...");
    const step1 = await takeOrder();
    console.log(`✅ Step 1: ${step1}\n`);

    // Step 2: Prepare Food
    console.log("▶️  Step 2: Preparing food...");
    const step2 = await prepare();
    console.log(`✅ Step 2: ${step2}\n`);

    // Step 3: Pack Order
    console.log("▶️  Step 3: Packing order...");
    const step3 = await pack();
    console.log(`✅ Step 3: ${step3}\n`);

    // Step 4: Dispatch
    console.log("▶️  Step 4: Dispatching...");
    const step4 = await dispatch();
    console.log(`✅ Step 4: ${step4}\n`);

    // Step 5: Deliver
    console.log("▶️  Step 5: Delivering...");
    const step5 = await deliver();
    console.log(`✅ Step 5: ${step5}\n`);

    // Success!
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log("🎉 Delivery completed!");
    console.log(`⏱️  Total time: ${duration} seconds`);

  } catch (error) {
    console.error(`\n❌ Pipeline failed: ${error.message}`);
    console.log("⚠️  Cancelling delivery...");
  }
}

/*
EVENT LOOP & ASYNC/AWAIT BEHAVIOR:
────────────────────────────────────────────────

1. CALL STACK:
   - runPipeline() is added to call stack
   - Each await pauses execution (returns control to Event Loop)
   - Resumes after Promise settles

2. MICROTASK QUEUE:
   - Each await resolution creates a microtask
   - All microtasks execute before next macrotask

3. EXECUTION FLOW:
   Sync: runPipeline() called → "Start Pipeline" logged
   
   Async Step 1:
   - takeOrder() runs (delay returns Promise)
   - await pauses execution
   - Event Loop: microtask for resolution added
   - When resolved, resume execution
   - Log success/failure, continue to Step 2
   
   ... repeat for Steps 2-5 ...

4. ERROR HANDLING:
   - If any step throws, catch block executes
   - try/catch wraps entire pipeline
   - Prevents uncaught promise rejection

5. SEQUENCING:
   - Each step waits for previous (sequential)
   - NOT parallel (would use Promise.all())
   - Perfect for order-dependent processes
*/

runPipeline();
