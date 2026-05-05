// ============================================================
// Module 00: Types & Values - Examples
// Chay: node js-fundamentals/00-types-values/examples.js
// ============================================================

console.log("=".repeat(60));
console.log("Module 00: Types & Values - Demo");
console.log("=".repeat(60));

// 1. typeof operator
console.log("\n1. typeof voi cac kieu du lieu");

const typeTests = [
  42,
  "hello",
  true,
  undefined,
  null,
  Symbol("id"),
  42n,
  {},
  [],
  function(){},
  /abc/,
  new Date(),
];

typeTests.forEach(val => {
  const t = typeof val;
  const warn = (t === "object" && val === null) ? " <- BUG null => object" :
               (t === "object" && Array.isArray(val)) ? " <- Array => object" : "";
  console.log(`  typeof ${String(val)} => "${t}"${warn}`);
});

// 2. Null vs Undefined
console.log("\n2. Null vs Undefined");

let notAssigned;
const explicitEmpty = null;
console.log("  null == undefined:", null == undefined);
console.log("  null === undefined:", null === undefined);

// 3. Primitive Immutability
console.log("\n3. Primitive Immutable");

let greeting = "hello";
greeting[0] = "H";
console.log("  Sau greeting[0]='H':", greeting); // van la "hello"
greeting = "H" + greeting.slice(1);
console.log("  Tao string moi:", greeting); // "Hello"

// 4. Reference Mutability
console.log("\n4. Reference Mutable");

const person = { name: "Hoang", age: 22 };
console.log("  Truoc:", JSON.stringify(person));
person.age = 23;
person.school = "PTIT";
console.log("  Sau mutate:", JSON.stringify(person));

// 5. Value vs Reference Comparison
console.log("\n5. So sanh Value vs Reference");

const objA = { x: 1 };
const objB = { x: 1 };
const objC = objA;
console.log("  objA === objB:", objA === objB); // false
console.log("  objA === objC:", objA === objC); // true

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log("  arr1 === arr2:", arr1 === arr2); // false

// 6. Pass by Value vs Sharing
console.log("\n6. Pass by Value vs Sharing");

function modifyPrimitive(val) {
  val = 999;
}
let myNum = 42;
modifyPrimitive(myNum);
console.log("  Sau goi ham (primitive):", myNum); // 42

function modifyObject(obj) {
  obj.name = "Da bi sua";
}
const myObj = { name: "Goc" };
modifyObject(myObj);
console.log("  Sau goi ham (object):", myObj.name); // "Da bi sua"

function reassignObject(obj) {
  obj = { name: "Moi" };
}
reassignObject(myObj);
console.log("  Sau reassign:", myObj.name); // Van "Da bi sua"

// 7. Auto-boxing
console.log("\n7. Auto-boxing");

const s = "hello";
console.log("  s.toUpperCase():", s.toUpperCase());
console.log("  typeof s:", typeof s); // van la "string"

const wrapped = new String("hello");
console.log("  new String() === 'hello':", wrapped === "hello"); // false
console.log("  new String() == 'hello':", wrapped == "hello"); // true

// 8. Type Checking
console.log("\n8. Type checking dung cach");

function checkType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

[null, [], {}, 42, "hi", undefined, function(){}].forEach(v => {
  console.log(`  checkType(${String(v)}) => "${checkType(v)}"`);
});

// 9. NaN & Infinity
console.log("\n9. NaN & Infinity");

console.log("  typeof NaN:", typeof NaN);
console.log("  NaN === NaN:", NaN === NaN); // false
console.log("  Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("  1/0:", 1/0); // Infinity

// 10. Symbol
console.log("\n10. Symbol");

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("  sym1 === sym2:", sym1 === sym2); // false

const uid = Symbol("uid");
const user = { name: "Hoang", [uid]: 12345 };
console.log("  user.name:", user.name);
console.log("  user[uid]:", user[uid]);
console.log("  JSON.stringify:", JSON.stringify(user)); // Symbol bi bo qua

console.log("\n" + "=".repeat(60));
console.log("Hoan thanh examples!");
