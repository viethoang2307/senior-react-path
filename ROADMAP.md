# 🧭 Lộ Trình JavaScript Fundamentals → Senior React

> **Cập nhật**: 06/05/2026 | **Tác giả**: Lobe + Hoàng  
> **Repo**: [viethoang2307/senior-react-path](https://github.com/viethoang2307/senior-react-path)

---

## 📍 Vị trí hiện tại

Bạn đang ở **Giai đoạn 1 (GĐ1): Nền tảng nâng cao** trong lộ trình 24 tuần trở thành Senior React Developer.

```
[████████████░░░░░░░░░░░░] 43% GĐ1 hoàn thành

✅ Đã có nội dung đầy đủ: M01 → M06 (6/14 modules)
⏳ Placeholder, cần viết:    M07 → M14 (8/14 modules)
```

---

## 🗺️ Bản đồ 14 Module (javascript.info Part 1)

### 🔵 Cụm 1: NỀN MÓNG — ĐÃ HOÀN THIỆN ✅

| # | Module | Trọng tâm | Mức | 
|---|--------|-----------|-----|
| 01 | **Getting Started** | Môi trường, console, editor | ⭐ |
| 02 | **First Steps** | Biến, kiểu dữ liệu, toán tử, rẽ nhánh, hàm cơ bản | ⭐ |
| 03 | **Code Quality** | Debug, coding style, testing (Mocha), polyfills | ⭐ |

> **→ Hành động**: Học + làm bài tập. M01-M03 là kiến thức ai cũng cần.

---

### 🟢 Cụm 2: OBJECT & DATA — ĐÃ HOÀN THIỆN ✅

| # | Module | Trọng tâm | Mức |
|---|--------|-----------|-----|
| 04 | **Object Basics** | Object, `this`, constructor, optional chaining, Symbol | ⭐ |
| 05 | **Data Types** | Numbers, Strings, Arrays, Map/Set, Date, JSON, destructuring | 🔥 |
| 06 | **Advanced Functions** | Closure, recursion, rest/spread, decorators, call/apply/bind, scheduling | 🔥 |

> **→ Hành động**: Đây là 3 module **CỐT LÕI** cho React. Closure và `this` sẽ xuất hiện xuyên suốt.  
> Làm hết bài tập, đặc biệt M06 (Advanced Functions) — nếu chưa chắc closure/bind thì React Hooks sẽ rất khó.

---

### 🟡 Cụm 3: PROTOTYPES & CLASSES — CẦN VIẾT ⏳

| # | Module | Trọng tâm | Mức | Phụ thuộc |
|---|--------|-----------|-----|-----------|
| 07 | **Object Properties** | Property flags, getters/setters | ⭐ | M04 |
| 08 | **Prototypes** | Kế thừa prototype, F.prototype, native prototypes | 🔥 | M04, M06 |
| 09 | **Classes** | Class syntax, extends, static, private, mixins | ⭐ | M08 |

> **→ Hành động**: Học theo thứ tự 07 → 08 → 09.  
> Module 08 (Prototypes) là **chìa khóa** để hiểu sâu JS engine và debug hiệu quả.

---

### 🔴 Cụm 4: ASYNC & ADVANCED — CẦN VIẾT ⏳

| # | Module | Trọng tâm | Mức | Phụ thuộc |
|---|--------|-----------|-----|-----------|
| 10 | **Error Handling** | try...catch, custom errors | ⭐ | M06 |
| 11 | **Async JS** | Promise, async/await, microtasks, fetch | 🔥 | M06 |
| 12 | **Generators & Iterators** | Generator, async iteration | ⭐ | M11 |
| 13 | **Modules** | ES Modules, import/export, dynamic import | ⭐ | — |
| 14 | **JS Misc** | Proxy, Reflect, BigInt, Unicode, currying | ⭐ | — |

> **→ Hành động**: Học theo thứ tự 10 → 11 → 13 → 12 → 14.  
> Module 11 (Async) là **quan trọng nhất** cho React (data fetching, Suspense, Server Components).

---

## 📅 Lịch trình đề xuất (8 tuần còn lại của GĐ1)

### Tuần 1–2: ÔN TẬP + HOÀN THIỆN CỤM 2
```
📅 06/05 – 12/05
├── 🔄 Học M01 → M03 (nếu chưa chắc) — 2 ngày
├── 🔄 Làm bài tập M04 Object Basics — 1 ngày
├── 🔄 Làm bài tập M05 Data Types — 2 ngày
└── 🔄 Làm bài tập M06 Advanced Functions — 2 ngày
```
> **Mục tiêu**: Làm xong **tất cả bài tập** M01-M06. Nếu gặp khó → ghi chú lại, hỏi Lobe.

```
📅 13/05 – 19/05
├── ✍️ Lobe viết nội dung M07 Object Properties
├── 🔄 Hoàng học M07 — 1 ngày
├── ✍️ Lobe viết nội dung M08 Prototypes  
├── 🔄 Hoàng học M08 — 3 ngày (quan trọng!)
└── 🧪 Review + làm bài tập M07-M08
```

### Tuần 3–4: PROTOTYPES → CLASSES
```
📅 20/05 – 26/05
├── ✍️ Lobe viết M09 Classes
├── 🔄 Hoàng học M09 — 2 ngày
├── ✍️ Lobe viết M10 Error Handling
├── 🔄 Hoàng học M10 — 1 ngày
└── 🎯 MINI PROJECT 1: Xây dựng thư viện nhỏ (VD: EventEmitter, mini jQuery)
```

### Tuần 5–6: ASYNC — TRÁI TIM CỦA REACT
```
📅 27/05 – 02/06
├── ✍️ Lobe viết M11 Async JS (module dài nhất, quan trọng nhất)
├── 🔄 Hoàng học M11 — 4 ngày
│   ├── Promise, then/catch/finally
│   ├── async/await
│   ├── Microtasks & Event Loop
│   └── Fetch API thực hành
└── 🎯 MINI PROJECT 2: Weather Dashboard (gọi API thật)
```

```
📅 03/06 – 09/06
├── ✍️ Lobe viết M13 Modules + M12 Generators
├── 🔄 Hoàng học M13 — 1 ngày
├── 🔄 Hoàng học M12 — 1 ngày
├── ✍️ Lobe viết M14 JS Misc
├── 🔄 Hoàng học M14 — 1 ngày
└── 🧪 Tổng ôn M07-M14
```

### Tuần 7–8: TỔNG KẾT GĐ1
```
📅 10/06 – 16/06
├── 🎯 MINI PROJECT 3: Task Manager (vanilla JS, áp dụng tất cả kiến thức)
├── 📝 Code review + refactor
├── 🧠 Phỏng vấn thử (mock interview JS)
└── ✅ Checkpoint: Sẵn sàng cho GĐ2 (TypeScript, React)
```

---

## 🎯 Mini Projects (Áp dụng thực tế)

| # | Dự án | Sau Module | Kỹ năng áp dụng | Nguồn tham khảo |
|---|-------|-----------|-----------------|-----------------|
| 1 | **EventEmitter Library** | M09 | Prototypes, Classes, `this`, Error Handling | [greatfrontend.com](https://greatfrontend.com) |
| 2 | **Weather Dashboard** | M11 | Async/Await, Fetch, JSON, DOM, Error Handling | [frontendmentor.io](https://frontendmentor.io) |
| 3 | **Task Manager (Vanilla JS)** | M14 | Tất cả: OOP, Async, Modules, Error Handling | Tự thiết kế |

---

## 🔗 Mối liên hệ với lộ trình Senior React (24 tuần)

```
GĐ1: JS Fundamentals (đang làm) ────── 8 tuần còn lại
  ↓
GĐ2: React Chuyên sâu ──────────────── 4 tuần
  ├── Hooks (dùng Closure, this)
  ├── State Management (dùng Immutability từ M05)
  └── Patterns (dùng HOF từ M06)
  ↓
GĐ3: Production-Grade ──────────────── 4 tuần
  ├── Testing (dùng M03)
  ├── Performance (dùng M06 closures + M11 async)
  └── Next.js (dùng M13 modules)
  ↓
GĐ4: Kiến trúc & Hệ thống ──────────── 4 tuần
GĐ5: Full-Stack & DevOps ───────────── 4 tuần
GĐ6: Senior + Freelance ────────────── 4 tuần
```

> **Nguyên tắc**: Không vội. Nền móng JS vững thì React sẽ rất nhanh.  
> Ngược lại: JS lơ mơ → React như "xây nhà trên cát".

---

## 📊 Cách dùng Notion Tracking

Mỗi module có 1 trang trong database **📊 Tiến Độ Học Tập - Senior React**:

| Trạng thái | Ý nghĩa |
|-----------|---------|
| ⏳ Chưa bắt đầu | Chưa đụng đến |
| 🚀 Đang học | Đang làm bài tập / đọc theory |
| ✅ Hoàn thành | Đã làm xong hết exercises + hiểu |
| 🔁 Ôn tập | Đang review lại |

**Quy trình khi học 1 module:**
1. Đọc `theory.md` + `resources.md` (web + YouTube)
2. Chạy `examples.js`, hiểu từng dòng
3. Tự làm `exercises.js` (không xem solutions)
4. So sánh với `solutions.js`, ghi chú điểm khác biệt
5. Cập nhật Notion: trạng thái → ✅ Hoàn thành, điền Ngày học

---

## 🆘 Khi gặp khó khăn

1. **Đọc lại `theory.md`** — có thể đã bỏ sót
2. **Xem video** trong `resources.md` — học đa kênh
3. **Chạy `examples.js`** — sửa code, thêm console.log để hiểu
4. **Hỏi Lobe** — copy đoạn code khó + giải thích bạn đang mắc ở đâu
5. **Google/StackOverflow** — kỹ năng search là 1 phần của Senior

---

## ⏭️ Bước tiếp theo (hành động ngay)

> **Hôm nay (06/05)**: Bắt đầu học M04 Object Basics nếu chưa làm bài tập.  
> **Mục tiêu tuần này**: Làm xong hết exercise của M01-M06.  
> **Khi nào xong**: Báo Lobe để viết tiếp M07.  

---

> *"The secret to getting ahead is getting started."* — Mark Twain
