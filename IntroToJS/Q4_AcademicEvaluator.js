const marks = [92, 88, 76, 85, 79];

let isDetained = false;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 35) {
    isDetained = true;
    break;
  }
}

const average = marks.reduce((a, b) => a + b, 0) / marks.length;

let result;
if (isDetained) {
  result = "Detained";
} else if (average >= 85) {
  result = "Promoted with Distinction";
} else if (average >= 50) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(result);
