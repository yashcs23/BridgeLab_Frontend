// Server A responds in 2 seconds
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        resolve("Server A responded (2s)");
      } else {
        reject("Server A failed");
      }
    }, 2000);
  });
}

// Server B responds in 3 seconds
function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        resolve("Server B responded (3s)");
      } else {
        reject("Server B failed");
      }
    }, 3000);
  });
}

console.log("🚀 Deployment in progress...\n");

// Promise.all() - Wait for ALL servers to respond
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("✓ Deployment completed for all servers");
    console.log(results);
  })
  .catch((error) => {
    console.error(`❌ ${error}`);
  });

// Promise.race() - Wait for FIRST server to respond
Promise.race([serverA(), serverB()])
  .then((result) => {
    console.log("\n⚡ Fastest response:", result);
  })
  .catch((error) => {
    console.error(`❌ ${error}`);
  });
