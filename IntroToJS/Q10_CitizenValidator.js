const age = 22;
const isCitizen = true;

let eligibility;
if (isCitizen && age >= 18) {
  eligibility = "Eligible for all services.";
} else if (isCitizen && age >= 18 && age <= 20) {
  eligibility = "Eligible to vote only.";
} else if (!isCitizen && age >= 18) {
  eligibility = "Only age criteria met.";
} else {
  eligibility = "Not eligible yet.";
}

console.log(eligibility);
