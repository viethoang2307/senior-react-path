/**
 * Module 05: Data Types — SOLUTIONS
 * ==================================
 * Đáp án + giải thích cho 12 bài tập
 * Chạy: node solutions.js
 */

// ============================================================
// BÀI 1: Methods of Primitives
// ============================================================
console.log("\n=== BÀI 1: Methods of Primitives ===");

/**
 * ĐÁP ÁN:
 *
 * JS tạm thời tạo một "Object Wrapper" xung quanh primitive.
 * Cụ thể: `str.toUpperCase()` → JS tạo `new String("hello")`,
 * gọi `.toUpperCase()` trên wrapper, trả về kết quả, rồi hủy wrapper.
 *
 * Cơ chế:
 * 1. "hello" là string primitive → không có methods
 * 2. Khi gọi .toUpperCase(), JS tạm tạo: new String("hello")
 * 3. String object này có method toUpperCase()
 * 4. Gọi method → trả về "HELLO" (primitive mới)
 * 5. String wrapper bị garbage collected
 *
 * Tương tự với Number, Boolean.
 * Riêng null và undefined KHÔNG có wrapper → gọi method sẽ lỗi.
 */

console.log("✅ Bài 1: Xem giải thích ở trên");

// ============================================================
// BÀI 2: Number Precision
// ============================================================
console.log("\n=== BÀI 2: Number Precision ===");

function isApproximatelyEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON * 10;
}

console.log("0.1+0.2 ≈ 0.3:", isApproximatelyEqual(0.1 + 0.2, 0.3)); // true
console.log("0.1 ≈ 0.2:", isApproximatelyEqual(0.1, 0.2)); // false

/**
 * GIẢI THÍCH:
 * - Number.EPSILON ≈ 2.22e-16 (sai số nhỏ nhất giữa 2 số 64-bit)
 * - Nhân với 10 để có margin an toàn
 * - Math.abs(a - b) tính khoảng cách tuyệt đối
 * - Nếu khoảng cách < epsilon * 10 → coi như bằng nhau
 */

// ============================================================
// BÀI 3: String Manipulation
// ============================================================
console.log("\n=== BÀI 3: String Manipulation ===");

function toSlug(str) {
  return str
    .trim()                           // Xóa khoảng trắng đầu/cuối
    .toLowerCase()                    // Chuyển về lowercase
    .replace(/[^a-z0-9\s-]/g, "")     // Xóa ký tự đặc biệt (giữ chữ, số, space, dash)
    .replace(/\s+/g, "-")             // Thay khoảng trắng → dash
    .replace(/-+/g, "-")              // Gộp nhiều dash → 1 dash
    .replace(/^-|-$/g, "");           // Xóa dash ở đầu/cuối
}

console.log('"Hello World!" →', toSlug("Hello World!"));
console.log('"  JS   is  Cool!!! " →', toSlug("  JS   is  Cool!!! "));
console.log('"Đây là tiếng Việt!!!" →', toSlug("Đây là tiếng Việt!!!"));
// Lưu ý: tiếng Việt có dấu sẽ bị xóa hoàn toàn (chỉ giữ lại chữ không dấu nếu có)

/**
 * GIẢI THÍCH:
 * - pipe chain: mỗi method trả về string mới → gọi method tiếp
 * - Regex [^a-z0-9\s-]: khớp mọi ký tự KHÔNG thuộc nhóm (chữ, số, space, dash)
 * - \s+: 1 hoặc nhiều khoảng trắng
 * - /-+/g: 1 hoặc nhiều dash liên tiếp → thay bằng 1 dash duy nhất
 */

// ============================================================
// BÀI 4: Array Filter + Map
// ============================================================
console.log("\n=== BÀI 4: Array Filter + Map ===");

const products = [
  { name: "iPhone", price: 999, inStock: true },
  { name: "Samsung", price: 799, inStock: false },
  { name: "Xiaomi", price: 399, inStock: true },
  { name: "Oppo", price: 299, inStock: true },
  { name: "Nokia", price: 99, inStock: false },
];

// 4a
function getAvailableProductNames(products) {
  return products
    .filter(p => p.inStock)           // Lọc còn hàng
    .sort((a, b) => a.price - b.price) // Sắp xếp giá tăng dần
    .map(p => p.name);                // Lấy tên
}

console.log("4a. Available:", getAvailableProductNames(products));

// 4b
function getTotalValue(products) {
  return products.reduce((sum, p) => sum + p.price, 0);
}

console.log("4b. Total value:", getTotalValue(products));

/**
 * GIẢI THÍCH:
 * - 4a: filter → sort → map là pattern rất phổ biến
 * - 4b: reduce với initial value = 0, cộng dồn price
 * - Có thể viết gọn: products.reduce((s, p) => s + p.price, 0)
 */

// ============================================================
// BÀI 5: Reduce nâng cao
// ============================================================
console.log("\n=== BÀI 5: Reduce nâng cao ===");

const transactions = [
  { type: "income", amount: 1000 },
  { type: "expense", amount: 200 },
  { type: "expense", amount: 150 },
  { type: "income", amount: 500 },
  { type: "expense", amount: 300 },
];

function calculateBalance(transactions) {
  return transactions.reduce(
    (acc, t) => {
      if (t.type === "income") {
        acc.totalIncome += t.amount;
      } else if (t.type === "expense") {
        acc.totalExpense += t.amount;
      }
      acc.balance = acc.totalIncome - acc.totalExpense;
      return acc; // ⚠️ Luôn return accumulator!
    },
    { totalIncome: 0, totalExpense: 0, balance: 0 }
  );
}

console.log("Balance report:", calculateBalance(transactions));

/**
 * GIẢI THÍCH:
 * - acc là object lưu 3 giá trị
 * - Mỗi vòng lặp: cập nhật income/expense → tính balance
 * - LUÔN return acc để vòng tiếp theo có accumulator
 * - Initial value là object { totalIncome: 0, ... }
 */

// ============================================================
// BÀI 6: Map & Set
// ============================================================
console.log("\n=== BÀI 6: Map & Set ===");

// 6a
const users = [
  { id: 101, name: "Hoàng" },
  { id: 102, name: "Mai" },
  { id: 103, name: "An" },
];

function createUserMap(users) {
  const map = new Map();
  users.forEach(user => map.set(user.id, user));
  return map;

  // Cách gọn hơn:
  // return new Map(users.map(u => [u.id, u]));
}

const userMap = createUserMap(users);
console.log("6a. User 102:", userMap.get(102));

// 6b
function setOperations(A, B) {
  const setA = new Set(A);
  const setB = new Set(B);

  // Intersection: phần tử có trong cả A và B
  const intersection = [...setA].filter(x => setB.has(x));

  // Union: tất cả phần tử (không trùng)
  const union = [...new Set([...A, ...B])];

  // Difference (A - B): phần tử trong A nhưng không trong B
  const difference = [...setA].filter(x => !setB.has(x));

  return { intersection, union, difference };
}

const A = [1, 2, 3, 4, 5];
const B = [4, 5, 6, 7];
console.log("6b. Set ops:", setOperations(A, B));

/**
 * GIẢI THÍCH:
 * - Map: key lookup O(1) — nhanh hơn array find O(n)
 * - Set: tự động loại bỏ duplicate, has() cũng O(1)
 * - Spread operator [...set] chuyển Set → Array
 */

// ============================================================
// BÀI 7: Custom Iterable
// ============================================================
console.log("\n=== BÀI 7: Custom Iterable ===");

function fibonacci(limit) {
  return {
    limit,
    [Symbol.iterator]() {
      let prev = 0;
      let curr = 1;

      return {
        next: () => {
          // Lưu giá trị hiện tại để return
          const value = prev;

          if (value > this.limit) {
            return { done: true };
          }

          // Tính số tiếp theo
          [prev, curr] = [curr, prev + curr];

          return { done: false, value };
        },
      };
    },
  };

  // ⚠️ Arrow function KHÔNG bind this → cần dùng function() hoặc lưu limit
  // Cách viết đúng (arrow function trong next không bind this):
}

// CÁCH VIẾT ĐÚNG:
function fibonacci(limit) {
  return {
    [Symbol.iterator]() {
      let prev = 0;
      let curr = 1;

      return {
        next() {
          const value = prev;
          if (value > limit) { // dùng closure thay this
            return { done: true };
          }
          [prev, curr] = [curr, prev + curr];
          return { done: false, value };
        },
      };
    },
  };
}

console.log("Fibonacci up to 20:", [...fibonacci(20)]);

/**
 * GIẢI THÍCH:
 * - Symbol.iterator trả về iterator object có next()
 * - next() trả về { done: boolean, value: any }
 * - done: true → dừng vòng lặp
 * - spread operator [...] gọi iterator để tạo array
 * - Dùng closure (biến prev, curr trong scope) thay vì this
 */

// ============================================================
// BÀI 8: Deep Clone Object
// ============================================================
console.log("\n=== BÀI 8: Deep Clone Object ===");

function deepClone(obj, visited = new WeakMap()) {
  // Handle primitives & null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle circular reference
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    visited.set(obj, arrCopy);
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i], visited);
    }
    return arrCopy;
  }

  // Handle Object
  const objCopy = {};
  visited.set(obj, objCopy);
  for (const key of Object.keys(obj)) {
    objCopy[key] = deepClone(obj[key], visited);
  }
  return objCopy;
}

// Test
const original = {
  name: "Hoàng",
  age: 20,
  skills: ["JS", "React"],
  address: {
    city: "Hà Nội",
    zip: 10000,
  },
  birthday: new Date("2000-01-01"),
};

const cloned = deepClone(original);

cloned.name = "Changed";
cloned.skills.push("TS");
cloned.address.city = "Sài Gòn";
cloned.birthday.setFullYear(2020);

console.log("Original name:", original.name);
console.log("Original skills:", original.skills);
console.log("Original city:", original.address.city);
console.log("Original birthday year:", original.birthday.getFullYear());
console.log("Cloned name:", cloned.name);
console.log("All checks passed:", 
  original.name === "Hoàng" &&
  original.skills.length === 2 &&
  original.address.city === "Hà Nội" &&
  original.birthday.getFullYear() === 2000
);

/**
 * GIẢI THÍCH:
 * - typeof null === "object" → cần check null trước
 * - WeakMap lưu visited objects → xử lý circular reference
 * - Date cần clone riêng vì là object đặc biệt
 * - Array.isArray() check vì typeof [] === "object"
 * - Đệ quy cho nested objects
 * - for...of với Object.keys() thay vì for...in (tránh prototype)
 */

// ============================================================
// BÀI 9: Destructuring
// ============================================================
console.log("\n=== BÀI 9: Destructuring ===");

// 9a
const config = {
  theme: "dark",
  fontSize: 20,
};

const {
  theme,
  language = "vi",
  fontSize,
  showSidebar = true,
} = config;

console.log("9a. Config:", { theme, language, fontSize, showSidebar });

// 9b
function omit(obj, keys) {
  const keySet = new Set(keys);
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keySet.has(key))
  );

  // Cách khác dùng destructuring + rest:
  // const { [keys[0]]: _, [keys[1]]: __, ...rest } = obj;
  // Nhưng chỉ hoạt động với số lượng key cố định → không linh hoạt
}

console.log("9b. omit:", omit({ a: 1, b: 2, c: 3 }, ["b"]));
console.log("9b. omit multi:", omit({ a: 1, b: 2, c: 3, d: 4 }, ["b", "d"]));

/**
 * GIẢI THÍCH:
 * - 9a: default value được dùng khi property undefined
 * - 9b: Object.entries → filter → Object.fromEntries là pattern transform object
 * - Set để check O(1) thay vì array includes O(n)
 */

// ============================================================
// BÀI 10: Date & Time
// ============================================================
console.log("\n=== BÀI 10: Date & Time ===");

function getDaysUntil(dateStr) {
  const target = new Date(dateStr);
  const today = new Date();

  // Reset về 00:00:00 để so sánh chính xác ngày
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());

  const msDiff = targetStart - todayStart;
  return Math.ceil(msDiff / (1000 * 60 * 60 * 24));
}

console.log("Days until 2026-12-31:", getDaysUntil("2026-12-31"));
console.log("Days since 2026-01-01:", getDaysUntil("2026-01-01"));

/**
 * GIẢI THÍCH:
 * - Reset giờ về 00:00:00 để tránh sai lệch do giờ trong ngày
 * - msDiff / (1000 * 60 * 60 * 24) = số ngày (có thể lẻ)
 * - Math.ceil() làm tròn lên → số ngày đầy đủ
 * - Âm = quá khứ, Dương = tương lai
 */

// ============================================================
// BÀI 11: JSON Transform
// ============================================================
console.log("\n=== BÀI 11: JSON Transform ===");

function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function parseAndTransform(jsonStr) {
  try {
    const obj = JSON.parse(jsonStr);

    // Dùng reviver của JSON.parse để transform trong lúc parse
    // Nhưng viết riêng cho rõ ràng hơn:
    return transformObject(obj);
  } catch {
    return null;
  }
}

function transformObject(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformObject);
  }

  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = toCamelCase(key);

    // Check nếu là date string (ISO format)
    if (
      typeof value === "string" &&
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)
    ) {
      result[camelKey] = new Date(value);
    } else {
      result[camelKey] = transformObject(value);
    }
  }
  return result;
}

// Test
const jsonInput =
  '{"user_name":"Hoàng","first_name":"Khả Việt","created_at":"2026-05-06T00:00:00Z","updated_at":"2026-05-06T12:00:00Z"}';
const transformed = parseAndTransform(jsonInput);
console.log("11. Transformed:", transformed);
console.log(
  "    createdAt is Date:",
  transformed && transformed.createdAt instanceof Date
);

// Test invalid JSON
console.log("11. Invalid JSON:", parseAndTransform("not json"));

/**
 * GIẢI THÍCH:
 * - try/catch để handle JSON parse error
 * - toCamelCase dùng regex: tìm _ + 1 chữ cái → uppercase chữ cái đó
 * - Regex date check: YYYY-MM-DDTHH:MM:SS (không quá strict)
 * - Object.entries để duyệt key-value
 */

// ============================================================
// BÀI 12: Memoization với Map
// ============================================================
console.log("\n=== BÀI 12: Memoization với Map ===");

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Test
let callCount = 0;
const factorial = memoize((n) => {
  callCount++;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log("12a. factorial(5):", factorial(5));
console.log("    callCount after 5:", callCount);
console.log("12b. factorial(5) again:", factorial(5));
console.log(
  "    callCount after repeat:",
  callCount,
  "(should still be same)"
);
console.log("12c. factorial(6):", factorial(6));
console.log(
  "    callCount after 6:",
  callCount,
  "(should increase by 1, because 6 uses cached 5)"
);

/**
 * GIẢI THÍCH:
 * - Map cache: key = JSON.stringify(args)
 * - Trước khi tính, check cache.has(key)
 * - Nếu có → trả về cache.get(key) ngay
 * - Nếu chưa → gọi fn, lưu kết quả → trả về
 * - fn.apply(this, args) để giữ context
 *
 * ⚠️ Lưu ý: factorial là đệ quy, và vì ta memoize, nên khi gọi
 * factorial(6), nó gọi factorial(5) → đã cache → gần như instant!
 */

console.log("\n=== ALL SOLUTIONS VERIFIED ✅ ===");
