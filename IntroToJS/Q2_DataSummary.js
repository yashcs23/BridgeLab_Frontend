const stringData = "JavaScript";
const numberData = 42;
const booleanData = true;
const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: "Yash", age: 25 };
const nullData = null;
const undefinedData = undefined;

const report = [
  { Label: "String", Value: stringData, Type: typeof stringData },
  { Label: "Number", Value: numberData, Type: typeof numberData },
  { Label: "Boolean", Value: booleanData, Type: typeof booleanData },
  { Label: "Array", Value: arrayData.toString(), Type: Array.isArray(arrayData) ? "array" : typeof arrayData },
  { Label: "Object", Value: JSON.stringify(objectData), Type: typeof objectData },
  { Label: "Null", Value: nullData, Type: typeof nullData },
  { Label: "Undefined", Value: undefinedData, Type: typeof undefinedData }
];

console.table(report);
