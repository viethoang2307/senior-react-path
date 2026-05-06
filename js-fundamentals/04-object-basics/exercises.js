// ==========================================
// Module 04: Object Basics - Bài Tập
// ==========================================
"use strict";

// Bài 1: Object Creation
// Tạo object `student` với: name, age, grades (array 3 môn), method average()
// TODO

// Bài 2: Reference Detective
let x = { value: 10 };
let y = x;
let z = { ...x };
y.value = 20;
z.value = 30;
// x.value = ?, y.value = ?, z.value = ?
// TODO: Ghi câu trả lời

// Bài 3: Deep Clone
// Viết deepClone(obj) — recursive, không dùng JSON hay structuredClone
// TODO

// Bài 4: This Behavior
// Viết code chứng minh arrow function không bind this của object gọi nó
// TODO

// Bài 5: Calculator Constructor
// Tạo Calculator() với read(a,b), sum(), mul()
// TODO

// Bài 6: Chainable Ladder
// Tạo object ladder có methods up(), down(), showStep() chainable:
// ladder.up().up().down().showStep(); // 1
// TODO

// Bài 7: Optional Chaining
const company = {
  name: "Tech Corp",
  departments: {
    engineering: {
      manager: { name: "Alice", email: "alice@tech.com" },
      staff: [{ name: "Bob" }, { name: null }]
    }
  }
};
// Lấy: email của manager, tên của staff[1] (an toàn)
// TODO

// Bài 8: Count All Properties
// Viết countProperties(obj) đếm tất cả key (kể cả Symbol)
// TODO

console.log("\n✅ Module 04 exercises loaded!");
