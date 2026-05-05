/**
 * Bài 1.1: Closures, Scope & Hoisting — BÀI TẬP
 *
 * 📋 Hướng dẫn:
 * 1. Đọc kỹ từng câu hỏi, dự đoán output TRƯỚC KHI chạy code
 * 2. Viết lời giải thích bằng comment
 * 3. Tự code solution cho bài tập yêu cầu
 * 4. So sánh với solutions.js
 *
 * 🏷️ Độ khó: ⭐ Dễ | ⭐⭐ Trung bình | ⭐⭐⭐ Khó
 */

console.log("=== BÀI TẬP CLOSURES, SCOPE & HOISTING ===\n");

// ═══════════════════════════════════════════════════════════
// PHẦN A: SCOPE (5 câu)
// ═══════════════════════════════════════════════════════════

// ⭐ A1. Dự đoán output và giải thích
function questionA1() {
  var x = 10;
  if (true) {
    var x = 20;
    let y = 30;
  }
  console.log("A1: x =", x);
  // console.log("A1: y =", y); // Bỏ comment dòng này, điều gì xảy ra?
}
questionA1();

// ⭐ A2. Lexical Scope — output là gì?
const COLOR = "red";

function getColor() {
  const COLOR = "blue";
  function inner() {
    return COLOR;
  }
  return inner();
}
console.log("A2:", getColor());

// ⭐⭐ A3. Scope Chain — output là gì?
function questionA3() {
  let a = 1;

  function inner() {
    console.log("A3:", a);
  }

  // TODO: Không được sửa inner(), thêm code ở đây để inner() in ra 100

  inner();
}
questionA3(); // Hiện tại in: 1

// ⭐⭐ A4. Block scope với let
// Dự đoán output của đoạn code sau:
function questionA4() {
  let x = 1;
  {
    let x = 2;
    {
      let x = 3;
      console.log("A4 inner:", x);
    }
    console.log("A4 middle:", x);
  }
  console.log("A4 outer:", x);
}
questionA4();

// ⭐⭐ A5. Tham chiếu vs giá trị trong scope
function questionA5() {
  let arr = [1, 2, 3];

  function modify(a) {
    a.push(4);     // Thay đổi mảng gốc
    a = [5, 6, 7]; // Gán lại tham số → KHÔNG ảnh hưởng biến ngoài
    a.push(8);
  }

  modify(arr);
  console.log("A5:", arr); // Output?
}
questionA5();

// ═══════════════════════════════════════════════════════════
// PHẦN B: HOISTING (5 câu)
// ═══════════════════════════════════════════════════════════

// ⭐ B1. Dự đoán output
console.log("B1 a:", typeof foo);
console.log("B1 b:", typeof bar);
var foo = "hello";
let bar = "world";

// ⭐⭐ B2. Function hoisting — output là gì?
function questionB2() {
  console.log("B2:", typeof myFunc);

  var myFunc = "not a function";

  function myFunc() {
    return "I am a function";
  }

  console.log("B2 after:", typeof myFunc);
}
questionB2();

// ⭐⭐ B3. Temporal Dead Zone
function questionB3() {
  // TODO: Viết 1 function demo TDZ bằng cách dùng try-catch
  // In ra: "Đang trong TDZ!" khi bắt được ReferenceError
  // Sử dụng let
}
questionB3();

// ⭐⭐ B4. Hoisting với var + function
// Dự đoán output:
console.log("B4:", typeof myVar);
var myVar = 10;
function myVar() {}
console.log("B4 after:", typeof myVar);

// ⭐⭐⭐ B5. Phân biệt hoisting của các loại function
function questionB5() {
  // Dự đoán output của từng dòng
  // console.log("B5 arrow:", arrowFunc);    // Dòng này gây lỗi gì?
  // console.log("B5 expr:", exprFunc);      // Dòng này output là gì?
  console.log("B5 decl:", typeof declFunc);   // Output?

  var exprFunc = function () { return "expr"; };
  const arrowFunc = () => "arrow";
  function declFunc() { return "decl"; }

  console.log("B5 expr after:", typeof exprFunc);
  console.log("B5 arrow after:", typeof arrowFunc);
}
questionB5();

// ═══════════════════════════════════════════════════════════
// PHẦN C: CLOSURES (8 câu)
// ═══════════════════════════════════════════════════════════

// ⭐ C1. Closure cơ bản — output là gì?
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = createAdder(5);
const add10 = createAdder(10);
console.log("C1:", add5(3), add10(3));

// ⭐⭐ C2. Multiple closures
function createFunctions() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(() => i);
  }
  return funcs;
}
const [f1, f2, f3] = createFunctions();
console.log("C2:", f1(), f2(), f3()); // Output?

// ⭐⭐ C3. Sửa lỗi closure trong vòng lặp
// YÊU CẦU: Sửa function createFunctions2 để f1(), f2(), f3()
//          lần lượt trả về 0, 1, 2
//          (Dùng 2 cách: let và IIFE)
function createFunctions2() {
  const funcs = [];
  // TODO: Sửa code ở đây
  for (var i = 0; i < 3; i++) {
    funcs.push(() => i);
  }
  return funcs;
}

// ⭐⭐ C4. Closure với setTimeout
function questionC4() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log("C4 var:", i), i * 100);
  }

  // TODO: Sửa để in ra 1, 2, 3 (dùng let)
}
questionC4();

// ⭐⭐ C5. Viết function createCounter
// YÊU CẦU: Viết function createCounter() trả về object có 3 method:
//   increment() → tăng và trả về giá trị mới
//   decrement() → giảm và trả về giá trị mới
//   getValue() → trả về giá trị hiện tại
//   reset()    → reset về 0
// Giá trị count phải là PRIVATE (không truy cập từ ngoài)

// TODO: Viết createCounter ở đây

// Test:
// const counter = createCounter();
// console.log("C5:", counter.increment()); // 1
// console.log("C5:", counter.increment()); // 2
// console.log("C5:", counter.decrement()); // 1
// console.log("C5:", counter.getValue());  // 1
// console.log("C5:", counter.count);       // undefined

// ⭐⭐⭐ C6. Viết function once(fn)
// YÊU CẦU: Viết function once(fn) nhận 1 function và
// trả về function mới CHỈ CHẠY fn DUY NHẤT 1 LẦN.
// Các lần gọi sau trả về kết quả của lần đầu tiên.

// TODO: Viết once() ở đây

// Test:
// let count = 0;
// const incrementOnce = once(() => ++count);
// console.log("C6:", incrementOnce()); // 1
// console.log("C6:", incrementOnce()); // 1 (vẫn là 1)
// console.log("C6:", count);           // 1

// ⭐⭐⭐ C7. Viết function memoize(fn)
// YÊU CẦU: Viết function memoize(fn) cache kết quả
// dựa trên tham số. Khi gọi lại với cùng tham số,
// trả về kết quả từ cache (không gọi fn).

// TODO: Viết memoize() ở đây

// Test:
// let callCount = 0;
// const square = memoize((n) => {
//   callCount++;
//   return n * n;
// });
// console.log("C7:", square(4)); // 16, callCount = 1
// console.log("C7:", square(4)); // 16, callCount = 1 (cache hit)
// console.log("C7:", square(5)); // 25, callCount = 2
// console.log("C7:", callCount); // 2

// ⭐⭐⭐ C8. Memory Leak với Closure
// YÊU CẦU: Phân tích đoạn code sau, chỉ ra memory leak
// và viết cách fix

function createHeavyHandler() {
  const largeData = new Array(1000000).fill("🐘 data");

  return {
    handleClick() {
      // Chỉ dùng 1 phần nhỏ của largeData
      return largeData[0];
    },
    // Cách fix: thêm method cleanup
    // destroy() { ... }
  };
}

const handler = createHeavyHandler();
console.log("C8:", handler.handleClick()); // "🐘 data"
// largeData vẫn bị giữ trong memory dù chỉ cần phần tử đầu tiên

// TODO: Viết cách fix — thêm method destroy() giải phóng tham chiếu

// ═══════════════════════════════════════════════════════════
// PHẦN D: TỔNG HỢP (2 câu)
// ═══════════════════════════════════════════════════════════

// ⭐⭐⭐ D1. Interview Question — output là gì?
function questionD1() {
  let result = [];

  for (var i = 0; i < 3; i++) {
    result.push({
      index: i,
      getIndex: function () {
        return i;
      },
      getIndexClosure: (function (j) {
        return function () {
          return j;
        };
      })(i),
    });
  }

  result.forEach((item, idx) => {
    console.log(`D1 [${idx}]: index=${item.index}, getIndex=${item.getIndex()}, getIndexClosure=${item.getIndexClosure()}`);
  });
}
questionD1();

// ⭐⭐⭐ D2. Viết function debounce closure
// YÊU CẦU: Viết function debounce(fn, delay) sử dụng closure
// để trì hoãn việc gọi fn. Nếu được gọi liên tục trong delay ms,
// chỉ gọi fn 1 lần sau khi ngừng gọi.

// TODO: Viết debounce() ở đây

// Test:
// const log = debounce((msg) => console.log("D2:", msg), 200);
// log("a"); log("b"); log("c");
// // Chỉ in "D2: c" sau 200ms
