# 🔬 Module 00: Types & Values - Bản Chất của Mọi Thứ Trong JavaScript

> **Mục tiêu:** Hiểu sâu về cách JavaScript lưu trữ, so sánh và thao tác với dữ liệu ở cấp thấp nhất.
> **Thời lượng:** 2-3 ngày (học lý thuyết + làm bài tập)
> **Prerequisites:** Biết khai báo biến `let`, `const`, `var`

---

## 📖 1. JavaScript Có Gì Đặc Biệt Về Types?

### Dynamically Typed - Linh Hoạt Nhưng Nguy Hiểm

```javascript
let x = 42;       // x là Number
x = "hello";      // x giờ là String - không lỗi!
x = true;         // x giờ là Boolean
```

Khác với Java/C++, JavaScript **không ép kiểu cố định** cho biến. Biến chỉ là "cái hộp" — giá trị mới quyết định kiểu.

### Weakly Typed - Tự Động Ép Kiểu

```javascript
"5" + 3   // → "53" (String + Number → String)
"5" - 3   // → 2    (String - Number → Number)
true + 1  // → 2    (Boolean → Number)
```

Ép kiểu ngầm (implicit coercion) là nguồn gốc của **80% bug khó hiểu** trong JS.

---

## 🧱 2. Primitive Types (7 Kiểu Nguyên Thủy)

| Type | Ví dụ | `typeof` trả về |
|------|-------|-----------------|
| **Number** | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| **String** | `"hello"`, `'world'`, `` `backtick` `` | `"string"` |
| **Boolean** | `true`, `false` | `"boolean"` |
| **Undefined** | `undefined` | `"undefined"` |
| **Null** | `null` | `"object"` ⚠️ |
| **Symbol** | `Symbol("id")` | `"symbol"` |
| **BigInt** | `9007199254740991n` | `"bigint"` |

### Đặc điểm của Primitive:
- **Immutable** (bất biến) — không thể thay đổi giá trị
- **So sánh theo giá trị** (by value)
- **Không có method/property riêng** — JS tạm thời "wrap" chúng

```javascript
// Immutable
let str = "hello";
str[0] = "H";        // KHÔNG thay đổi!
console.log(str);    // "hello" (không phải "Hello")

// So sánh theo giá trị
console.log(42 === 42);          // true
console.log("hi" === "hi");      // true

// Auto-boxing
"hello".toUpperCase();  // JS tạm tạo String object → gọi method → hủy
```

### Null vs Undefined

| `null` | `undefined` |
|--------|-------------|
| Do developer gán | Do JS engine tự gán |
| "Không có giá trị" (có chủ đích) | "Chưa được gán" (vô tình) |
| `typeof null === "object"` (bug lịch sử) | `typeof undefined === "undefined"` |

```javascript
let a;
console.log(a);          // undefined - chưa được gán

let b = null;
console.log(b);          // null - cố ý để trống

// Quan trọng: null == undefined → true, nhưng null === undefined → false
```

---

## 🗃️ 3. Reference Types (Object & Derivatives)

**Chỉ có MỘT reference type thực sự: Object**. Mọi thứ khác đều là dạng của Object.

| Loại | Mô tả |
|------|-------|
| **Object** | `{}`, `new Object()` |
| **Array** | `[]`, `new Array()` |
| **Function** | `function(){}`, `() => {}` |
| **Date** | `new Date()` |
| **RegExp** | `/pattern/` |
| **Map, Set, WeakMap, WeakSet** | Collections |

### Đặc điểm của Reference:
- **Mutable** (có thể thay đổi)
- **So sánh theo địa chỉ bộ nhớ** (by reference)
- Được lưu trên **Heap**, biến chỉ giữ **con trỏ** (pointer)

```javascript
// Mutable
const obj = { name: "Hoàng" };
obj.name = "Việt Hoàng";    // Thay đổi ĐƯỢC dù là const!
console.log(obj);            // { name: "Việt Hoàng" }

// So sánh theo reference
const a = { x: 1 };
const b = { x: 1 };
console.log(a === b);        // false! (2 object khác địa chỉ)
console.log(a.x === b.x);    // true (so sánh giá trị bên trong)

const c = a;
console.log(a === c);        // true (cùng địa chỉ)
```

---

## 🔄 4. Pass By Value vs Pass By Reference

```javascript
// Primitive → Pass by Value (copy giá trị)
function changePrimitive(n) {
    n = 100;
    console.log("Inside:", n);  // 100
}
let count = 5;
changePrimitive(count);
console.log("Outside:", count); // 5 (không đổi!)

// Reference → Pass by "Sharing" (copy địa chỉ)
function changeObject(obj) {
    obj.name = "Changed";
    console.log("Inside:", obj.name);  // "Changed"
}
const person = { name: "Hoàng" };
changeObject(person);
console.log("Outside:", person.name); // "Changed"!
```

> ⚠️ **Quan trọng**: JS luôn **pass by value**, nhưng với object, giá trị được pass là **địa chỉ tham chiếu**. Nhiều người gọi là "pass by sharing".

---

## 🔍 5. Type Checking - Kiểm Tra Kiểu

### `typeof` operator

```javascript
typeof 42              // "number"
typeof "hi"            // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof 42n             // "bigint"
typeof {}              // "object"
typeof []              // "object"  ⚠️
typeof null            // "object"  ⚠️ BUG!
typeof function(){}    // "function"
```

### `instanceof` operator

```javascript
[] instanceof Array         // true
[] instanceof Object        // true (Array extends Object)
new Date() instanceof Date  // true
/abc/ instanceof RegExp     // true
```

### Cách chuẩn để kiểm tra Array

```javascript
Array.isArray([])           // true ✅
Array.isArray({})           // false ✅
```

### Cách chuẩn để kiểm tra null

```javascript
value === null              // true nếu là null
```

### `Object.prototype.toString.call()`

```javascript
Object.prototype.toString.call([])        // "[object Array]"
Object.prototype.toString.call({})        // "[object Object]"
Object.prototype.toString.call(null)      // "[object Null]"
Object.prototype.toString.call(/abc/)     // "[object RegExp]"
```

---

## 📚 6. Memory Model (Cách JS Lưu Trữ Dữ Liệu)

```
┌─────────────────────────────────────────────┐
│                 CALL STACK                   │
│  (Lưu primitives + con trỏ đến Heap)        │
│                                              │
│  let age = 25         → [25]                │
│  let name = "Hoàng"   → [pointer] ──────┐   │
│  let obj = {x:1}      → [pointer] ───┐  │   │
└────────────────────────────────────────│──│──┘
                                         │  │
┌────────────────────────────────────────│──│──┐
│                 HEAP MEMORY            │  │   │
│  (Lưu objects, arrays, functions)     │  │   │
│                                        │  │   │
│  ┌──────────────────────┐              │  │   │
│  │ { x: 1 }             │ ◄────────────┘  │   │
│  └──────────────────────┘                 │   │
│                                           │   │
│  ┌──────────────────────┐                 │   │
│  │ "Hoàng" (String obj) │ ◄───────────────┘   │
│  └──────────────────────┘                     │
└───────────────────────────────────────────────┘
```

---

## 🎯 7. Key Takeaways

1. **7 primitive types** → so sánh theo giá trị, immutable
2. **Object & derivatives** → so sánh theo tham chiếu, mutable
3. **Pass by sharing** → copy địa chỉ, không copy object
4. **`typeof` có bug với null** → luôn kiểm tra `=== null`
5. **`const` ngăn reassign biến**, không ngăn mutate object
6. **Hiểu memory model** → hiểu tại sao object hoạt động khác primitive

---

## 📚 Tham khảo chính

- [MDN - JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [javascript.info - Data Types](https://javascript.info/types)
- [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md)
- [ECMAScript Language Types Specification](https://tc39.es/ecma262/#sec-ecmascript-language-types)
