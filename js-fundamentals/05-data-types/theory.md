# Module 05: Data Types (Kiểu Dữ Liệu Chuyên Sâu)

> **Nguồn chính:** [javascript.info/data-types](https://javascript.info/data-types)  
> **Độ ưu tiên:** 🔥 CAO — Đây là module quan trọng bậc nhất của GĐ1  
> **Thời lượng dự kiến:** 2-3 ngày

---

## 📑 Mục Lục

1. [Methods of Primitives](#1-methods-of-primitives)
2. [Numbers](#2-numbers)
3. [Strings](#3-strings)
4. [Arrays](#4-arrays)
5. [Array Methods](#5-array-methods)
6. [Iterables](#6-iterables)
7. [Map & Set](#7-map--set)
8. [WeakMap & WeakSet](#8-weakmap--weakset)
9. [Object.keys/values/entries](#9-objectkeysvaluesentries)
10. [Destructuring Assignment](#10-destructuring-assignment)
11. [Date & Time](#11-date--time)
12. [JSON Methods](#12-json-methods)

---

## 1. Methods of Primitives

### 🔑 Key Insight: Primitive vẫn gọi được methods

```js
let str = "Hello";
str.toUpperCase(); // "HELLO" — hoạt động!
```

**Cơ chế "Object Wrapper":**
- Khi gọi method trên primitive, JS tạm tạo một **wrapper object**
- String → `new String(str)`, Number → `new Number(n)`, Boolean → `new Boolean(b)`
- Method được gọi trên wrapper → trả về kết quả → wrapper bị hủy

```js
let n = 1.23456;
n.toFixed(2); // "1.23"
// JS làm: tạo new Number(1.23456) → gọi .toFixed(2) → trả "1.23" → hủy wrapper
```

### ⚠️ `null` và `undefined` KHÔNG có methods
```js
null.toString();  // ❌ TypeError
undefined.test(); // ❌ TypeError
```

### 🧪 `new String()` vs String primitive
```js
typeof "hello";       // "string" (primitive)
typeof new String("hello"); // "object" (wrapper — tránh dùng!)
```

---

## 2. Numbers

### Các cách viết số

```js
let billion = 1_000_000_000; // Dấu gạch dưới (ES2021) — dễ đọc
let billion2 = 1e9;          // Khoa học: 1 × 10^9
let micro = 1e-6;            // 0.000001

// Hex, Binary, Octal
0xff        // 255 (hex)
0b11111111  // 255 (binary)
0o377       // 255 (octal)
```

### toString(base) — chuyển sang hệ cơ số

```js
let num = 255;
num.toString(16); // "ff" (hex)
num.toString(2);  // "11111111" (binary)
num.toString(36); // "73" (base 36 — max)
```

### Làm tròn số

| Method | Ví dụ | Kết quả |
|--------|-------|---------|
| `Math.floor` | `Math.floor(3.9)` | `3` |
| `Math.ceil` | `Math.ceil(3.1)` | `4` |
| `Math.round` | `Math.round(3.5)` | `4` |
| `Math.trunc` | `Math.trunc(-3.9)` | `-3` (bỏ phần thập phân) |
| `.toFixed(n)` | `3.1415.toFixed(2)` | `"3.14"` (trả về string!) |

### ⚠️ IEEE 754 — Vấn đề độ chính xác

```js
0.1 + 0.2 === 0.3; // false! → 0.30000000000000004
```

**Tại sao?** JS dùng chuẩn IEEE 754 (64-bit), biểu diễn số thập phân dưới dạng binary → không chính xác tuyệt đối.

**Cách xử lý:**
```js
// Cách 1: toFixed + Number
Number((0.1 + 0.2).toFixed(1)); // 0.3

// Cách 2: Nhân với lũy thừa 10
(0.1 * 10 + 0.2 * 10) / 10; // 0.3

// Cách 3: Number.EPSILON
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // true
```

### parseInt / parseFloat

```js
parseInt("100px");    // 100
parseInt("12.5em");   // 12 (chỉ lấy phần nguyên)
parseFloat("12.5em"); // 12.5
parseInt("0xff");     // 255 (tự detect hex)

// LUÔN truyền radix:
parseInt("08", 10);   // 8 (an toàn)
parseInt("08");       // 0 (cũ: octal), 8 (ES5+)
```

### Math object

```js
Math.random()   // [0, 1)
Math.max(3,5,1) // 5
Math.min(3,5,1) // 1
Math.pow(2,10)  // 1024
Math.sqrt(16)   // 4
Math.abs(-5)    // 5
Math.PI         // 3.14159...
```

### NaN và Infinity

```js
isNaN(NaN);      // true
isNaN("str");    // true (ép kiểu → NaN rồi check)
Number.isNaN("str"); // false (chỉ check NaN thật sự) ← nên dùng!

isFinite(15);     // true
isFinite(Infinity); // false
isFinite("15");   // true (ép kiểu trước)
Number.isFinite("15"); // false (không ép kiểu) ← nên dùng!
```

---

## 3. Strings

### Declaration

```js
let single = 'Hello';
let double = "World";
let backtick = `Result: ${1 + 2}`; // Template literals
```

### Template Literals (quan trọng!)

```js
// Multi-line
let html = `
  <div>
    <h1>${title}</h1>
    <p>${body}</p>
  </div>
`;

// Tagged templates
function tag(strings, ...values) {
  return strings.reduce((acc, str, i) =>
    acc + str + (values[i] ? `[${values[i]}]` : ''), '');
}
tag`Hello ${"World"}!`; // "Hello [World]!"
```

### Các method quan trọng

| Method | Ví dụ | Kết quả |
|--------|-------|---------|
| `.length` | `"Hello".length` | `5` |
| `.charAt(n)` | `"Hello".charAt(1)` | `"e"` |
| `[n]` | `"Hello"[1]` | `"e"` (ES5+) |
| `.toUpperCase()` | `"hi".toUpperCase()` | `"HI"` |
| `.toLowerCase()` | `"HI".toLowerCase()` | `"hi"` |
| `.indexOf(sub)` | `"hello".indexOf("l")` | `2` |
| `.lastIndexOf(sub)` | `"hello".lastIndexOf("l")` | `3` |
| `.includes(sub)` | `"hello".includes("ll")` | `true` |
| `.startsWith(sub)` | `"hello".startsWith("he")` | `true` |
| `.endsWith(sub)` | `"hello".endsWith("lo")` | `true` |
| `.slice(start, end)` | `"hello".slice(1, 3)` | `"el"` |
| `.substring(start, end)` | `"hello".substring(1, 3)` | `"el"` |
| `.substr(start, length)` | `"hello".substr(1, 3)` | `"ell"` (deprecated) |
| `.trim()` | `"  hi  ".trim()` | `"hi"` |
| `.repeat(n)` | `"ha".repeat(3)` | `"hahaha"` |
| `.replace(re, sub)` | `"haha".replace("ha", "he")` | `"heha"` |
| `.replaceAll(re, sub)` | `"haha".replaceAll("ha", "he")` | `"hehe"` |
| `.split(sep)` | `"a,b,c".split(",")` | `["a","b","c"]` |
| `.padStart(n, ch)` | `"7".padStart(3, "0")` | `"007"` |
| `.padEnd(n, ch)` | `"7".padEnd(3, "0")` | `"700"` |

### Regex với Strings

```js
// Phân biệt chữ hoa/thường
"Hello".match(/hello/i);  // ["Hello"]

// Global flag — replaceAll cũng làm được
"ha ha".replace(/ha/g, "he"); // "he he"

// matchAll — trả về iterator
[..."a1 b2 c3".matchAll(/(\w)(\d)/g)];
// [["a1","a","1"], ["b2","b","2"], ["c3","c","3"]]
```

---

## 4. Arrays

### Tạo và truy cập

```js
let arr = [1, 2, 3];
let arr2 = new Array(3); // [empty × 3] — nguy hiểm!
let arr3 = Array.from("abc"); // ["a","b","c"]

arr[0];    // 1
arr.at(-1); // 3 (ES2022 — truy cập từ cuối)
arr.length; // 3
```

### ⚠️ Array là Object đặc biệt

```js
typeof []; // "object" — không có kiểu "array"
Array.isArray([]); // true ← cách kiểm tra đúng

// Có thể gán property như Object (nhưng đừng làm!)
let arr = [];
arr.prop = "value"; // không ảnh hưởng length
```

### Các thao tác cơ bản

```js
// === MUTATING (thay đổi array gốc) ===
let arr = [1, 2, 3];

arr.push(4);      // [1,2,3,4] — thêm cuối
arr.pop();        // [1,2,3]   — xóa cuối
arr.unshift(0);   // [0,1,2,3] — thêm đầu
arr.shift();      // [1,2,3]   — xóa đầu
arr.splice(1, 1, 'x'); // [1,'x',3] — xóa/thêm tại vị trí
arr.reverse();    // [3,'x',1] — đảo ngược
arr.sort();       // sắp xếp (mặc định: so sánh string!)

// === NON-MUTATING (trả về array mới) ===
arr.slice(0, 2);       // [1,'x'] — cắt
arr.concat([4, 5]);    // [1,'x',3,4,5] — nối
arr.join(' - ');       // "1 - x - 3" — nối thành string

// === SEARCHING ===
arr.indexOf('x');      // 1
arr.includes('x');     // true
arr.find(item => typeof item === 'string'); // 'x'
arr.findIndex(item => typeof item === 'string'); // 1
arr.filter(item => typeof item === 'number'); // [1, 3]
```

### ⚠️ `sort()` mặc định sắp xếp THEO CHUỖI!

```js
[1, 2, 15].sort(); // [1, 15, 2] — SAI logic số!
// Vì: "1" < "15" < "2" (so sánh chuỗi)

// Cách đúng:
[1, 2, 15].sort((a, b) => a - b); // [1, 2, 15]
[1, 2, 15].sort((a, b) => b - a); // [15, 2, 1] — giảm dần
```

---

## 5. Array Methods (CỰC KỲ QUAN TRỌNG)

> **Nguyên tắc:** Học thuộc 12 methods này. Chúng xuất hiện trong MỌI codebase React.

### 🔄 `forEach` — Lặp (không return)

```js
[1, 2, 3].forEach((item, index, array) => {
  console.log(`${index}: ${item}`);
});
// 0: 1
// 1: 2
// 2: 3
```

### 🔄 `map` — Biến đổi từng phần tử → array mới

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

### 🔄 `filter` — Lọc → array mới

```js
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
```

### 🔄 `reduce` — Gộp → single value

```js
[1, 2, 3].reduce((acc, item) => acc + item, 0); // 6
//            ↑ accumulator     ↑ initial value

// reduceRight: duyệt từ phải qua trái
```

### 🔄 `find` — Tìm phần tử đầu tiên thỏa mãn

```js
[1, 2, 3].find(x => x > 1); // 2
[1, 2, 3].find(x => x > 9); // undefined
```

### 🔄 `findIndex` — Tìm index của phần tử đầu tiên thỏa mãn

```js
[1, 2, 3].findIndex(x => x > 1); // 1
[1, 2, 3].findIndex(x => x > 9); // -1
```

### 🔄 `some` — Có ít nhất 1 phần tử thỏa mãn?

```js
[1, 2, 3].some(x => x > 2); // true
[1, 2, 3].some(x => x > 9); // false
```

### 🔄 `every` — TẤT CẢ phần tử thỏa mãn?

```js
[1, 2, 3].every(x => x > 0); // true
[1, 2, 3].every(x => x > 2); // false
```

### 🔄 `flat` — Làm phẳng array lồng

```js
[1, [2, [3]]].flat();     // [1, 2, [3]]
[1, [2, [3]]].flat(2);    // [1, 2, 3]
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]
```

### 🔄 `flatMap` — map + flat(1)

```js
["hello world"].flatMap(str => str.split(" "));
// ["hello", "world"]
```

### 🧠 TỔNG KẾT 12 METHODS

| Method | Input | Output | Dùng khi |
|--------|-------|--------|----------|
| `forEach` | callback | undefined | Side effects |
| `map` | callback | Array mới | Transform từng phần tử |
| `filter` | callback (boolean) | Array mới | Lọc theo điều kiện |
| `reduce` | callback + init | Single value | Tính tổng, gộp data |
| `find` | callback (boolean) | Phần tử \| undefined | Tìm 1 phần tử |
| `findIndex` | callback (boolean) | Index \| -1 | Tìm vị trí |
| `some` | callback (boolean) | boolean | Kiểm tra "có ít nhất 1" |
| `every` | callback (boolean) | boolean | Kiểm tra "tất cả" |
| `flat` | depth | Array mới | Làm phẳng |
| `flatMap` | callback | Array mới | map rồi flat |
| `sort` | compareFn | Array gốc (mutate) | Sắp xếp |
| `reverse` | — | Array gốc (mutate) | Đảo ngược |

---

## 6. Iterables

### Khái niệm

**Iterable** = object có `Symbol.iterator` method, trả về 1 iterator.

**Iterator** = object có `next()` method, trả về `{ value, done }`.

### for...of

```js
// Array là iterable
for (let item of [1, 2, 3]) {
  console.log(item); // 1, 2, 3
}

// String cũng là iterable
for (let ch of "Hi") {
  console.log(ch); // H, i
}
```

### Tự tạo iterable

```js
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

[...range]; // [1, 2, 3, 4, 5]
```

### Array.from — chuyển iterable/array-like → Array

```js
Array.from("hello");      // ["h","e","l","l","o"]
Array.from(range);        // [1, 2, 3, 4, 5]
Array.from(range, x => x * 2); // [2, 4, 6, 8, 10] ← mapping function
```

---

## 7. Map & Set

### Map — Object nâng cao

```js
// Khác Object: key có thể là BẤT KỲ kiểu dữ liệu nào
let map = new Map();

map.set("name", "Hoàng");    // string key
map.set(1, "one");           // number key
map.set(true, "yes");        // boolean key
map.set({id: 1}, "obj");     // object key!

map.get("name"); // "Hoàng"
map.has(true);   // true
map.size;        // 4
map.delete(1);   // xóa
map.clear();     // xóa tất cả
```

### Map iteration

```js
let recipe = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50]
]);

// Duyệt keys
for (let ingredient of recipe.keys()) {
  console.log(ingredient); // cucumber, tomatoes, onion
}

// Duyệt values
for (let amount of recipe.values()) {
  console.log(amount); // 500, 350, 50
}

// Duyệt entries
for (let [key, value] of recipe) { // recipe.entries()
  console.log(`${key}: ${value}`);
}

// forEach
recipe.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

### Object ↔ Map

```js
// Object → Map
let obj = { name: "Hoàng", age: 20 };
let map = new Map(Object.entries(obj));
// Map(2) { "name" => "Hoàng", "age" => 20 }

// Map → Object
let obj2 = Object.fromEntries(map);
// { name: "Hoàng", age: 20 }
```

### Set — Tập hợp không trùng lặp

```js
let set = new Set();

set.add(1);
set.add(2);
set.add(2); // bị bỏ qua (đã có)
set.add(3);

set.size; // 3
set.has(1); // true
set.delete(2);

// Duyệt
for (let value of set) {
  console.log(value); // 1, 3
}

// Ứng dụng: loại bỏ duplicate từ array
let arr = [1, 2, 2, 3, 3, 3];
let unique = [...new Set(arr)]; // [1, 2, 3]
```

---

## 8. WeakMap & WeakSet

### WeakMap

```js
let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, "data"); // chỉ nhận object làm key
weakMap.get(obj); // "data"

obj = null; // object bị GC dọn → entry trong WeakMap cũng biến mất
```

**Khác Map:**
- Key PHẢI là object (không phải primitive)
- Không có iteration (không `.keys()`, `.values()`, `.entries()`)
- Không có `.size`
- Cho phép Garbage Collection dọn object key khi không còn reference

**Ứng dụng:** Lưu metadata cho object mà không sợ memory leak

```js
// WeakMap trong thực tế: cache kết quả tính toán
let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = /* tính toán nặng */;
    cache.set(obj, result);
  }
  return cache.get(obj);
}
```

### WeakSet

```js
let weakSet = new WeakSet();
let user1 = { name: "Hoàng" };

weakSet.add(user1);
weakSet.has(user1); // true

user1 = null; // object bị GC dọn → entry trong WeakSet biến mất
```

**Ứng dụng:** Track xem object đã được "visited" chưa

---

## 9. Object.keys/values/entries

```js
let user = { name: "Hoàng", age: 20 };

Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Hoàng", 20]
Object.entries(user); // [["name","Hoàng"], ["age",20]]
```

### ⚠️ Symbol properties bị bỏ qua!

```js
let id = Symbol("id");
let user = { [id]: 123, name: "Hoàng" };

Object.keys(user); // ["name"] — Symbol bị bỏ qua
Object.getOwnPropertySymbols(user); // [Symbol(id)] — chỉ lấy Symbol
Reflect.ownKeys(user); // ["name", Symbol(id)] — lấy cả 2
```

### Transform object

```js
let prices = { banana: 1, orange: 2, apple: 0.5 };

// Nhân đôi giá
let doubled = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
// { banana: 2, orange: 4, apple: 1 }
```

---

## 10. Destructuring Assignment

### Array Destructuring

```js
let [a, b] = [1, 2]; // a=1, b=2

// Bỏ qua phần tử
let [first, , third] = [1, 2, 3]; // first=1, third=3

// Rest operator
let [head, ...tail] = [1, 2, 3, 4]; // head=1, tail=[2,3,4]

// Default value
let [x = 10, y = 20] = [5]; // x=5, y=20

// Swap biến (không cần biến tạm)
[a, b] = [b, a];
```

### Object Destructuring

```js
let { name, age } = { name: "Hoàng", age: 20 };
// name="Hoàng", age=20

// Rename
let { name: ten, age: tuoi } = { name: "Hoàng", age: 20 };
// ten="Hoàng", tuoi=20

// Default value
let { name = "Ẩn danh", age = 18 } = { name: "Hoàng" };
// name="Hoàng", age=18

// Rest operator
let { name, ...rest } = { name: "Hoàng", age: 20, city: "HN" };
// name="Hoàng", rest={ age: 20, city: "HN" }
```

### Nested Destructuring

```js
let {
  user: {
    profile: { displayName }
  }
} = {
  user: {
    profile: {
      displayName: "Hoàng",
      avatar: "url"
    }
  }
};
// displayName="Hoàng"
```

### Function Parameter Destructuring (cực kỳ phổ biến trong React!)

```js
// Thay vì:
function greet(props) {
  console.log(props.name, props.age);
}

// Viết:
function greet({ name, age, city = "Hà Nội" }) {
  console.log(name, age, city);
}

greet({ name: "Hoàng", age: 20 }); // "Hoàng 20 Hà Nội"
```

---

## 11. Date & Time

### Tạo Date

```js
let now = new Date();                 // thời điểm hiện tại
let date1 = new Date("2026-05-06");   // ISO string
let date2 = new Date(2026, 4, 6);     // year, month(0-11), day
let date3 = new Date(0);              // Unix epoch (1970-01-01)
let timestamp = Date.now();           // milliseconds từ epoch
```

### Các method get/set

```js
let d = new Date();

d.getFullYear();  // 2026
d.getMonth();     // 4 (May, 0-indexed!)
d.getDate();      // 6
d.getDay();       // 3 (Wednesday, 0=Sunday)
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getTime();      // timestamp (ms)
```

### Format & so sánh

```js
// So sánh: dùng timestamp
let d1 = new Date("2026-05-06");
let d2 = new Date("2026-05-07");
d1 < d2;  // true

// Format (không có built-in tốt — dùng Intl hoặc thư viện)
new Intl.DateTimeFormat('vi-VN').format(new Date()); // "06/05/2026"
new Intl.DateTimeFormat('vi-VN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(new Date()); // "thứ Tư, 6 tháng 5, 2026"
```

---

## 12. JSON Methods

### JSON.stringify

```js
let user = { name: "Hoàng", age: 20, skills: ["JS", "React"] };

JSON.stringify(user);
// '{"name":"Hoàng","age":20,"skills":["JS","React"]}'
```

### Các tham số

```js
// replacer: chọn field
JSON.stringify(user, ["name", "age"]);
// '{"name":"Hoàng","age":20}'

// space: format đẹp
JSON.stringify(user, null, 2);
// {
//   "name": "Hoàng",
//   "age": 20,
//   "skills": ["JS", "React"]
// }
```

### JSON.parse

```js
let str = '{"name":"Hoàng","age":20}';
let obj = JSON.parse(str);

// reviver: transform khi parse
let str2 = '{"date":"2026-05-06T00:00:00.000Z"}';
let obj2 = JSON.parse(str2, (key, value) =>
  key === "date" ? new Date(value) : value
);
obj2.date instanceof Date; // true
```

### ⚠️ JSON không hỗ trợ:

| Không hỗ trợ | Kết quả |
|-------------|---------|
| Function | Bị bỏ qua |
| `undefined` | Bị bỏ qua |
| Symbol | Bị bỏ qua |
| `NaN`, `Infinity` | → `null` |
| Circular reference | ❌ Lỗi! |
| Date | → string ISO |

```js
let obj = {
  fn: function() {},  // bị bỏ qua
  undef: undefined,   // bị bỏ qua
  sym: Symbol("id"),  // bị bỏ qua
  num: NaN,           // → null
};

JSON.stringify(obj);
// '{"num":null}'
```

### Deep Clone với JSON (nhanh nhưng có giới hạn)

```js
let clone = JSON.parse(JSON.stringify(original));
// ✅ Nhanh, đơn giản
// ❌ Mất function, undefined, Symbol, Date, circular refs
```

### Custom `toJSON()`

```js
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

JSON.stringify(room); // "23"
```

---

## 🎯 KEY TAKEAWAYS

1. **Primitive có methods** nhờ Object Wrapper tạm thời
2. **`0.1 + 0.2 !== 0.3`** — luôn nhớ IEEE 754
3. **`sort()` mặc định so sánh string** — luôn truyền compare function cho số
4. **12 Array methods** — phải thuộc lòng, viết được không cần Google
5. **Map**: key có thể là bất kỳ kiểu gì; **Set**: tự động loại bỏ duplicate
6. **WeakMap/WeakSet**: cho phép GC dọn dẹp, tránh memory leak
7. **Destructuring** — kỹ năng cơ bản trong React (props, state)
8. **JSON**: `stringify` → string, `parse` → object, nhưng mất function/undefined/Symbol
9. **`Object.entries` + `Object.fromEntries`** = transform objects như arrays

---

*Sang [resources.md](./resources.md) để xem danh sách tài liệu tham khảo →*
