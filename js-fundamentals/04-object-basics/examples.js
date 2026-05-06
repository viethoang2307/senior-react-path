// ==========================================
// Module 04: Object Basics - Examples
// ==========================================
"use strict";

// --- Object Creation ---
const user = {
  name: "Việt Hoàng",
  age: 24,
  greet() { return `Hello, I'm ${this.name}`; }
};
console.log(user.name);
console.log(user.greet());

// --- Reference vs Copy ---
let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x); // 2 — shared reference!

// Shallow copy
let c = { ...a };
c.x = 3;
console.log(a.x, c.x); // 2, 3 — independent!
console.log({} === {}); // false

// --- this keyword ---
const obj = {
  name: "Test",
  regular() { return this.name; },
  arrow: () => this.name
};
console.log(obj.regular()); // "Test"
console.log(obj.arrow());   // undefined (arrow: no own this)

// --- Constructor ---
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    return `I'm ${this.name}, ${this.age} years old`;
  };
}
const hoang = new Person("Hoàng", 24);
console.log(hoang.introduce());

// --- Optional Chaining ---
const nullUser = null;
const realUser = { profile: { bio: "Developer" } };
console.log(nullUser?.profile?.bio);  // undefined (safe!)
console.log(realUser?.profile?.bio);  // "Developer"

// --- Symbol ---
const id = Symbol("userId");
const user2 = { name: "Test", [id]: 999 };
console.log(user2[id]);          // 999
console.log(Object.keys(user2)); // ["name"] — Symbol hidden!

// --- Object → Primitive ---
const special = {
  value: 42,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `Value: ${this.value}` : this.value;
  }
};
console.log(String(special)); // "Value: 42"
console.log(+special);        // 42

console.log("\n✅ Module 04 examples completed!");
