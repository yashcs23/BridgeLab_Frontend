console.log("=== Q5: Hoisting Lab (FIXED VERSION) ===\n");

var score;
function announce() {
  console.log("Game started");
}
let status;
function startGame() {
  console.log(status);
}

console.log(score);
announce();
score = 50;
status = "ready";
startGame();

console.log("\n--- ARROW FUNCTION VERSION ---");

const announceArrow = () => {
  console.log("Game started (arrow)");
};

const startGameArrow = () => {
  console.log("ready (arrow)");
};

console.log(score);
announceArrow();
startGameArrow();
