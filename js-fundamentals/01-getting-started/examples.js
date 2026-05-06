// ==========================================
// Module 01: Getting Started - Examples
// ==========================================
"use strict";

// 1. Hello World
console.log("Hello, World!");
console.log("JS version:", "ES2024");

// 2. Check environment
console.log("Node version:", process.version);
console.log("Platform:", process.platform);

// 3. Console output types
console.log("Log: thông tin thường");
console.warn("Warn: cảnh báo");
console.error("Error: lỗi");
console.table([
  { name: "JS", year: 1995 },
  { name: "TS", year: 2012 }
]);

// 4. Measure performance
console.time("loop");
let sum = 0;
for (let i = 0; i < 1000000; i++) sum += i;
console.timeEnd("loop");

// 5. Strict mode
// x = 5; // ❌ Lỗi: x is not defined
let x = 5; // ✅

console.log("\n✅ Module 01 examples completed!");
