/**
 * Module 05: Data Types — Examples
 * Chạy: node examples.js
 * Xem output của từng phần để hiểu cách hoạt động
 */

// ============================================================
// 1. METHODS OF PRIMITIVES
// ============================================================
console.log("=== 1. METHODS OF PRIMITIVES ===");

let str = "Hello";
console.log(str.toUpperCase()); // "HELLO" — string primitive vẫn gọi được method

let num = 1.23456;
console.log(num.toFixed(2));    // "1.23"
console.log((1.23456).toFixed(2)); // "1.23" — số trực tiếp cũng được

// null/undefined KHÔNG có method
try {
  null.toString();
} catch (e) {
  console.log("null.toString() throws:", e.message);
}

// ============================================================
// 2. NUMBERS
// ============================================================
console.log("\n=== 2. NUMBERS ===");

// Các cách viết số
console.log("1_000_000:", 1_000_000);
console.log("1e9:", 1e9);
console.log("1e-6:", 1e-6);
console.log("0xff:", 0xff, "| 0b11111111:", 0b11111111, "| 0o377:", 0o377);

// toString(base)
const n = 255;
console.log("255.toString(16):", n.toString(16));
console.log("255.toString(2):", n.toString(2));
console.log("255.toString(36):", n.toString(36));

// Làm tròn
console.log("Math.floor(3.9):", Math.floor(3.9));
console.log("Math.ceil(3.1):", Math.ceil(3.1));
console.log("Math.round(3.5):", Math.round(3.5));
console.log("Math.trunc(-3.9):", Math.trunc(-3.9));
console.log("3.1415.toFixed(2):", 3.1415.toFixed(2));

// IEEE 754 — vấn đề độ chính xác
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("Fix with toFixed:", Number((0.1 + 0.2).toFixed(1)));
console.log("Fix with EPSILON:", Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);

// parseInt / parseFloat
console.log('parseInt("100px"):', parseInt("100px"));
console.log('parseFloat("12.5em"):', parseFloat("12.5em"));
console.log('parseInt("0xff"):', parseInt("0xff"));
console.log('parseInt("08", 10):', parseInt("08", 10));

// Math
console.log("Math.random():", Math.random()); // [0, 1)
console.log("Math.max(3,5,1):", Math.max(3, 5, 1));
console.log("Math.pow(2,10):", Math.pow(2, 10));

// NaN & Infinity checks
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN('str'):", isNaN("str"));
console.log("Number.isNaN('str'):", Number.isNaN("str"));
console.log("isFinite(Infinity):", isFinite(Infinity));
console.log("Number.isFinite('15'):", Number.isFinite("15"));

// ============================================================
// 3. STRINGS
// ============================================================
console.log("\n=== 3. STRINGS ===");

// Template literals
const name = "Hoàng";
const age = 20;
console.log(`Hello, ${name}. Next year: ${age + 1}`);

// Các method
console.log('"hello".indexOf("l"):', "hello".indexOf("l"));
console.log('"hello".includes("ll"):', "hello".includes("ll"));
console.log('"hello".startsWith("he"):', "hello".startsWith("he"));
console.log('"hello".endsWith("lo"):', "hello".endsWith("lo"));
console.log('"hello".slice(1, 3):', "hello".slice(1, 3));
console.log('"  hi  ".trim():', "  hi  ".trim());
console.log('"ha".repeat(3):', "ha".repeat(3));
console.log('"7".padStart(3, "0"):', "7".padStart(3, "0"));
console.log('"a,b,c".split(","):', "a,b,c".split(","));

// Replace với regex
console.log('"haha".replace("ha", "he"):', "haha".replace("ha", "he"));
console.log('"haha".replaceAll("ha", "he"):', "haha".replaceAll("ha", "he"));

// ============================================================
// 4. ARRAYS
// ============================================================
console.log("\n=== 4. ARRAYS ===");

const arr = [1, 2, 3];
console.log("arr.at(-1):", arr.at(-1));
console.log("Array.isArray(arr):", Array.isArray(arr));
console.log("typeof arr:", typeof arr); // "object"

// Mutating methods
const mut = [1, 2, 3];
console.log("Original:", [...mut]);
mut.push(4);
console.log("After push(4):", mut);
mut.pop();
console.log("After pop():", mut);
mut.unshift(0);
console.log("After unshift(0):", mut);
mut.shift();
console.log("After shift():", mut);

// ⚠️ sort() mặc định: so sánh string!
const nums = [1, 2, 15];
console.log("[1, 2, 15].sort():", [...nums].sort());
console.log("[1, 2, 15].sort((a,b)=>a-b):", [...nums].sort((a, b) => a - b));

// Non-mutating
const sliced = arr.slice(0, 2);
console.log("slice(0,2):", sliced, "| original:", arr); // arr không đổi
console.log("concat:", arr.concat([4, 5]));
console.log("join:", arr.join(" - "));

// ============================================================
// 5. ARRAY METHODS (12 methods quan trọng)
// ============================================================
console.log("\n=== 5. ARRAY METHODS ===");

const data = [1, 2, 3, 4, 5];

// forEach
console.log("--- forEach ---");
data.forEach((item, idx) => console.log(`  ${idx}: ${item}`));

// map
console.log("map x2:", data.map(x => x * 2));

// filter
console.log("filter even:", data.filter(x => x % 2 === 0));

// reduce
console.log("reduce sum:", data.reduce((acc, x) => acc + x, 0));

// find
console.log("find > 3:", data.find(x => x > 3));

// findIndex
console.log("findIndex > 3:", data.findIndex(x => x > 3));

// some
console.log("some > 3:", data.some(x => x > 3));

// every
console.log("every > 0:", data.every(x => x > 0));
console.log("every > 3:", data.every(x => x > 3));

// flat
console.log("flat:", [1, [2, [3]]].flat(2));

// flatMap
const words = ["hello world", "foo bar"];
console.log("flatMap:", words.flatMap(s => s.split(" ")));

// sort (đúng cách)
console.log("sort desc:", [...data].sort((a, b) => b - a));

// ============================================================
// 6. ITERABLES
// ============================================================
console.log("\n=== 6. ITERABLES ===");

// for...of với string
console.log("for...of string:");
for (const ch of "Hi") {
  console.log("  ", ch);
}

// Custom iterable
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      },
    };
  },
};
console.log("Custom iterable:", [...range]);

// Array.from
console.log("Array.from(range, x => x**2):", Array.from(range, x => x ** 2));

// ============================================================
// 7. MAP & SET
// ============================================================
console.log("\n=== 7. MAP & SET ===");

// Map
const map = new Map();
map.set("name", "Hoàng");
map.set(1, "one");
map.set(true, "yes");
console.log("Map size:", map.size);
console.log('Map get "name":', map.get("name"));
console.log("Map has true:", map.has(true));

// Map iteration
console.log("Map iteration:");
for (const [key, value] of map) {
  console.log(`  ${key} => ${value}`);
}

// Object <-> Map
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));
console.log("Object -> Map:", mapFromObj);
console.log("Map -> Object:", Object.fromEntries(mapFromObj));

// Set
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log("Set (auto unique):", [...set]);
console.log("Set has 2:", set.has(2));
console.log("Set size:", set.size);

// Ứng dụng: loại bỏ duplicate
const dupArr = [1, 2, 2, 3, 3, 3];
console.log("Unique:", [...new Set(dupArr)]);

// ============================================================
// 8. WEAKMAP & WEAKSET
// ============================================================
console.log("\n=== 8. WEAKMAP & WEAKSET ===");

const weakMap = new WeakMap();
let objRef = { id: 1 };
weakMap.set(objRef, "metadata");
console.log("WeakMap has objRef:", weakMap.has(objRef));
console.log("WeakMap get objRef:", weakMap.get(objRef));

const weakSet = new WeakSet();
let user = { name: "Hoàng" };
weakSet.add(user);
console.log("WeakSet has user:", weakSet.has(user));

// ============================================================
// 9. OBJECT.KEYS / VALUES / ENTRIES
// ============================================================
console.log("\n=== 9. OBJECT.KEYS / VALUES / ENTRIES ===");

const userObj = { name: "Hoàng", age: 20, city: "Hà Nội" };
console.log("Object.keys:", Object.keys(userObj));
console.log("Object.values:", Object.values(userObj));
console.log("Object.entries:", Object.entries(userObj));

// Transform object: double values
const prices = { apple: 1, banana: 2, orange: 3 };
const doubled = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, v * 2])
);
console.log("Doubled prices:", doubled);

// ============================================================
// 10. DESTRUCTURING
// ============================================================
console.log("\n=== 10. DESTRUCTURING ===");

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("Array destructure:", { first, second, rest });

// Swap biến
let a = "world";
let b = "hello";
[a, b] = [b, a];
console.log("Swapped:", { a, b });

// Object destructuring
const { name: objName, age: objAge, city = "Unknown" } = userObj;
console.log("Object destructure:", { objName, objAge, city });

// Nested destructuring
const nested = {
  user: {
    profile: {
      displayName: "Hoàng",
      avatar: "url.jpg",
    },
    settings: {
      theme: "dark",
    },
  },
};
const {
  user: {
    profile: { displayName },
    settings: { theme },
  },
} = nested;
console.log("Nested destructure:", { displayName, theme });

// Function parameter destructuring
function greet({ name, age, city = "Hà Nội" }) {
  return `Xin chào ${name}, ${age} tuổi, đến từ ${city}`;
}
console.log(greet({ name: "Hoàng", age: 20 }));
console.log(greet({ name: "Mai", age: 22, city: "Sài Gòn" }));

// ============================================================
// 11. DATE & TIME
// ============================================================
console.log("\n=== 11. DATE & TIME ===");

const now = new Date();
console.log("Now:", now);
console.log("Timestamp:", now.getTime());
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth(), "(May = 4)");
console.log("Date:", now.getDate());
console.log("Day (0=Sun):", now.getDay());

// So sánh date
const d1 = new Date("2026-05-06");
const d2 = new Date("2026-05-07");
console.log("d1 < d2:", d1 < d2);

// Format với Intl
console.log(
  "Intl vi-VN:",
  new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now)
);

// ============================================================
// 12. JSON
// ============================================================
console.log("\n=== 12. JSON ===");

// stringify
const jsonObj = { name: "Hoàng", age: 20, skills: ["JS", "React"] };
const jsonStr = JSON.stringify(jsonObj);
console.log("stringify:", jsonStr);

// stringify với space
console.log("stringify with indent:");
console.log(JSON.stringify(jsonObj, null, 2));

// parse
const parsed = JSON.parse(jsonStr);
console.log("parsed:", parsed);
console.log("parsed.name:", parsed.name);

// toJSON custom
const room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
console.log("room toJSON:", JSON.stringify(room));

// JSON không hỗ trợ: function, undefined, Symbol
const special = {
  fn: function () {},
  undef: undefined,
  sym: Symbol("id"),
  num: NaN,
  inf: Infinity,
};
console.log("Special object JSON:", JSON.stringify(special));

console.log("\n=== ALL EXAMPLES COMPLETED ===");
