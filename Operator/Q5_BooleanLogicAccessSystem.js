let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
	let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
	
	let status = isSecure ? "Secure" : "Unsafe";
	console.log(status);
	console.log(`Door Locked: ${isDoorLocked}`);
	console.log(`Window Closed: ${isWindowClosed}`);
	console.log(`Alarm On: ${isAlarmOn}`);
	console.log(`Owner Inside: ${isOwnerInside}\n`);
}

console.log("=== Scenario 1: All Secure ===");
checkSecurity();

console.log("=== Scenario 2: Door Unlocked ===");
isDoorLocked = false;
checkSecurity();

console.log("=== Scenario 3: Owner Not Inside ===");
isDoorLocked = true;
isOwnerInside = false;
checkSecurity();

console.log("=== Scenario 4: Alarm Off ===");
isOwnerInside = true;
isAlarmOn = false;
checkSecurity();

console.log("=== Scenario 5: All Secure Again ===");
isAlarmOn = true;
checkSecurity();
