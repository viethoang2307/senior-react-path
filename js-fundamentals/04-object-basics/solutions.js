// ==========================================
// Module 04: Object Basics - Đáp Án
// ==========================================
"use strict";

// Bài 1:
const student = {
  name: "Hoàng",
  age: 24,
  grades: [8, 9, 7],
  average() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
};
console.log(student.average()); // 8

// Bài 2:
// x.value = 20 (y trỏ cùng reference)
// y.value = 20
// z.value = 30 (shallow copy độc lập)

// Bài 3: Deep Clone recursive
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const cloned = {};
  for (let key of Object.keys(obj)) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}
const nested = { a: { b: { c: 1 } } };
const copy = deepClone(nested);
copy.a.b.c = 99;
console.log(nested.a.b.c); // 1 — original unchanged ✓

// Bài 4: This in Arrow
const obj = {
  name: "Test",
  regular() { console.log(this.name); },
  arrow: () => { console.log(this.name); }
};
obj.regular(); // "Test"
obj.arrow();   // undefined — arrow dùng this của scope ngoài

// Bài 5: Calculator
function Calculator() {
  this.read = function(a, b) { this.a = a; this.b = b; };
  this.sum = function() { return this.a + this.b; };
  this.mul = function() { return this.a * this.b; };
}
const calc = new Calculator();
calc.read(10, 5);
console.log(calc.sum(), calc.mul()); // 15, 50

// Bài 6: Chainable Ladder
const ladder = {
  step: 0,
  up() { this.step++; return this; },
  down() { this.step--; return this; },
  showStep() { console.log(this.step); return this; }
};
ladder.up().up().down().showStep(); // 1

// Bài 7:
console.log(company.departments?.engineering?.manager?.email); // "alice@tech.com"
console.log(company.departments?.engineering?.staff?.[1]?.name ?? "Unknown"); // null → "Unknown"

// Bài 8:
function countProperties(obj) {
  return Object.keys(obj).length + Object.getOwnPropertySymbols(obj).length;
}
const sym = Symbol("test");
console.log(countProperties({ a: 1, [sym]: 2 })); // 2

console.log("\n✅ Module 04 solutions done!");
