// ==========================================
// Module 03: Code Quality - Đáp Án
// ==========================================
"use strict";

// Bài 1: Code Review
function max(a, b) {
  if (a > b) return a;
  return b;
}
// Hoặc: const max = (a, b) => (a > b ? a : b);
console.log(max(5, 3)); // 5

// Bài 2: Early Return
function getDiscount(role, isVIP, years) {
  if (role === "admin") return 50;
  if (role !== "member") return 0;
  if (!isVIP) return 10;
  if (years > 5) return 30;
  return 20;
}
console.log(getDiscount("member", true, 6)); // 30

// Bài 3: JSDoc
/**
 * Tính chỉ số khối cơ thể (BMI)
 * @param {number} weight - Cân nặng (kg)
 * @param {number} height - Chiều cao (m)
 * @returns {number} Chỉ số BMI (kg/m²)
 */
function calculateBMI(weight, height) {
  return weight / (height * height);
}
console.log(calculateBMI(70, 1.75)); // ~22.86

// Bài 4: Magic Number Elimination
const CHILD_PRICE = 5;
const TEEN_PRICE = 8;
const ADULT_PRICE = 12;
const SENIOR_PRICE = 7;

function getTicketPrice(age) {
  if (age < 12) return CHILD_PRICE;
  if (age < 18) return TEEN_PRICE;
  if (age < 60) return ADULT_PRICE;
  return SENIOR_PRICE;
}
console.log(getTicketPrice(25)); // 12

// Bài 5: ESLint
// Sau khi chạy `npx eslint exercises.js`, sửa:
// - Thêm "use strict"
// - Thay var → const/let
// - Thêm dấu cách, xuống dòng đúng

// Bài 6: Unit Test (tạo file test/isEven.test.js)
// const assert = require("assert");
// describe("isEven", () => {
//   it("should return true for even numbers", () => {
//     assert.strictEqual(isEven(2), true);
//   });
//   it("should return false for odd numbers", () => {
//     assert.strictEqual(isEven(1), false);
//   });
//   it("should handle zero", () => {
//     assert.strictEqual(isEven(0), true);
//   });
// });

console.log("\n✅ Module 03 solutions done!");
