/**
 * Bài 1.1: Closures, Scope & Hoisting — Code Examples
 *
 * Chạy từng phần với: node examples.js
 * Gỡ comment để thấy lỗi (các dòng ❌)
 */

// ═══════════════════════════════════════════════════════════
// PHẦN 1: SCOPE
// ═══════════════════════════════════════════════════════════

console.log("=== PHẦN 1: SCOPE ===\n");

// 1.1 — var vs let/const
function varVsLet() {
  if (true) {
    var a = "var: Tôi sống trong cả function";
    let b = "let: Tôi chỉ sống trong block này";
    const c = "const: Tôi cũng chỉ sống trong block này";
  }
  console.log(a); // ✅ "var: Tôi sống trong cả function"
  // console.log(b); // ❌ ReferenceError
  // console.log(c); // ❌ ReferenceError
}
varVsLet();

// 1.2 — Lexical Scoping
const name = "Hoàng";

function outer() {
  const name = "Không Phải Hoàng";
  function inner() {
    console.log("Lexical scope:", name); // "Không Phải Hoàng"
  }
  inner();
}
outer();

// 1.3 — Scope Chain
const globalVar = "global";

function level1() {
  const level1Var = "level1";
  function level2() {
    const level2Var = "level2";
    function level3() {
      const level3Var = "level3";
      console.log("Scope chain:", level3Var, level2Var, level1Var, globalVar);
    }
    level3();
  }
  level2();
}
level1();

// ═══════════════════════════════════════════════════════════
// PHẦN 2: HOISTING
// ═══════════════════════════════════════════════════════════

console.log("\n=== PHẦN 2: HOISTING ===\n");

// 2.1 — var hoisting
console.log("var hoisting - before:", hoistedVar); // undefined
var hoistedVar = "Bây giờ mới có giá trị";
console.log("var hoisting - after:", hoistedVar);  // "Bây giờ mới có giá trị"

// 2.2 — Function Declaration hoisting
hoistedFunc(); // ✅ "Tôi được hoisted!"
function hoistedFunc() {
  console.log("Tôi được hoisted!");
}

// 2.3 — Function Expression KHÔNG hoisted thân hàm
// notHoisted(); // ❌ TypeError: notHoisted is not a function
var notHoisted = function () {
  console.log("Tôi KHÔNG được hoisted!");
};
notHoisted(); // ✅ OK khi gọi sau khi gán

// 2.4 — Temporal Dead Zone với let
function tdzDemo() {
  // console.log(tdzVar); // ❌ ReferenceError
  let tdzVar = "Thoát TDZ rồi!";
  console.log(tdzVar); // ✅
}
tdzDemo();

// ═══════════════════════════════════════════════════════════
// PHẦN 3: CLOSURES
// ═══════════════════════════════════════════════════════════

console.log("\n=== PHẦN 3: CLOSURES ===\n");

// 3.1 — Closure cơ bản
function createCounter(start = 0) {
  let count = start;        // Private variable
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { count = start; return count; },
    get value() { return count; },
  };
}

const counter = createCounter(10);
console.log("Counter increment:", counter.increment()); // 11
console.log("Counter increment:", counter.increment()); // 12
console.log("Counter decrement:", counter.decrement()); // 11
console.log("Counter value:", counter.value);           // 11
console.log("Counter count:", counter.count);           // undefined (private!)

// 3.2 — Function Factory
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const add2 = (n) => n + 2;
const multiply3 = (n) => n * 3;
const subtract1 = (n) => n - 1;

const compute = pipe(add2, multiply3, subtract1);

console.log("\nFunction factory - pipe(5):", compute(5));
// ((5 + 2) * 3) - 1 = (7 * 3) - 1 = 21 - 1 = 20

// 3.3 — Memoization với closure
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("  🎯 Cache hit:", key);
      return cache.get(key);
    }
    console.log("  💻 Computing:", key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Hàm "nặng" giả lập
function expensiveCalculation(n) {
  // Giả lập tính toán phức tạp
  let result = 0;
  for (let i = 0; i < 1e6; i++) result += Math.sqrt(i);
  return { n, sum: Math.round(result) };
}

const memoizedCalc = memoize(expensiveCalculation);
console.log("\nMemoization demo:");
console.log(memoizedCalc(5));
console.log(memoizedCalc(5)); // Cache hit!
console.log(memoizedCalc(10));
console.log(memoizedCalc(10)); // Cache hit!

// 3.4 — Module pattern với closure
const TodoApp = (function () {
  const todos = []; // PRIVATE
  let nextId = 1;

  return { // PUBLIC API
    add(task) {
      const todo = { id: nextId++, task, done: false };
      todos.push(todo);
      return todo;
    },
    toggle(id) {
      const todo = todos.find((t) => t.id === id);
      if (todo) todo.done = !todo.done;
      return todo;
    },
    getAll() {
      return [...todos]; // Trả về bản sao, bảo vệ internal array
    },
    getStats() {
      const done = todos.filter((t) => t.done).length;
      return { total: todos.length, done, remaining: todos.length - done };
    },
  };
})();

TodoApp.add("Học Closures");
TodoApp.add("Làm bài tập");
TodoApp.toggle(1);
console.log("\nTodoApp stats:", TodoApp.getStats()); // { total: 2, done: 1, remaining: 1 }
console.log("TodoApp todos:", TodoApp.todos);        // undefined (private!)

// 3.5 — Vòng lặp + closure: SO SÁNH var vs let
console.log("\n--- Vòng lặp + Closure ---");

// ❌ Với var
console.log("Với var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("  var loop:", i), 50);
}
// Output: 3 3 3

// ✅ Với let
setTimeout(() => {
  console.log("Với let:");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("  let loop:", j), 50);
  }
}, 100);
// Output: 0 1 2

// ✅ Với closure + IIFE
setTimeout(() => {
  console.log("Với IIFE:");
  for (var k = 0; k < 3; k++) {
    ((index) => {
      setTimeout(() => console.log("  IIFE loop:", index), 50);
    })(k);
  }
}, 200);
// Output: 0 1 2

// 3.6 — Once function (chỉ chạy 1 lần)
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const initialize = once(() => {
  console.log("\nKhởi tạo ứng dụng... (chỉ chạy 1 lần)");
  return { initialized: true };
});

initialize(); // Chạy!
initialize(); // Không chạy, trả về kết quả cũ
initialize(); // Không chạy, trả về kết quả cũ

console.log("\n✅ Tất cả examples chạy xong!");
