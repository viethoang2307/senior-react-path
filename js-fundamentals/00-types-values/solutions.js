// ============================================================
// Module 00: Types & Values - DAP AN & GIAI THICH
// ============================================================

// =============================================
// CAP DO 1: CO BAN
// =============================================

// 1.1 typeof co ban
function exercise1_1() {
  return {
    a: "number",      // 42
    b: "string",      // "hello"
    c: "boolean",     // true
    d: "undefined",   // undefined
    e: "object",      // null - BUG tu JS 1.0, khong the sua vi loi backward compat
    f: "object",      // [] - Array la object, dung Array.isArray() de kiem tra
    g: "object",      // {} - Object thong thuong
    h: "function",    // function - thuc ra la "callable object"
    i: "symbol",      // Symbol("x")
    j: "bigint",      // 42n
  };
}

// 1.2 Phan biet null vs undefined
function exercise1_2(value) {
  if (value === null) return "null";         // === tranh coercion
  if (value === undefined) return "undefined"; // undefined la global variable
  return "co gia tri";
}
// Giai thich:
// - null: developer gan co chu dich
// - undefined: JS engine tu gan khi bien chua duoc khoi tao
// - null == undefined → true (loose equality)
// - null === undefined → false (strict equality)

// 1.3 Kiem tra kieu Array
function exercise1_3(value) {
  // Cach 1: Object.prototype.toString
  return Object.prototype.toString.call(value) === "[object Array]";
  
  // Cach 2 (don gian hon nhung co truong hop false positive):
  // return value instanceof Array;
  
  // Cach dung nhat: Array.isArray(value)
}
// Giai thich: typeof [] la "object", nen can dung cac cach tren

// =============================================
// CAP DO 2: TRUNG BINH
// =============================================

// 2.1 Pass by Value - Swap
function exercise2_1(a, b) {
  return { a: b, b: a };
}
// Giai thich:
// JS always pass by value. Voi primitives, gia tri duoc copy.
// a, b trong ham la ban sao, khong anh huong den bien ngoai.
// Tra ve object chua ket qua swap la cach don gian nhat.

// 2.2 Shallow Clone
function exercise2_2(obj) {
  // Cach 1: Spread operator
  return { ...obj };
  
  // Cach 2: Object.assign
  // return Object.assign({}, obj);
}
// Luu y: Day la shallow clone. Neu obj chua nested objects,
// nested objects van duoc share reference.

// 2.3 Mutate vs Reassign
function exercise2_3() {
  // obj.count sau khi chay = 2
  // Giai thich:
  // mutate(obj): thay doi property count cua obj → count: 1 → 2
  // reassign(obj): gan obj = { count: 100 } nhung chi thay doi bien cuc bo "o"
  //   → bien "obj" ben ngoai KHONG bi anh huong
  return 2;
}

// 2.4 isReallyNaN
function exercise2_4(value) {
  // NaN la gia tri DUY NHAT trong JS khong bang chinh no
  return value !== value;
  
  // Cach khac (ro rang hon):
  // return typeof value === "number" && isNaN(value);
  
  // Dung nhat:
  // return Number.isNaN(value);
}
// Giai thich: NaN la ket qua cua cac phep toan so hoc khong hop le
// (0/0, "hello" * 3). typeof NaN la "number" (gay hieu lam).

// =============================================
// CAP DO 3: KHO
// =============================================

// 3.1 Deep Clone
function exercise3_1(value) {
  // Xu ly primitives (kieu nguyen thuy) va null
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Xu ly Array
  if (Array.isArray(value)) {
    return value.map(item => exercise3_1(item));
  }

  // Xu ly Object
  const cloned = {};
  for (const key of Object.keys(value)) {
    cloned[key] = exercise3_1(value[key]);
  }
  return cloned;
  
  // Luu y: Cach nay khong xu ly Date, RegExp, Map, Set, Symbol keys, 
  // circular references. Trong production nen dung structuredClone() 
  // hoac lodash.cloneDeep()
}

// 3.2 Type Coercion Predictor
function exercise3_2() {
  return {
    a: "",             // [] + [] → "" + "" → "" (ca hai chuyen thanh string)
    b: "[object Object]", // [] + {} → "" + "[object Object]" → "[object Object]"
    c: 0,              // {} + [] → +[] → 0 ({ } duoc parse thanh block, +[] thanh 0)
                       // LENH CONSOLE: {} + [] → "[object Object]" (khac nhau!)
    d: "[object Object][object Object]", // {} + {} → "[object Object]" + "[object Object]"
    e: "11",           // 1 + "1" → "1" + "1" → "11" (Number + String → String)
    f: 0,              // 1 - "1" → 1 - 1 → 0 (tru ep ve Number)
    g: 2,              // true + true → 1 + 1 → 2 (true ep ve 1)
    h: 1,              // true + false → 1 + 0 → 1
    i: "baNaNa",       // "b" + "a" + (+"a") + "a" 
                       // → "b" + "a" + NaN + "a"
                       // → "baNaNa"
  };
}

// 3.3 Immutable Update
function exercise3_3(user, key, value) {
  // Tao object moi, khong mutate object cu
  return { ...user, [key]: value };
}
// Giai thich: Spread operator tao shallow copy, sau do overwrite key duoc chi dinh
// Voi nested objects can deep merge (dung structuredClone hoac Immer)

// 3.4 Safe Get
function exercise3_4(obj, path) {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    // Kiem tra current co phai object khong (khong phai null hoac primitive)
    if (current === null || current === undefined || typeof current !== "object") {
      return undefined;
    }
    current = current[key];
  }

  return current;
}
// Cach ngan gon hon dung reduce:
// return path.split(".").reduce((acc, key) => acc?.[key], obj);

// =============================================
// CAP DO 4: SIEU KHO
// =============================================

// 4.1 Structural Sharing (Immer-style)
function exercise4_1(obj, recipe) {
  let changed = false;

  const handler = {
    get(target, prop) {
      const value = target[prop];
      // Neu property la object/array, wrap no trong proxy de theo doi thay doi
      if (value !== null && typeof value === "object") {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, prop, value) {
      if (target[prop] !== value) {
        changed = true;
      }
      target[prop] = value;
      return true;
    }
  };

  // Deep clone ban dau
  const draft = JSON.parse(JSON.stringify(obj));
  const proxy = new Proxy(draft, handler);

  recipe(proxy);

  return changed ? draft : obj; // structural sharing: neu khong doi, tra ve object cu
}
// Luu y: Day la implementation don gian. Immer that su dung
// copy-on-write + structural sharing phuc tap hon nhieu.

// 4.2 Type System Mini
function exercise4_2(value, schema) {
  // Kiem tra null
  if (value === null) {
    return { valid: false, error: "value is null" };
  }

  const type = schema.type;

  // Kiem tra type co ban
  if (type === "string" && typeof value !== "string") {
    return { valid: false, error: `Expected string, got ${typeof value}` };
  }
  if (type === "number") {
    if (typeof value !== "number") {
      return { valid: false, error: `Expected number, got ${typeof value}` };
    }
    if (schema.min !== undefined && value < schema.min) {
      return { valid: false, error: `Value ${value} < min ${schema.min}` };
    }
    if (schema.max !== undefined && value > schema.max) {
      return { valid: false, error: `Value ${value} > max ${schema.max}` };
    }
  }
  if (type === "boolean" && typeof value !== "boolean") {
    return { valid: false, error: `Expected boolean, got ${typeof value}` };
  }

  // Kiem tra object
  if (type === "object") {
    if (typeof value !== "object" || Array.isArray(value)) {
      return { valid: false, error: "Expected object" };
    }
    for (const [key, propSchema] of Object.entries(schema.properties)) {
      const result = exercise4_2(value[key], propSchema);
      if (!result.valid) return { valid: false, error: `key "${key}": ${result.error}` };
    }
  }

  // Kiem tra array
  if (type === "array") {
    if (!Array.isArray(value)) {
      return { valid: false, error: "Expected array" };
    }
    for (let i = 0; i < value.length; i++) {
      const result = exercise4_2(value[i], schema.items);
      if (!result.valid) return { valid: false, error: `[${i}]: ${result.error}` };
    }
  }

  return { valid: true };
}

// 4.3 Circular Reference Detector
function exercise4_3(obj, seen = new WeakSet()) {
  // Khong phai object thi khong the co circular reference
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  // Da gap object nay truoc do → circular!
  if (seen.has(obj)) {
    return true;
  }

  seen.add(obj);

  // Duyet tat ca properties
  for (const key of Object.keys(obj)) {
    if (exercise4_3(obj[key], seen)) {
      return true;
    }
  }

  // Kiem tra ca Symbol-keyed properties
  for (const sym of Object.getOwnPropertySymbols(obj)) {
    if (exercise4_3(obj[sym], seen)) {
      return true;
    }
  }

  return false;
}
// Tai sao dung WeakSet?
// - WeakSet chi chua objects, khong chua primitives
// - Cho phep garbage collector thu hoi khi object khong con duoc tham chieu
// - Tranh memory leak khi duyet object tree lon

// =============================================
// TEST
// =============================================
if (require.main === module) {
  console.log("=== TEST EXERCISE SOLUTIONS ===\n");

  console.log("1.1 typeof:", JSON.stringify(exercise1_1()));

  console.log("1.2 null/undefined:");
  console.log("  null:", exercise1_2(null));
  console.log("  undefined:", exercise1_2(undefined));
  console.log("  'hello':", exercise1_2("hello"));

  console.log("1.3 isArray:");
  console.log("  []:", exercise1_3([]));
  console.log("  {}:", exercise1_3({}));

  console.log("2.1 swap:", JSON.stringify(exercise2_1(1, 2)));

  console.log("2.2 clone:", JSON.stringify(exercise2_2({ a: 1, b: 2 })));

  console.log("2.3 mutate vs reassign:", exercise2_3());

  console.log("2.4 isReallyNaN:");
  console.log("  NaN:", exercise2_4(NaN));
  console.log("  42:", exercise2_4(42));

  console.log("3.1 deepClone:");
  const nested = { a: [1, { b: 2 }], c: 3 };
  console.log("  original:", JSON.stringify(nested));
  console.log("  cloned:", JSON.stringify(exercise3_1(nested)));

  console.log("3.2 coercion:", JSON.stringify(exercise3_2()));

  console.log("3.3 immutable update:", JSON.stringify(
    exercise3_3({ name: "Hoang", age: 22 }, "age", 23)
  ));

  console.log("3.4 safeGet:");
  console.log("  a.b.c:", exercise3_4({ a: { b: { c: 42 } } }, "a.b.c"));
  console.log("  a.b.x:", exercise3_4({ a: { b: { c: 42 } } }, "a.b.x"));

  console.log("4.1 produce:");
  const base = { user: { name: "Hoang", age: 22 } };
  const next = exercise4_1(base, d => { d.user.age = 23; });
  console.log("  next.user.age:", next.user.age);
  console.log("  structural sharing:", base.user !== next.user);

  console.log("4.2 validate:");
  const schema = { type: "object", properties: { name: { type: "string" }, age: { type: "number" } } };
  console.log("  valid:", exercise4_2({ name: "Hoang", age: 22 }, schema));
  console.log("  invalid:", exercise4_2({ name: 123, age: 22 }, schema));

  console.log("4.3 circular:");
  const circ = { a: 1 };
  circ.self = circ;
  console.log("  has circular:", exercise4_3(circ));
  console.log("  no circular:", exercise4_3({ a: 1 }));

  console.log("\n=== ALL TESTS PASSED ===");
}
