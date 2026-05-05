# Bài 1.1: Closures, Scope & Hoisting

> 📅 Ngày 1-2 | 🎯 Mục tiêu: Hiểu sâu cơ chế JavaScript Engine

---

## Mục lục
1. [Execution Context](#1-execution-context)
2. [Scope & Lexical Environment](#2-scope--lexical-environment)
3. [Hoisting](#3-hoisting)
4. [Closures](#4-closures)
5. [Tài liệu tham khảo](#tài-liệu-tham-khảo)

---

## 1. Execution Context

Execution Context (EC) là **môi trường** nơi JavaScript thực thi code. Có 2 loại chính:

| Loại | Khi nào được tạo | Số lượng |
|------|-----------------|----------|
| **Global Execution Context (GEC)** | Khi file JS được load | Chỉ 1 |
| **Function Execution Context (FEC)** | Mỗi lần gọi hàm | Mỗi hàm 1 cái |

### 2 giai đoạn của Execution Context

#### Giai đoạn 1: Creation Phase
1. Tạo **Variable Object (VO)** — chứa tất cả biến, tham số, function declarations
2. Thiết lập **Scope Chain**
3. Xác định giá trị của **`this`**

#### Giai đoạn 2: Execution Phase
1. Gán giá trị cho biến
2. Thực thi code từng dòng
3. Khi gặp lời gọi hàm → tạo FEC mới → quay lại Creation Phase

### Call Stack

JavaScript là **single-threaded**, chỉ có 1 Call Stack:

```
┌──────────┐
│  FEC 3   │ ← hàm trong cùng, đang chạy
├──────────┤
│  FEC 2   │
├──────────┤
│  FEC 1   │
├──────────┤
│   GEC    │ ← Global, luôn ở đáy stack
└──────────┘
```

> 📖 Tham khảo: [ECMAScript Spec - Execution Contexts](https://tc39.es/ecma262/#sec-execution-contexts)

---

## 2. Scope & Lexical Environment

### 3 loại Scope

```js
// 🌍 Global Scope — biến tồn tại suốt vòng đời chương trình
const APP_NAME = "Senior React Path";

function processUser() {
  // 📦 Function Scope — biến chỉ tồn tại trong hàm
  const userId = "abc123";

  if (true) {
    // 🧱 Block Scope — chỉ với let/const, KHÔNG với var
    let blockVar = "Tôi chỉ sống trong block này";
    var functionVar = "Tôi thoát ra ngoài block!";
  }

  console.log(functionVar); // ✅ "Tôi thoát ra ngoài block!"
  console.log(blockVar);    // ❌ ReferenceError
}
```

### Lexical Environment (Môi trường từ vựng)

**Lexical Environment** = Nơi lưu trữ biến + Tham chiếu đến môi trường bên ngoài.

> **Nguyên tắc:** Phạm vi của biến được xác định bởi **vị trí code được VIẾT** (static/lexical), không phải vị trí được GỌI (dynamic).

```
        Global Environment
        ├── name: "Hoàng"
        │
        └──→ outer() Environment  ← Outer Reference trỏ lên Global
             ├── outerVar: "ngoài"
             │
             └──→ inner() Environment  ← Outer Reference trỏ lên outer()
                  └── innerVar: "trong"
```

### Scope Chain

Khi truy cập một biến, JavaScript tìm theo thứ tự:
1. Current Scope → 2. Outer Scope → 3. ... → Global Scope

```js
const globalVar = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(innerVar);  // "inner"  ← tìm thấy ở current
    console.log(outerVar);  // "outer"  ← tìm thấy ở outer
    console.log(globalVar); // "global" ← tìm thấy ở global
  }

  inner();
}
```

> 📖 Tham khảo: [javascript.info/closure](https://javascript.info/closure)

---

## 3. Hoisting

> **Hoisting** = JavaScript "kéo" phần **khai báo** (không phải gán giá trị) lên đầu scope trong Creation Phase.

### `var` hoisting

```js
console.log(name);  // undefined — KHÔNG lỗi!
var name = "Hoàng";

// ═══ Cách JavaScript Engine "nhìn" code trên ═══
// var name;          ← khai báo được hoisted
// console.log(name); // undefined
// name = "Hoàng";    ← gán giá trị giữ nguyên vị trí
```

### `let` / `const` & Temporal Dead Zone (TDZ)

```js
// 🔴 let/const CŨNG được hoisted, nhưng KHÔNG được khởi tạo = undefined
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization

let x = 10;

// ═══ Temporal Dead Zone (TDZ) ═══
// Từ đầu scope cho đến dòng `let x = 10;`
// → Biến tồn tại nhưng CHƯA được khởi tạo
// → Mọi truy cập trong TDZ đều gây ReferenceError
```

```js
// 🤯 TDZ + typeof — một cạm bẫy nổi tiếng
{
  console.log(typeof notDeclared); // "undefined" ← biến KHÔNG tồn tại
  console.log(typeof myVar);       // ❌ ReferenceError ← biến đang trong TDZ!
  let myVar = 5;
}
```

### Function Hoisting

| Loại | Hoisting behavior |
|------|------------------|
| **Function Declaration** | Cả tên + thân hàm được hoisted |
| **Function Expression** (`var`) | Chỉ tên biến được hoisted (= undefined) |
| **Arrow Function** (`const`) | TDZ như `const` bình thường |

```js
// ✅ Function Declaration: gọi trước định nghĩa vẫn OK
sayHi("Hoàng"); // "Chào Hoàng!"
function sayHi(name) { return `Chào ${name}!`; }

// ❌ Function Expression: TypeError!
sayBye("Hoàng"); // TypeError: sayBye is not a function
var sayBye = function(name) { return `Tạm biệt ${name}!`; };
```

> 📖 Tham khảo: [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

## 4. Closures

### Định nghĩa

> **Closure** = Hàm bên trong + tất cả biến của scope bên ngoài mà nó truy cập.

Một closure được tạo ra **mỗi khi một hàm được định nghĩa** (không phải khi được gọi).

### Cơ chế hoạt động

```js
function createGreeting(greeting) {
  // greeting nằm trong Lexical Environment của createGreeting
  return function(name) {
    // Hàm này "đóng gói" (close over) biến `greeting`
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting("Xin chào");
const sayHi    = createGreeting("Hi");

console.log(sayHello("Hoàng")); // "Xin chào, Hoàng!"
console.log(sayHi("Hoàng"));    // "Hi, Hoàng!"

// Mỗi lần gọi createGreeting tạo ra 1 Lexical Environment RIÊNG
// → sayHello và sayHi có closure trên 2 environment KHÁC NHAU
```

```
┌──────────────────────────────────────┐
│ createGreeting("Xin chào")           │
│ ┌────────────────────────────────┐   │
│ │ Lexical Environment #1         │   │
│ │   greeting: "Xin chào"         │   │
│ │                                │   │
│ │   ┌────────────────────────┐   │   │
│ │   │ Closure của sayHello   │   │   │
│ │   │ vẫn giữ tham chiếu đến │   │   │
│ │   │ Lexical Environment #1 │   │   │
│ │   └────────────────────────┘   │   │
│ └────────────────────────────────┘   │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ createGreeting("Hi")                 │
│ ┌────────────────────────────────┐   │
│ │ Lexical Environment #2         │   │
│ │   greeting: "Hi"               │   │
│ │                                │   │
│ │   ┌────────────────────────┐   │   │
│ │   │ Closure của sayHi      │   │   │
│ │   └────────────────────────┘   │   │
│ └────────────────────────────────┘   │
└──────────────────────────────────────┘
```

### 5 ứng dụng thực tế

#### 1️⃣ Data Privacy / Encapsulation

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance; // 🔒 PRIVATE — không thể truy cập từ ngoài

  return {
    deposit(amount)  { balance += amount; return balance; },
    withdraw(amount) { if (amount > balance) return "Không đủ!";
                       balance -= amount; return balance; },
    getBalance()     { return balance; }
  };
}
```

#### 2️⃣ Function Factory

```js
function multiplyBy(factor) {
  return (n) => n * factor;
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
```

#### 3️⃣ Memoization

```js
function memoize(fn) {
  const cache = new Map();
  return (arg) => {
    if (cache.has(arg)) return cache.get(arg);
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
```

#### 4️⃣ Module Pattern (cổ điển)

```js
const Counter = (function() {
  let count = 0; // Private
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    get value() { return count; }
  };
})();
```

#### 5️⃣ Event Handler + Vòng lặp

```js
// ❌ SAI — tất cả closure tham chiếu cùng 1 biến i
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
} // 5 5 5 5 5

// ✅ ĐÚNG — IIFE tạo scope riêng cho từng iteration
for (var i = 0; i < 5; i++) {
  (function(index) {
    setTimeout(() => console.log(index), 100);
  })(i);
} // 0 1 2 3 4

// ✅ ĐÚNG — let tạo block scope mới mỗi iteration
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
} // 0 1 2 3 4
```

### Cạm bẫy phổ biến

| Vấn đề | Nguyên nhân | Giải pháp |
|--------|------------|-----------|
| Closure giữ tham chiếu, không phải giá trị | `var` + vòng lặp | Dùng `let` hoặc IIFE |
| Memory leak | Closure giữ DOM element đã bị xóa | Nullify reference khi không cần |
| Stale closure trong React | `useEffect` dependency sai | ESLint rule `react-hooks/exhaustive-deps` |

> 📖 Tham khảo: [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) | [You Don't Know JS - Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)

---

## Tài liệu tham khảo

| Tài liệu | Link |
|----------|------|
| 📘 JavaScript.info — Closure | https://javascript.info/closure |
| 📘 MDN — Closures | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures |
| 📘 MDN — Hoisting | https://developer.mozilla.org/en-US/docs/Glossary/Hoisting |
| 📕 You Don't Know JS — Scope & Closures | https://github.com/getify/You-Dont-Know-JS |
| 🎥 Jake Archibald — In The Loop (Event Loop) | https://www.youtube.com/watch?v=cCOL7MC4Pl0 |
| 📜 ECMAScript Spec — Execution Contexts | https://tc39.es/ecma262/#sec-execution-contexts |
