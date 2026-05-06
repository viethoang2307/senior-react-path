# Module 04: Object Basics — Đối Tượng Trong JavaScript

## 📘 Mục tiêu
Hiểu sâu Object: tạo, tham chiếu, sao chép, methods, `this`, constructor, optional chaining, Symbol.

---

## 1. Tạo Object

```javascript
// Literal
const user = { name: "Hoàng", age: 24 };

// Computed properties
const key = "favorite";
const obj = { [key]: "Phở" };

// Constructor
const obj2 = new Object();
```

---

## 2. Tham Chiếu & Sao Chép

> Object được lưu dưới dạng **reference**, không phải value!

```javascript
let a = {};
let b = a;       // b → cùng object với a
b.name = "test";
console.log(a.name); // "test" ← a cũng thay đổi!

{} === {}; // false (so sánh địa chỉ)
```

### Clone Object
```javascript
// Shallow copy
const clone = { ...obj };
const clone2 = Object.assign({}, obj);

// Deep copy
const deep = structuredClone(obj);
// Hoặc: JSON.parse(JSON.stringify(obj)) — chỉ cho JSON-safe data
```

---

## 3. Garbage Collection

JS tự động dọn rác (**Mark-and-Sweep**). Object bị xóa khi không còn reference. Không cần `free()` thủ công.

---

## 4. Methods & `this`

```javascript
const user = {
  name: "Hoàng",
  sayHi() { console.log(`Hi, ${this.name}`); },
  arrow: () => { console.log(this.name); } // ❌ Không có this riêng
};
user.sayHi(); // "Hi, Hoàng"
```

> `this` được xác định tại thời điểm **GỌI hàm**, không phải thời điểm KHAI BÁO.

---

## 5. Constructor & `new`

```javascript
function User(name) {
  // this = {}; (ngầm)
  this.name = name;
  // return this; (ngầm)
}
const user = new User("Hoàng");
```

Khi gọi `new`: tạo object rỗng → gán `this` → chạy body → return `this`.

---

## 6. Optional Chaining `?.`

```javascript
const user = null;
user?.name;          // undefined (không throw error!)
user?.address?.city; // undefined
user?.sayHi?.();     // undefined
```

---

## 7. Symbol — Key "ẩn"

```javascript
const id = Symbol("id");
const id2 = Symbol("id");
id === id2; // false — Symbol luôn unique

const user = { [id]: 123 };
Object.keys(user); // [] — Symbol bị ẩn khỏi iteration
```

---

## 8. Object → Primitive

JS tự động convert object khi cần, ưu tiên `Symbol.toPrimitive`:

```javascript
const obj = {
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? "text" : 42;
  }
};
String(obj); // "text"
+obj;        // 42
```

---

## 📚 Tham khảo
- [javascript.info — Objects](https://javascript.info/object)
- [javascript.info — Object methods](https://javascript.info/object-methods)
- [javascript.info — Constructor](https://javascript.info/constructor-new)
- [javascript.info — Optional chaining](https://javascript.info/optional-chaining)
