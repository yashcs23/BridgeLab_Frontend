// Step 1: Boil water
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random failure (10% chance)
      if (Math.random() > 0.1) {
        console.log("✓ Water boiled");
        resolve("Hot water ready");
      } else {
        reject("Error: Water boiler malfunction!");
      }
    }, 1000);
  });
}

// Step 2: Brew coffee
function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("✓ Coffee brewed");
        resolve("Coffee brewed");
      } else {
        reject("Error: Coffee maker broke!");
      }
    }, 1500);
  });
}

// Step 3: Pour into cup
function pourCoffee(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("✓ Coffee poured into cup");
        resolve("Coffee ready");
      } else {
        reject("Error: Cup broke!");
      }
    }, 1000);
  });
}

// Execute the coffee process using Promise chaining
boilWater()
  .then((result) => {
    console.log(`Step 1: ${result}`);
    return brewCoffee(result);
  })
  .then((result) => {
    console.log(`Step 2: ${result}`);
    return pourCoffee(result);
  })
  .then((result) => {
    console.log(`Step 3: ${result}`);
    console.log("☕ Coffee ready for the team!");
  })
  .catch((error) => {
    console.error(`❌ ${error}`);
  });
