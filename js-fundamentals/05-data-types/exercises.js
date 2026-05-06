/**
 * Module 05: Data Types — EXERCISES
 * ====================================
 * 12 bài tập từ ⭐ Nhận biết → 🔥 Vận dụng → 💡 Tư duy
 *
 * HƯỚNG DẪN:
 * 1. KHÔNG XEM solutions.js trước
 * 2. Viết code vào phần "// Your code here"
 * 3. Chạy: node exercises.js
 * 4. Tự so sánh với solutions.js sau khi làm xong
 */

// ============================================================
// ⭐ BÀI 1: Methods of Primitives (Dễ)
// ============================================================
console.log("\n=== BÀI 1: Methods of Primitives ===");

/**
 * Giải thích tại sao dòng code sau hoạt động:
 *    let str = "hello";
 *    console.log(str.toUpperCase()); // "HELLO"
 *
 * Trong khi "hello" là primitive, không phải object?
 *
 * Viết câu trả lời ngắn gọn:
 */

// Your answer here:
const answer1 = `
[Viết câu trả lời của bạn ở đây]
`;

// ============================================================
// ⭐ BÀI 2: Number Precision (Dễ)
// ============================================================
console.log("\n=== BÀI 2: Number Precision ===");

/**
 * Viết hàm `isApproximatelyEqual(a, b)` — kiểm tra 2 số thực có gần bằng nhau
 * không (sai số trong khoảng Number.EPSILON * 10).
 *
 * Ví dụ:
 *   isApproximatelyEqual(0.1 + 0.2, 0.3) // true
 *   isApproximatelyEqual(0.1, 0.2)      // false
 */

function isApproximatelyEqual(a, b) {
  // Your code here
}

// Test:
console.log("0.1+0.2 ≈ 0.3:", isApproximatelyEqual(0.1 + 0.2, 0.3)); // true
console.log("0.1 ≈ 0.2:", isApproximatelyEqual(0.1, 0.2)); // false

// ============================================================
// ⭐ BÀI 3: String Manipulation (Dễ)
// ============================================================
console.log("\n=== BÀI 3: String Manipulation ===");

/**
 * Viết hàm `toSlug(str)` — chuyển 1 chuỗi thành URL slug:
 * - Chuyển hết về lowercase
 * - Thay khoảng trắng bằng dấu gạch ngang (-)
 * - Xóa các ký tự đặc biệt (giữ lại chữ cái, số, dấu gạch ngang)
 *
 * Ví dụ:
 *   toSlug("Hello World!")        // "hello-world"
 *   toSlug("  JS   is  Cool!!! ") // "js-is-cool"
 */

function toSlug(str) {
  // Your code here
}

// Test:
console.log('"Hello World!" →', toSlug("Hello World!"));
console.log('"  JS   is  Cool!!! " →', toSlug("  JS   is  Cool!!! "));

// ============================================================
// ⭐⭐ BÀI 4: Array Filter + Map (Trung bình)
// ============================================================
console.log("\n=== BÀI 4: Array Filter + Map ===");

const products = [
  { name: "iPhone", price: 999, inStock: true },
  { name: "Samsung", price: 799, inStock: false },
  { name: "Xiaomi", price: 399, inStock: true },
  { name: "Oppo", price: 299, inStock: true },
  { name: "Nokia", price: 99, inStock: false },
];

/**
 * 4a. Viết hàm `getAvailableProductNames(products)` — trả về mảng TÊN
 *     các sản phẩm còn hàng, sắp xếp theo giá tăng dần.
 *
 *     Kết quả mong đợi: ["Oppo", "Xiaomi", "iPhone"]
 */

function getAvailableProductNames(products) {
  // Your code here
}

console.log("4a. Available:", getAvailableProductNames(products));

/**
 * 4b. Viết hàm `getTotalValue(products)` — tính tổng giá trị
 *     của TẤT CẢ sản phẩm (cả hết hàng).
 */

function getTotalValue(products) {
  // Your code here
}

console.log("4b. Total value:", getTotalValue(products)); // 2595

// ============================================================
// ⭐⭐ BÀI 5: Reduce nâng cao (Trung bình)
// ============================================================
console.log("\n=== BÀI 5: Reduce nâng cao ===");

const transactions = [
  { type: "income", amount: 1000 },
  { type: "expense", amount: 200 },
  { type: "expense", amount: 150 },
  { type: "income", amount: 500 },
  { type: "expense", amount: 300 },
];

/**
 * Dùng reduce để tính:
 * - totalIncome: tổng thu nhập
 * - totalExpense: tổng chi tiêu
 * - balance: thu nhập - chi tiêu
 *
 * Trả về object: { totalIncome, totalExpense, balance }
 */

function calculateBalance(transactions) {
  // Your code here
}

const report = calculateBalance(transactions);
console.log("Balance report:", report);
// { totalIncome: 1500, totalExpense: 650, balance: 850 }

// ============================================================
// ⭐⭐ BÀI 6: Map & Set (Trung bình)
// ============================================================
console.log("\n=== BÀI 6: Map & Set ===");

/**
 * 6a. Cho mảng users, dùng Map để tạo index tra cứu user theo id.
 *     Viết hàm `createUserMap(users)` trả về Map<id, user>.
 */

const users = [
  { id: 101, name: "Hoàng" },
  { id: 102, name: "Mai" },
  { id: 103, name: "An" },
];

function createUserMap(users) {
  // Your code here
}

const userMap = createUserMap(users);
console.log("6a. User 102:", userMap.get(102)); // { id: 102, name: "Mai" }

/**
 * 6b. Cho 2 mảng A và B. Dùng Set để tìm:
 *     - intersection (phần giao)
 *     - union (phần hợp)
 *     - difference (A - B)
 *
 *     Viết hàm `setOperations(A, B)` trả về { intersection, union, difference }
 */

function setOperations(A, B) {
  // Your code here
}

const A = [1, 2, 3, 4, 5];
const B = [4, 5, 6, 7];
const result = setOperations(A, B);
console.log("6b. Set ops:", result);
// { intersection: [4, 5], union: [1,2,3,4,5,6,7], difference: [1, 2, 3] }

// ============================================================
// ⭐⭐⭐ BÀI 7: Custom Iterable (Khó)
// ============================================================
console.log("\n=== BÀI 7: Custom Iterable ===");

/**
 * Tạo một iterable object `fibonacci` với thuộc tính `limit`.
 * Khi duyệt bằng for...of hoặc spread, nó trả về dãy Fibonacci
 * từ 0 đến số Fibonacci đầu tiên vượt quá limit.
 *
 * Ví dụ:
 *   const fib = fibonacci(20);
 *   [...fib] // [0, 1, 1, 2, 3, 5, 8, 13, 21]
 *            // 21 > 20 nên dừng (bao gồm cả 21)
 *
 *   Thực tế, thường dừng TRƯỚC KHI vượt limit:
 *   [...fibonacci(20)] // [0, 1, 1, 2, 3, 5, 8, 13]
 */

function fibonacci(limit) {
  // Your code here
  // Trả về iterable object có Symbol.iterator
}

// Test:
console.log("Fibonacci up to 20:", [...fibonacci(20)]);
// Expected: [0, 1, 1, 2, 3, 5, 8, 13]

// ============================================================
// ⭐⭐⭐ BÀI 8: Deep Clone Object (Khó)
// ============================================================
console.log("\n=== BÀI 8: Deep Clone Object ===");

/**
 * Viết hàm `deepClone(obj)` — clone sâu 1 object bất kỳ
 * (bao gồm nested objects, arrays, Date).
 *
 * KHÔNG dùng JSON.parse(JSON.stringify()) hoặc structuredClone!
 *
 * Gợi ý:
 * - Kiểm tra kiểu dữ liệu (Array, Date, Object, primitive)
 * - Đệ quy cho nested objects
 * - Xử lý circular reference (bonus)
 */

function deepClone(obj) {
  // Your code here
}

// Test:
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

// Modify clone
cloned.name = "Changed";
cloned.skills.push("TS");
cloned.address.city = "Sài Gòn";
cloned.birthday.setFullYear(2020);

console.log("Original name:", original.name); // "Hoàng" (không đổi)
console.log("Original skills:", original.skills); // ["JS", "React"] (không đổi)
console.log("Original city:", original.address.city); // "Hà Nội" (không đổi)
console.log("Original birthday:", original.birthday.getFullYear()); // 2000 (không đổi)

// ============================================================
// ⭐⭐ BÀI 9: Destructuring (Trung bình)
// ============================================================
console.log("\n=== BÀI 9: Destructuring ===");

/**
 * 9a. Cho object config, dùng destructuring để lấy ra:
 *     - theme (mặc định "light")
 *     - language (mặc định "vi")
 *     - fontSize (mặc định 16)
 *     - showSidebar (mặc định true)
 */

const config = {
  theme: "dark",
  fontSize: 20,
};

// Your code here (1 dòng destructuring):
// const { ??? } = config;

// console.log({ theme, language, fontSize, showSidebar });
// { theme: "dark", language: "vi", fontSize: 20, showSidebar: true }

/**
 * 9b. Dùng rest operator để viết hàm `omit(obj, keys)` —
 *     trả về object mới đã loại bỏ các key được chỉ định.
 *
 * Ví dụ:
 *   omit({ a: 1, b: 2, c: 3 }, ["b"]) // { a: 1, c: 3 }
 */

function omit(obj, keys) {
  // Your code here
}

console.log("9b. omit:", omit({ a: 1, b: 2, c: 3 }, ["b"]));

// ============================================================
// ⭐ BÀI 10: Date & Time (Dễ)
// ============================================================
console.log("\n=== BÀI 10: Date & Time ===");

/**
 * Viết hàm `getDaysUntil(dateStr)` — tính số ngày từ hôm nay
 * đến 1 ngày cho trước (định dạng "YYYY-MM-DD").
 *
 * - Trả về số nguyên dương nếu ngày đó trong tương lai
 * - Trả về số nguyên âm nếu ngày đó trong quá khứ
 * - Làm tròn lên (ceil)
 */

function getDaysUntil(dateStr) {
  // Your code here
}

console.log("Days until 2026-12-31:", getDaysUntil("2026-12-31"));

// ============================================================
// ⭐⭐ BÀI 11: JSON Transform (Trung bình)
// ============================================================
console.log("\n=== BÀI 11: JSON Transform ===");

/**
 * Viết hàm `parseAndTransform(jsonStr)`:
 * - Parse JSON string
 * - Convert tất cả các key thành camelCase
 * - Convert tất cả date string (định dạng ISO) thành Date object
 * - Nếu JSON không hợp lệ, trả về null (không throw)
 *
 * Ví dụ:
 *   const input = '{"user_name":"Hoàng","created_at":"2026-05-06T00:00:00Z"}';
 *   parseAndTransform(input)
 *   // { userName: "Hoàng", createdAt: Date("2026-05-06") }
 */

function parseAndTransform(jsonStr) {
  // Your code here
}

// Test:
const jsonInput =
  '{"user_name":"Hoàng","first_name":"Khả Việt","created_at":"2026-05-06T00:00:00Z","updated_at":"2026-05-06T12:00:00Z"}';
const transformed = parseAndTransform(jsonInput);
console.log("11. Transformed:", transformed);
console.log(
  "    createdAt is Date:",
  transformed && transformed.createdAt instanceof Date
);

// ============================================================
// 💡 BÀI 12: Tổng hợp — Memoization với Map (Tư duy)
// ============================================================
console.log("\n=== BÀI 12: Memoization với Map ===");

/**
 * Viết hàm `memoize(fn)` — nhận 1 function và trả về function đã được cache.
 *
 * Yêu cầu:
 * - Dùng Map làm cache (key = JSON.stringify của arguments)
 * - Nếu gọi lại với cùng arguments, trả về kết quả đã cache
 * - Hàm gốc chỉ được gọi 1 lần cho mỗi bộ arguments
 *
 * Ví dụ:
 *   const memoizedAdd = memoize((a, b) => {
 *     console.log('Computing...');
 *     return a + b;
 *   });
 *
 *   memoizedAdd(1, 2); // log "Computing..." → 3
 *   memoizedAdd(1, 2); // KHÔNG log → 3 (từ cache)
 *   memoizedAdd(2, 3); // log "Computing..." → 5
 */

function memoize(fn) {
  // Your code here
}

// Test:
let callCount = 0;
const factorial = memoize((n) => {
  callCount++;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log("12a. factorial(5):", factorial(5));
console.log("    callCount after 5:", callCount);
console.log("12b. factorial(5) again:", factorial(5));
console.log("    callCount after repeat:", callCount, "(should still be same)");
console.log("12c. factorial(6):", factorial(6));
console.log("    callCount after 6:", callCount, "(should increase by 1)");

// ============================================================
console.log("\n=== ALL EXERCISES READY ===");
console.log("👉 Làm xong hãy so sánh với solutions.js!");
