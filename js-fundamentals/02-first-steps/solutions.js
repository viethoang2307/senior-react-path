// ==========================================
// Module 02: First Steps - Đáp Án & Giải Thích
// ==========================================
"use strict";

// Bài 1:
let myName = "Lê Khả Việt Hoàng";
const MY_AGE = 24;
let myCity = "Hà Nội";
console.log(`Tôi là ${myName}, ${MY_AGE} tuổi, sống ở ${myCity}`);

// Bài 2:
[42, "hello", true, undefined, null, [], {}, () => {}, Symbol("x"), 10n]
  .forEach(v => console.log(typeof v));
// → number, string, boolean, undefined, object, object, object, function, symbol, bigint
// ⚠️ typeof null = "object" — bug lịch sử!

// Bài 3: FizzBuzz
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// Bài 4:
function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}
console.log(calculate(10, 5, "+")); // 15

// Bài 5:
function getDisplayName(user) {
  return user.name ?? user.username ?? "Anonymous";
}
console.log(getDisplayName({ name: null, username: "viet123" })); // "viet123"
console.log(getDisplayName({ name: "Hoàng" }));                     // "Hoàng"
console.log(getDisplayName({}));                                     // "Anonymous"

// Bài 6:
const items = [0, "", "hello", null, undefined, NaN, false, [], {}, " ", 42, -1];
const truthy = items.filter(Boolean);
const falsy = items.filter(i => !i);
console.log("Truthy:", truthy); // ["hello", [], {}, " ", 42, -1]
console.log("Falsy:", falsy);   // [0, "", null, undefined, NaN, false]

// Bài 7:
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}
const primes = [...Array(101).keys()].filter(isPrime);
console.log("Primes 1-100:", primes);

// Bài 8:
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
}
console.log(reverseString("hello")); // "olleh"

// Bài 9:
function sumArray(arr) {
  return arr.reduce((sum, n) => typeof n === "number" && !isNaN(n) ? sum + n : sum, 0);
}
console.log(sumArray([1, 2, "a", 3, null, 4])); // 10

// Bài 10:
function getAgeGroup(age) {
  if (age <= 12) return "Trẻ em";
  if (age <= 19) return "Thiếu niên";
  if (age <= 59) return "Người lớn";
  return "Người già";
}
console.log(getAgeGroup(25)); // "Người lớn"

console.log("\n✅ Module 02 solutions done!");
