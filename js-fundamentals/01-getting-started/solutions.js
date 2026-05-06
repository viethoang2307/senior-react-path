// ==========================================
// Module 01: Getting Started - Đáp Án
// ==========================================
"use strict";

// Bài 1: Kết quả node --version → ví dụ: v20.11.0

// Bài 2:
console.log("Tôi tên là Lê Khả Việt Hoàng");

// Bài 3:
console.error("Đây là thông báo lỗi");
console.warn("Đây là cảnh báo");
console.table([
  { language: "JavaScript", type: "dynamic" },
  { language: "TypeScript", type: "static" }
]);

// Bài 4:
// age = 25; // ❌ ReferenceError: age is not defined
let age = 25; // ✅ Đúng: phải khai báo biến

// Bài 5 (3 tính năng ES6 hay):
// 1. Arrow functions: const fn = () => {}
// 2. Template literals: `Hello ${name}`
// 3. Destructuring: const { a, b } = obj

console.log("\n✅ Module 01 solutions done!");
