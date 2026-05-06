// ==========================================
// Module 03: Code Quality - Bài Tập
// ==========================================
"use strict";

// Bài 1: Code Review
// Sửa đoạn code sau cho đúng style
function f(x,y){if(x>y){return x}else{return y}}
// TODO: Viết lại

// Bài 2: Refactor Early Return
// Viết lại hàm dùng early return
function getDiscount(role, isVIP, years) {
  let discount = 0;
  if (role === "admin") { discount = 50; }
  else if (role === "member") {
    if (isVIP) {
      if (years > 5) { discount = 30; }
      else { discount = 20; }
    } else { discount = 10; }
  }
  return discount;
}
// TODO

// Bài 3: JSDoc
// Thêm JSDoc đầy đủ cho hàm calculateBMI
function calculateBMI(weight, height) {
  return weight / (height * height);
}
// TODO

// Bài 4: Magic Number Elimination
// Thay magic numbers bằng named constants
function getTicketPrice(age) {
  if (age < 12) return 5;
  if (age < 18) return 8;
  if (age < 60) return 12;
  return 7;
}
// TODO

// Bài 5: ESLint
// Cài ESLint và chạy trên chính file này
// Sửa tất cả warning/error

// Bài 6: Unit Test với isEven
// Viết test cho hàm isEven(n) dùng Mocha
function isEven(n) { return n % 2 === 0; }
// TODO: Tạo file test và viết 3 test case

console.log("\n✅ Module 03 exercises loaded!");
