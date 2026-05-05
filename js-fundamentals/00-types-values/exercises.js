// ============================================================
// Module 00: Types & Values - BAI TAP
// Muc do: De → Trung binh → Kho → Sieu kho
// ============================================================

// =============================================
// CAP DO 1: CO BAN (Lam quen)
// =============================================

// 1.1 typeof co ban
// Dien ket qua typeof cho moi gia tri sau:
function exercise1_1() {
  const answers = {
    a: typeof 42,
    b: typeof "hello",
    c: typeof true,
    d: typeof undefined,
    e: typeof null,
    f: typeof [],
    g: typeof {},
    h: typeof function(){},
    i: typeof Symbol("x"),
    j: typeof 42n,
  };
  return answers;
}

// 1.2 Phan biet null vs undefined
// Viet ham tra ve "null" neu value === null, "undefined" neu === undefined,
// "co gia tri" neu khac ca hai
function exercise1_2(value) {
  // TODO: Implement
}

// 1.3 Kiem tra kieu Array
// Viet ham isArrayValue tra ve true neu value la array, false neu khong
// (KHONG dung Array.isArray)
function exercise1_3(value) {
  // TODO: Implement (goi y: chi can 1 cach don gian)
}

// =============================================
// CAP DO 2: TRUNG BINH (Hieu sau)
// =============================================

// 2.1 Pass by Value
// Viet ham swapTwoNumbers(a, b) tra ve object {a, b} da swap
// KHONG duoc thay doi a, b ben ngoai ham
function exercise2_1(a, b) {
  // TODO: Implement
}

// 2.2 Deep Clone co ban
// Viet ham cloneObject(obj) tao ra mot object moi co cung key/value
// (chi clone 1 cap, khong can deep)
function exercise2_2(obj) {
  // TODO: Implement
}

// 2.3 Mutate vs Reassign
// Cho doan code sau, hay du doan ket qua cua obj sau khi chay
function exercise2_3() {
  const obj = { count: 1 };

  function mutate(o) {
    o.count += 1;
  }

  function reassign(o) {
    o = { count: 100 };
  }

  mutate(obj);
  reassign(obj);

  // TODO: obj.count bang bao nhieu? Giai thich
  return obj.count;
}

// 2.4 NaN la gi?
// Viet ham isReallyNaN(value) tra ve true neu value THUC SU la NaN
// (KHONG dung Number.isNaN)
function exercise2_4(value) {
  // TODO: Implement
}

// =============================================
// CAP DO 3: KHO (Van dung)
// =============================================

// 3.1 Deep Clone
// Viet ham deepClone(value) clone bat ky gia tri nao (primitives, arrays, objects)
// Xu ly ca nested objects/arrays
function exercise3_1(value) {
  // TODO: Implement
}

// 3.2 Type Coercion Predictor
// Cho cac phep tinh sau, du doan ket qua VA giai thich:
function exercise3_2() {
  const predictions = {
    a: [] + [],           // ???
    b: [] + {},           // ???
    c: {} + [],           // ???
    d: {} + {},           // ???
    e: 1 + "1",          // ???
    f: 1 - "1",          // ???
    g: true + true,       // ???
    h: true + false,      // ???
    i: "b" + "a" + +"a" + "a",  // ???
  };
  // TODO: Tra ve object voi ket qua VA giai thich
  return predictions;
}

// 3.3 Immutable Update Pattern
// Viet ham updateUser(user, key, value) tra ve user MOI da cap nhat
// KHONG duoc mutate user cu (immutable update)
function exercise3_3(user, key, value) {
  // TODO: Implement
}

// 3.4 Type Guard
// Viet ham safeGet(obj, path) lay gia tri tu nested object an toan
// Vi du: safeGet({a: {b: {c: 42}}}, "a.b.c") → 42
//        safeGet({a: {b: {c: 42}}}, "a.b.x") → undefined (khong throw error)
function exercise3_4(obj, path) {
  // TODO: Implement
}

// =============================================
// CAP DO 4: SIEU KHO (Master)
// =============================================

// 4.1 Structural Sharing (Immer-style)
// Viet ham produce(obj, recipe) cho phep "mutate" draft nhung tra ve obj moi
// Neu khong co thay doi → tra ve chinh obj cu (structural sharing)
//
// Vi du:
//   const base = { user: { name: "Hoang", age: 22 } };
//   const next = produce(base, draft => { draft.user.age = 23; });
//   next.user.age === 23;  // true
//   next.user !== base.user;  // true (da thay doi)
//   next.user.name === base.user.name; // van la "Hoang"
//
// Goi y: Dung Proxy
function exercise4_1(obj, recipe) {
  // TODO: Implement (Challenge!)
}

// 4.2 Type System Mini
// Viet ham validate(value, schema) kiem tra value co dung schema khong
//
// Schema format:
//   { type: "string" }
//   { type: "number", min: 0, max: 100 }
//   { type: "object", properties: { name: { type: "string" }, age: { type: "number" } } }
//   { type: "array", items: { type: "number" } }
//
// Tra ve { valid: true } hoac { valid: false, error: "..." }
function exercise4_2(value, schema) {
  // TODO: Implement
}

// 4.3 Circular Reference Detector
// Viet ham hasCircularReference(obj) kiem tra object co tham chieu vong khong
//
// Vi du:
//   const obj = { a: 1 };
//   obj.self = obj;  // vong!
//   hasCircularReference(obj) → true
function exercise4_3(obj) {
  // TODO: Implement
}

// =============================================
// EXPORT (dung cho testing)
// =============================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    exercise1_1, exercise1_2, exercise1_3,
    exercise2_1, exercise2_2, exercise2_3, exercise2_4,
    exercise3_1, exercise3_2, exercise3_3, exercise3_4,
    exercise4_1, exercise4_2, exercise4_3
  };
}
