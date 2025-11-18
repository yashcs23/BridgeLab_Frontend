console.log("=== Q10: Nested Hoisting and Closures (FIXED) ===\n");

function outer() {
  var count;
  console.log("outer count (before assignment):", count);
  count = 5;
  
  function inner() {
    var count;
    console.log("inner count (before assignment):", count);
    count = 10;
    console.log("inner count (after assignment):", count);
  }
  inner();
  console.log("outer count (after inner call):", count);
}

outer();

console.log("\n--- ARROW FUNCTION VERSION ---");

function outerArrow() {
  var count;
  console.log("outer count (arrow before):", count);
  count = 5;

  const innerArrow = () => {
    var count;
    console.log("inner count (arrow before):", count);
    count = 10;
    console.log("inner count (arrow after):", count);
  };
  innerArrow();
  console.log("outer count (arrow after):", count);
}

outerArrow();

console.log("\nExplanation: Each function creates its own var count in its scope.");
console.log("Arrow functions have same hoisting behavior as regular functions for var.");
