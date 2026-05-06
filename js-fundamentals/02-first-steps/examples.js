// ==========================================
// Module 02: First Steps - Examples
// Run: node examples.js
// ==========================================
"use strict";

// --- Variables ---
let userName = "Việt Hoàng";
const BIRTH_YEAR = 2002;
console.log("Name:", userName, "| Year:", BIRTH_YEAR);

// --- Data Types ---
console.log("\n=== Data Types ===");
console.log(typeof 42);           // number
console.log(typeof "hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object ← BUG LỊCH SỬ
console.log(typeof Symbol("id")); // symbol
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function

// --- Type Conversion ---
console.log("\n=== Type Conversion ===");
console.log(String(123));          // "123"
console.log(Number("42"));         // 42
console.log(+"3.14");              // 3.14
console.log(!!"hello");            // true
console.log(!!"");                 // false

// --- Operators ---
console.log("\n=== Operators ===");
console.log(10 ** 3);              // 1000
console.log(10 % 3);               // 1
console.log("5" + 3);              // "53" (string concat)
console.log("5" - 3);              // 2 (numeric coercion)
console.log(null ?? "fallback");   // "fallback"
console.log(0 ?? "fallback");      // 0 (0 != null)

// --- Conditionals ---
console.log("\n=== Conditionals ===");
let age = 20;
let status = age >= 18 ? "Người lớn" : "Trẻ em";
console.log(status);

// --- Loops ---
console.log("\n=== Loops ===");
for (let i = 1; i <= 3; i++) console.log(`Loop ${i}`);

// --- Functions ---
function multiply(a, b) { return a * b; }
const square = x => x * x;
const greet = (name = "Guest") => `Hello, ${name}!`;

console.log("\n=== Functions ===");
console.log(multiply(3, 4));       // 12
console.log(square(5));            // 25
console.log(greet("Hoàng"));       // Hello, Hoàng!
console.log(greet());              // Hello, Guest!

console.log("\n✅ Module 02 examples completed!");
