// submitOrder() returns a Promise that fails 50% of the time
function submitOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve(`Order ${orderId} submitted successfully`);
      } else {
        reject(`Order ${orderId} submission failed`);
      }
    }, 500);
  });
}

// processOrder() with retry logic (up to 3 attempts)
async function processOrder(orderId, maxAttempts = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt}: Submitting order...`);
      const result = await submitOrder(orderId);
      console.log(`Attempt ${attempt}: ✅ ${result}`);
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${attempt}: ❌ Failed - ${error}`);
      
      // Don't log for last attempt yet
      if (attempt < maxAttempts) {
        console.log(`Retrying...\n`);
      }
    }
  }
  
  // All attempts failed
  throw new Error(`Order could not be processed after ${maxAttempts} attempts`);
}

// Main execution with error handling
async function main() {
  console.log("🛍️  Starting order processing system\n");
  
  try {
    console.log("Processing Order #12345\n");
    const result = await processOrder("12345");
    console.log(`\n✅ Final Result: ${result}`);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
  }
  
  console.log("\n" + "=".repeat(50) + "\n");
  
  try {
    console.log("Processing Order #67890\n");
    const result = await processOrder("67890");
    console.log(`\n✅ Final Result: ${result}`);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
  }
}

main();
