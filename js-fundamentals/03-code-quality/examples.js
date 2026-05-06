// ==========================================
// Module 03: Code Quality - Examples
// ==========================================
"use strict";

// --- Debugging ---
console.group("Debug Examples");
console.log("This is a log");
console.warn("This is a warning");
console.table([{ id: 1, name: "A" }, { id: 2, name: "B" }]);
console.time("fast");
let sum = 0;
for (let i = 0; i < 1000; i++) sum += i;
console.timeEnd("fast");
console.groupEnd();

// --- Coding Style ---
const MAX_USERS = 100;

function getUserFullName(firstName, lastName) {
  // Early return pattern
  if (!firstName || !lastName) return "Unknown";
  return `${firstName} ${lastName}`;
}
console.log(getUserFullName("Việt", "Hoàng"));

// --- JSDoc ---
/**
 * Tính giai thừa của một số
 * @param {number} n - Số nguyên không âm
 * @returns {number} n!
 */
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("5! =", factorial(5));

// --- Best Practices ---
// ❌ Magic number
// if (status === 200) {}

// ✅ Named constant
const HTTP_OK = 200;
const responseStatus = 200;
if (responseStatus === HTTP_OK) {
  console.log("Request successful");
}

// ❌ Deep nesting
// if (a) { if (b) { if (c) { ... } } }

// ✅ Early return / Guard clauses
function processData(data) {
  if (!data) return null;
  if (!data.isValid) return null;
  return data.value;
}
console.log(processData({ isValid: true, value: 42 })); // 42

console.log("\n✅ Module 03 examples completed!");
