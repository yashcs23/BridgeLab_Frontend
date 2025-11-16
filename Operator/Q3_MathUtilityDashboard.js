let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`=== Math Utility Dashboard ===\n`);
console.log(`Original Number: ${x}`);
console.log(`Rounded Value: ${rounded}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x³): ${power.toFixed(2)}`);
console.log(`Random (10-50): ${randomNum}`);

let summary = `
Scientific Calculator Result
Input: ${x}
Rounded: ${rounded}
Square Root (√x): ${squareRoot.toFixed(2)}
Cube (x³): ${power.toFixed(2)}
Random: ${randomNum}
`;
