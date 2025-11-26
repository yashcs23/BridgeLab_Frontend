// Original callback-based function (for reference)
function fetchBugsCallback(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// New Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    // Simulate random API failure (20% chance)
    const hasError = Math.random() < 0.2;
    
    setTimeout(() => {
      if (hasError) {
        reject("Error: Failed to fetch bugs from server");
      } else {
        const bugs = ["UI glitch", "API timeout", "Login failure"];
        resolve(bugs);
      }
    }, 1000);
  });
}

// Usage: Call the Promise-based function
console.log("Fetching bugs from tracker...\n");

getBugs()
  .then((bugs) => {
    console.log("🐛 All Bugs Found:\n");
    console.table(bugs);
    console.log(`\n✓ Total bugs: ${bugs.length}`);
  })
  .catch((error) => {
    console.error(`❌ ${error}`);
  });
