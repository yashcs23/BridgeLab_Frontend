let feedback = "Great product! Fast delivery and amazing sound quality!";

console.log(`Feedback: "${feedback}"`);

let wordCount = feedback.split(" ").length;
console.log(`Word Count: ${wordCount}`);

let hasNegative = feedback.toLowerCase().includes("bad") || 
                  feedback.toLowerCase().includes("poor");

console.log(`\n=== Analysis Result ===`);

if (!hasNegative) {
	console.log(" Positive Feedback");
	console.log("Sentiment: This review is positive");
} else {
	console.log(" Needs Improvement");
	console.log("Sentiment: This review needs attention");
}

// Additional analysis
console.log(`\nDetails:`);
console.log(`- Contains "bad": ${feedback.toLowerCase().includes("bad")}`);
console.log(`- Contains "poor": ${feedback.toLowerCase().includes("poor")}`);
console.log(`- Contains "great": ${feedback.toLowerCase().includes("great")}`);
console.log(`- Contains "amazing": ${feedback.toLowerCase().includes("amazing")}`);
