const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("=== Q1: Dynamic Data Parser ===\n");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const num = Number(value);
  const bool = Boolean(value);
  const str = String(value);

  if (!isNaN(num) && value !== " " && !String(value).includes("px")) {
    validNumbers.push(num);
    console.log(`[${i}] Value: ${str} | Number: ${num} | Boolean: ${bool} | String: ${str} ✓`);
  } else {
    invalidNumbers.push({ value, reason: isNaN(num) ? "NaN" : value === " " ? "Empty Space" : "Contains non-numeric" });
    console.log(`[${i}] Value: ${str} | Invalid ✗`);
  }
}

console.log("\n--- REPORT ---");
console.log(`Valid Numbers: [${validNumbers.join(", ")}]`);
console.log(`Invalid Count: ${invalidNumbers.length}`);
invalidNumbers.forEach((inv, i) => {
  console.log(`  ${i + 1}. ${inv.value === null ? "null" : inv.value === undefined ? "undefined" : inv.value} - ${inv.reason}`);
});
