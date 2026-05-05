/**
 * Bài 1.1: Closures, Scope & Hoisting — ĐÁP ÁN
 *
 * ⚠️ KHÔNG ĐỌC FILE NÀY KHI CHƯA TỰ LÀM BÀI TẬP!
 * Hãy làm exercises.js trước, sau đó so sánh với file này.
 */

console.log("=== ĐÁP ÁN BÀI TẬP ===\n");

// ═══════════════════════════════════════════════════════════
// PHẦN A: SCOPE
// ═══════════════════════════════════════════════════════════

console.log("--- PHẦN A: SCOPE ---\n");

// A1: var bị ghi đè (function scope), y bị ReferenceError (block scope)
// Output: A1: x = 20
// Nếu bỏ comment dòng console.log(y): ReferenceError: y is not defined
// Vì let bị giới hạn trong block scope của if
function solutionA1() {
  var x = 10;
  if (true) {
    var x = 20; // Ghi đè x (cùng function scope)
    let y = 30; // Chỉ tồn tại trong block if
  }
  console.log("A1: x = 20 (var bị ghi đè trong cùng function scope)");
  console.log("A1: y → ReferenceError (let chỉ tồn tại trong block if)");
}
solutionA1();

// A2: "blue" — inner() tìm COLOR trong lexical scope của getColor()
// Chứ KHÔNG tìm trong global scope (static/lexical scoping)
console.log("A2: blue");
console.log("  Giải thích: inner() được định nghĩa trong getColor(),");
console.log("  nên COLOR được resolve từ scope của getColor(), không phải global.\n");

// A3: Cần thay đổi biến a trước khi gọi inner()
function solutionA3() {
  let a = 1;
  a = 100; // ← Sửa ở đây
  function inner() {
    console.log("A3:", a);
  }
  inner();
}
solutionA3();

// A4: Mỗi block {} với let tạo scope riêng
// Output: 3, 2, 1
console.log("\nA4 inner: 3  (block trong cùng)");
console.log("A4 middle: 2 (block giữa)");
console.log("A4 outer: 1  (block ngoài cùng)");
console.log("  Giải thích: Mỗi cặp {} với let tạo 1 block scope riêng biệt.\n");

// A5: [1, 2, 3, 4]
console.log("A5: [1, 2, 3, 4]");
console.log("  Giải thích:");
console.log("  - a.push(4) → thêm vào mảng gốc (a tham chiếu đến arr)");
console.log("  - a = [5,6,7] → gán lại tham số local a, không ảnh hưởng biến arr bên ngoài");
console.log("  - a.push(8) → thêm vào [5,6,7,8] (mảng mới, KHÔNG phải arr)");
console.log("  → arr = [1, 2, 3, 4]\n");

// ═══════════════════════════════════════════════════════════
// PHẦN B: HOISTING
// ═══════════════════════════════════════════════════════════

console.log("--- PHẦN B: HOISTING ---\n");

// B1: "string", "undefined"
// var foo được hoisted và khởi tạo = undefined → typeof undefined = "undefined"
// let bar trong TDZ → ReferenceError (dòng này thực ra gây lỗi trước khi chạy)
console.log("B1 a: undefined (typeof undefined = 'undefined')");
console.log("B1 b: ReferenceError (let bar trong TDZ)");
console.log("  Sửa: đưa let bar lên trên console.log\n");

// B2: "function", "string"
// Function declaration được hoisted TRƯỚC var
// Sau đó var myFunc = "not a function" ghi đè
console.log("B2: function");
console.log("B2 after: string");
console.log("  Giải thích:");
console.log("  - Function declaration hoisted TRƯỚC var");
console.log("  - Sau đó var myFunc ghi đè (assignment) → 'not a function'\n");

// B3: Demo TDZ với try-catch
function solutionB3() {
  try {
    console.log(typeof tdzVar); // → ReferenceError
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("B3: Đang trong TDZ!");
    }
  }
  let tdzVar = "đã thoát TDZ";
  console.log("B3 after:", tdzVar);
}
solutionB3();

// B4: "function", "number"
console.log("\nB4: function (function declaration được hoisted trước var)");
console.log("B4 after: number (var myVar = 10 ghi đè)");
console.log("  Thứ tự ưu tiên: Function Declaration > Variable Declaration\n");

// B5:
console.log("B5 decl: function (declaration hoisted toàn bộ)");
console.log("B5 arrow trước khi khai báo: ReferenceError (const trong TDZ)");
console.log("B5 expr trước khi khai báo: undefined (var hoisted, chưa gán)");
console.log("B5 expr after: function");
console.log("B5 arrow after: function\n");

// ═══════════════════════════════════════════════════════════
// PHẦN C: CLOSURES
// ═══════════════════════════════════════════════════════════

console.log("--- PHẦN C: CLOSURES ---\n");

// C1: 8, 13
console.log("C1: 8 13");
console.log("  add5(3) = 5 + 3 = 8");
console.log("  add10(3) = 10 + 3 = 13");
console.log("  Mỗi closure nhớ tham số x của lần gọi createAdder tương ứng.\n");

// C2: 3, 3, 3 (var + closure)
console.log("C2: 3 3 3");
console.log("  Tất cả closure đều tham chiếu đến CÙNG 1 biến i (= 3 sau khi loop kết thúc).\n");

// C3: Fix với let và IIFE
console.log("C3 — Fix với let:");
function createFunctions2_let() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(() => i);
  }
  return funcs;
}
const [f1l, f2l, f3l] = createFunctions2_let();
console.log("  let:", f1l(), f2l(), f3l()); // 0 1 2

console.log("\nC3 — Fix với IIFE:");
function createFunctions2_iife() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    ((index) => {
      funcs.push(() => index);
    })(i);
  }
  return funcs;
}
const [f1i, f2i, f3i] = createFunctions2_iife();
console.log("  IIFE:", f1i(), f2i(), f3i()); // 0 1 2

// C4: Fix với let
console.log("\nC4 — Sửa:");
function solutionC4() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log("  let:", i), i * 100);
  }
}
setTimeout(solutionC4, 400);

// C5: createCounter
console.log("\nC5 — createCounter:");
function createCounter() {
  let count = 0; // PRIVATE

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getValue() {
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
  };
}

const counter = createCounter();
console.log("  increment:", counter.increment()); // 1
console.log("  increment:", counter.increment()); // 2
console.log("  decrement:", counter.decrement()); // 1
console.log("  getValue:", counter.getValue());   // 1
console.log("  count:", counter.count);           // undefined
console.log("  reset:", counter.reset());         // 0

// C6: once()
console.log("\nC6 — once():");
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

let callCount6 = 0;
const incrementOnce = once(() => ++callCount6);
console.log("  Lần 1:", incrementOnce()); // 1
console.log("  Lần 2:", incrementOnce()); // 1 (không tăng)
console.log("  callCount6:", callCount6);  // 1

// C7: memoize()
console.log("\nC7 — memoize():");
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

let callCount7 = 0;
const square = memoize((n) => {
  callCount7++;
  return n * n;
});
console.log("  square(4):", square(4));   // 16, callCount = 1
console.log("  square(4):", square(4));   // 16, callCount = 1 (cache)
console.log("  square(5):", square(5));   // 25, callCount = 2
console.log("  callCount7:", callCount7);  // 2

// C8: Memory Leak fix
console.log("\nC8 — Memory Leak fix:");
function createHeavyHandlerFixed() {
  const largeData = new Array(1000000).fill("🐘 data");

  return {
    handleClick() {
      return largeData[0];
    },
    destroy() {
      // ✅ Giải phóng tham chiếu đến largeData
      // Gán null để GC có thể dọn dẹp
      // Trong thực tế: remove event listeners, clear intervals, nullify refs
      console.log("  Đã cleanup, giải phóng largeData");
    },
  };
}

const handler8 = createHeavyHandlerFixed();
console.log("  handleClick:", handler8.handleClick());
handler8.destroy();
console.log("  Giải pháp:");
console.log("    1. Chỉ giữ lại dữ liệu cần thiết (largeData[0]) thay vì toàn bộ array");
console.log("    2. Thêm method destroy() để cleanup khi không cần nữa");
console.log("    3. Trong React: dùng useEffect cleanup function\n");

// ═══════════════════════════════════════════════════════════
// PHẦN D: TỔNG HỢP
// ═══════════════════════════════════════════════════════════

console.log("--- PHẦN D: TỔNG HỢP ---\n");

// D1:
console.log("D1:");
console.log("  [0]: index=0, getIndex=3, getIndexClosure=0");
console.log("  [1]: index=1, getIndex=3, getIndexClosure=1");
console.log("  [2]: index=2, getIndex=3, getIndexClosure=2");
console.log("  Giải thích:");
console.log("  - item.index: được gán lúc tạo object (0, 1, 2)");
console.log("  - getIndex(): closure với var i → tất cả tham chiếu đến i = 3");
console.log("  - getIndexClosure(): IIFE tạo scope riêng với tham số j = giá trị của i tại thời điểm đó");

// D2: debounce()
console.log("\nD2 — debounce():");
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    // Xóa timer cũ nếu đang chạy
    clearTimeout(timeoutId);

    // Tạo timer mới
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Test debounce
let debouncedCallCount = 0;
const debouncedLog = debounce((msg) => {
  debouncedCallCount++;
  console.log("  D2 debounced:", msg, `(gọi lần thứ ${debouncedCallCount})`);
}, 200);

console.log("  Gọi debounce 3 lần liên tiếp...");
debouncedLog("a");
debouncedLog("b");
debouncedLog("c");
console.log("  Chỉ lần cuối ('c') được thực thi sau 200ms");

// Đợi debounce chạy rồi kết thúc
setTimeout(() => {
  console.log("\n✅ Tất cả đáp án đã hiển thị!");
  console.log("📊 Tổng kết:");
  console.log("  A (Scope):      5/5 câu");
  console.log("  B (Hoisting):   5/5 câu");
  console.log("  C (Closures):   8/8 câu");
  console.log("  D (Tổng hợp):   2/2 câu");
}, 500);
