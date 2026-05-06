# Module 03: Code Quality — Viết Code Sạch, Chuyên Nghiệp

## 📘 Mục tiêu
Viết JS chất lượng cao: dễ đọc, dễ bảo trì, ít bug. Làm chủ debugging & testing cơ bản.

---

## 1. Debugging

### Console Methods
```javascript
console.log("Basic");
console.table([{a:1},{a:2}]);     // Bảng dữ liệu
console.group("Group"); ... console.groupEnd();
console.time("timer"); ... console.timeEnd("timer");
console.trace();                   // Stack trace
```

### `debugger` statement
```javascript
function buggy(a, b) {
  debugger; // Code dừng ở đây nếu DevTools mở
  return a + b;
}
```

### Chrome DevTools
- **Sources tab**: Đặt breakpoint, step over/into/out
- **Watch**: Theo dõi giá trị biến
- **Call Stack**: Xem chuỗi function call

---

## 2. Coding Style

### Naming Convention
- Biến/hàm: **camelCase** — `userName`, `getUserById`
- Class: **PascalCase** — `User`, `ShoppingCart`
- Hằng số: **UPPER_SNAKE_CASE** — `MAX_RETRY`, `API_BASE_URL`

### Formatting
```javascript
// ✅ Tốt
if (condition) {
  doSomething();
}

// ❌ Xấu
if(condition){doSomething();}
```

### Best Practices
- Dùng **const** mặc định, **let** khi cần gán lại
- Hàm nên làm **1 việc** (Single Responsibility)
- Tránh magic numbers: `const HTTP_OK = 200;`
- **Early return** thay vì if-else lồng sâu

---

## 3. Comments

```javascript
// ❌ Comment thừa
let x = 5; // Gán 5 cho x

// ✅ Comment hữu ích (giải thích TẠI SAO)
// Dùng bitwise vì nhanh hơn Math.floor với số dương
let rounded = num | 0;

// ✅ JSDoc cho hàm public
/**
 * Tính tổng các số trong mảng
 * @param {number[]} numbers
 * @returns {number}
 */
function sum(numbers) { /*...*/ }
```

---

## 4. ESLint & Prettier

```bash
npm init -y
npm install --save-dev eslint prettier
npx eslint --init
```

Cấu hình cơ bản (`.eslintrc.json`):
```json
{
  "env": { "browser": true, "es2021": true, "node": true },
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "warn",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"]
  }
}
```

---

## 5. Testing với Mocha

```javascript
const assert = require("assert");

describe("Math", function() {
  it("should add correctly", function() {
    assert.strictEqual(1 + 2, 3);
  });
});
```

---

## 6. Polyfills & Transpilers

- **Polyfill**: Thêm tính năng mới vào browser cũ (vd: `Promise` cho IE)
- **Transpiler**: Chuyển ES6+ → ES5 (vd: **Babel**)

---

## 📚 Tham khảo
- [javascript.info — Debugging](https://javascript.info/debugging-chrome)
- [javascript.info — Coding Style](https://javascript.info/coding-style)
- [javascript.info — Comments](https://javascript.info/comments)
- [Airbnb JS Style Guide](https://github.com/airbnb/javascript)
