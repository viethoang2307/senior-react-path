# Module 01: Getting Started — Làm Quen JavaScript

## 📘 Mục tiêu
Hiểu JS là gì, cách chạy code, thiết lập môi trường làm việc chuyên nghiệp.

---

## 1. JavaScript Là Gì?

JavaScript (JS) được tạo bởi Brendan Eich năm 1995 tại Netscape với tên **LiveScript**, sau đổi thành JavaScript.

> JavaScript **KHÔNG** liên quan đến Java — 2 ngôn ngữ hoàn toàn khác nhau.

JS tuân theo đặc tả **ECMAScript** (ES):

| Phiên bản | Năm | Tính năng nổi bật |
|-----------|-----|-------------------|
| ES5 | 2009 | Strict mode, JSON, Array methods |
| ES6 (ES2015) | 2015 | let/const, arrow functions, classes, promises, modules |
| ES2020+ | 2020+ | Optional chaining, Nullish coalescing, BigInt |

---

## 2. JS Chạy Ở Đâu?

### Browser
Mọi browser có JS engine riêng:
- **V8** — Chrome, Edge, Opera, Node.js
- **SpiderMonkey** — Firefox
- **JavaScriptCore** — Safari

Mở **DevTools** (F12) → Tab Console để chạy JS trực tiếp.

### Server (Node.js)
Node.js = V8 + system APIs. Chạy JS ngoài browser:
```bash
node script.js
```

### Khác: Deno, Bun, React Native (mobile), Electron (desktop)

---

## 3. Công Cụ Cần Thiết

| Công cụ | Mục đích |
|---------|----------|
| **VS Code** | Editor chính |
| **Node.js + npm** | Runtime & quản lý package |
| **Git** | Quản lý phiên bản |
| **ESLint + Prettier** | Format code, bắt lỗi |
| **DevTools** | Debug, inspect |

---

## 4. Hello World

```javascript
console.log("Hello, World!");
```

---

## 5. Cách Học Hiệu Quả

1. **Đọc lý thuyết** → Hiểu khái niệm
2. **Chạy examples** → Thấy code hoạt động
3. **Làm exercises** → Tự viết code
4. **So sánh solutions** → Học cách hay
5. **Mini project** → Áp dụng thực tế

> Rule: KHÔNG copy-paste. Gõ tay từng dòng code.

## 📚 Tham khảo
- [javascript.info — An Introduction](https://javascript.info/getting-started)
- [MDN — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
