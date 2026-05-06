# Module 02: JavaScript First Steps — Nền Tảng Cốt Lõi

## 📘 Mục tiêu
Nắm vững cú pháp cơ bản: biến, kiểu dữ liệu, toán tử, điều kiện, vòng lặp, hàm.

---

## 1. Cấu Trúc Code

- Các câu lệnh phân cách bởi `;` (có thể bỏ nếu xuống dòng, nhưng **nên dùng**)
- Comment: `//` (1 dòng), `/* */` (nhiều dòng)
- **"use strict"** — strict mode, bắt lỗi nghiêm ngặt hơn, **luôn dùng**

```javascript
"use strict";
// Comment 1 dòng
/* Comment
   nhiều dòng */
let message = "Hello";
```

---

## 2. Biến (Variables)

| Từ khóa | Phạm vi | Gán lại? | Hoisting |
|---------|---------|----------|----------|
| `var` | Function scope | ✅ | ✅ (undefined) |
| `let` | Block scope | ✅ | ⚠️ TDZ |
| `const` | Block scope | ❌ | ⚠️ TDZ |

```javascript
let name = "Việt Hoàng";  // Có thể gán lại
const PI = 3.14159;       // Hằng số
var old = "tránh dùng";   // ❌ Deprecated

// Block scope
{
  let x = 10;
}
// console.log(x); // ❌ ReferenceError
```

### Quy tắc đặt tên
- **camelCase** cho biến/hàm: `firstName`, `calculateTotal`
- **UPPER_SNAKE_CASE** cho hằng số: `MAX_SIZE`, `API_URL`
- Không bắt đầu bằng số, chỉ dùng `$ _` và chữ cái

---

## 3. Kiểu Dữ Liệu (Data Types)

### Primitive Types (7 loại)
| Kiểu | Ví dụ | `typeof` |
|------|-------|----------|
| `number` | `42`, `3.14`, `Infinity`, `NaN` | `"number"` |
| `bigint` | `9007199254740991n` | `"bigint"` |
| `string` | `"hello"`, `'world'`, `` `template` `` | `"string"` |
| `boolean` | `true`, `false` | `"boolean"` |
| `null` | `null` | `"object"` ⚠️ |
| `undefined` | `undefined` | `"undefined"` |
| `symbol` | `Symbol("id")` | `"symbol"` |

### Reference Types
- `Object`, `Array`, `Function`, `Date`, `Map`, `Set`...
- `typeof` trả về `"object"` hoặc `"function"`

### ⚠️ `typeof null === "object"` — Bug lịch sử từ JS 1.0

```javascript
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" ← BUG!
typeof {};          // "object"
typeof [];          // "object"
typeof function(){};// "function"
```

---

## 4. Chuyển Đổi Kiểu (Type Conversion)

### Explicit (nên dùng)
```javascript
String(123);        // "123"
Number("123");      // 123
Boolean(1);         // true
parseInt("42px");   // 42
parseFloat("3.14"); // 3.14
```

### Implicit (cần hiểu để tránh bug)
```javascript
"5" + 3;    // "53"  (string + number → string)
"5" - 3;    // 2     (string - number → number)
+"123";     // 123   (unary plus)
!!"hello";  // true
```

### Truthy & Falsy
**Falsy (6 giá trị):** `false`, `0`, `""`, `null`, `undefined`, `NaN`

```javascript
Boolean("");        // false
Boolean(0);         // false
Boolean("hello");   // true
Boolean([]);        // true  ← array rỗng vẫn truthy!
```

---

## 5. Toán Tử (Operators)

### Số học: `+ - * / % **`
```javascript
10 ** 3; // 1000 (lũy thừa)
```

### So sánh
```javascript
===  // bằng nghiêm ngặt → LUÔN DÙNG
!==  // khác nghiêm ngặt → LUÔN DÙNG
==   // bằng (có ép kiểu) → TRÁNH
!=   // khác (có ép kiểu) → TRÁNH
```

### Logic: `&&` `||` `!` `??`
```javascript
// ?? trả về bên phải CHỈ KHI bên trái là null/undefined
let name = null ?? "Guest";  // "Guest"
let age = 0 ?? 25;           // 0 (0 không phải null/undefined)
```

---

## 6. Điều Kiện

```javascript
if (condition) { }
else if (condition) { }
else { }

// Ternary
let result = age >= 18 ? "Người lớn" : "Trẻ em";

// Switch
switch (value) {
  case 1: /*...*/ break;
  default: /*...*/
}
```

---

## 7. Vòng Lặp

```javascript
// for — biết trước số lần
for (let i = 0; i < 10; i++) { }

// while — lặp khi điều kiện đúng
while (condition) { }

// for...of — duyệt iterable (array, string, Map, Set)
for (let item of array) { }

// for...in — duyệt key của object
for (let key in object) { }
```

---

## 8. Hàm (Functions)

### Function Declaration (được hoisting)
```javascript
function add(a, b) { return a + b; }
```

### Function Expression (KHÔNG hoisting)
```javascript
const add = function(a, b) { return a + b; };
```

### Arrow Function (ES6)
```javascript
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}`;
```

### Default & Rest Parameters
```javascript
function greet(name = "Guest") { return `Hello, ${name}`; }
function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }
```

---

## 📚 Tham khảo
- [javascript.info — First Steps](https://javascript.info/first-steps)
- [MDN — Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
