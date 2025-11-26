console.log("=== CALLBACK HELL VERSION ===\n");

// Version 1: Callback Hell (Pyramid of Doom)
function callbackHellPipeline() {
  console.log("Starting pipeline with callbacks...\n");

  // Stage 1: Design
  setTimeout(() => {
    console.log("Step 1: Design complete");

    // Stage 2: Build
    setTimeout(() => {
      console.log("Step 2: Build complete");

      // Stage 3: Test
      setTimeout(() => {
        console.log("Step 3: Test complete");

        // Stage 4: Deploy
        setTimeout(() => {
          console.log("Step 4: Deploy complete");

          // Stage 5: Celebrate
          setTimeout(() => {
            console.log("Step 5: Celebrate! 🎉");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

callbackHellPipeline();

// Wait before showing async/await version
setTimeout(async () => {
  console.log("\n=== ASYNC/AWAIT VERSION ===\n");

  // Helper: Create a Promise-based delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Version 2: Async/Await (Clean and readable)
  async function asyncAwaitPipeline() {
    try {
      console.log("Starting pipeline with async/await...\n");

      await delay(1000);
      console.log("Step 1: Design complete");

      await delay(1000);
      console.log("Step 2: Build complete");

      await delay(1000);
      console.log("Step 3: Test complete");

      await delay(1000);
      console.log("Step 4: Deploy complete");

      await delay(1000);
      console.log("Step 5: Celebrate! 🎉");
    } catch (error) {
      console.error("Pipeline failed:", error);
    }
  }

  await asyncAwaitPipeline();

  console.log("\n📝 WHY ASYNC/AWAIT IS BETTER:");
  console.log("1. Linear, top-to-bottom flow - reads like synchronous code");
  console.log("2. Easier to debug - stack traces are meaningful");
  console.log("3. Better error handling with try/catch instead of nested .catch()");
  console.log("4. Eliminates 'Pyramid of Doom' - code stays left-aligned");
  console.log("5. Cleaner variable scope - no callback closure issues");
}, 6000);
