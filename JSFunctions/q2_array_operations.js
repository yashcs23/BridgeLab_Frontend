function applyOperation(numbers, operation) {
	return numbers.map(operation);
}

// Double each number
const doubled = applyOperation([1, 2, 3, 4], num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8]

// Square each number
const squared = applyOperation([1, 2, 3, 4], num => num * num);
console.log("Squared:", squared); // [1, 4, 9, 16]
