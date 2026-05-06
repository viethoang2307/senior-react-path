# 🗺️ Master Roadmap: Zero → Senior Frontend Developer

> **Cập nhật**: 06/05/2026 | **Học viên**: Lê Khả Việt Hoàng (B21DCCN056)  
> **Repo**: [viethoang2307/senior-react-path](https://github.com/viethoang2307/senior-react-path)  
> **Tham chiếu**: [roadmap.sh/frontend](https://roadmap.sh/frontend) · [theSeniorDev](https://theseniordev.com/blog/senior-frontend-developer-roadmap-2025) · [javascript.info](https://javascript.info)

---

## 🎯 Mục tiêu cuối cùng

```
┌─────────────────────────────────────────────────────────┐
│  SENIOR FRONTEND DEVELOPER                               │
│                                                         │
│  ✓ Viết được code production-grade                      │
│  ✓ Tự tin phỏng vấn vị trí Senior (offer $2000-$4000)   │
│  ✓ Nhận freelance project chất lượng cao                │
│  ✓ Có portfolio chứng minh năng lực                     │
│  ✓ Hiểu sâu "tại sao" — không chỉ "làm thế nào"          │
└─────────────────────────────────────────────────────────┘
```

---

## 📐 Định nghĩa "Senior" — Không chỉ là viết code

Dựa trên [roadmap.sh](https://roadmap.sh/frontend) và [theSeniorDev](https://theseniordev.com/blog/senior-frontend-developer-roadmap-2025), một **Senior FE** khác **Junior/Mid** ở 3 trụ cột:

| Trụ cột | Junior/Mid | **Senior** |
|---------|-----------|------------|
| 🔧 **Technical Depth** | Biết dùng framework | Hiểu cơ chế bên trong, tự thiết kế giải pháp |
| 🏗️ **End-to-End Delivery** | Làm được tính năng được giao | Tự triển khai dự án từ đầu đến production |
| 👥 **Influence & Decision** | Hỏi ý kiến người khác | Người khác hỏi ý kiến mình, ra quyết định kỹ thuật |

> *"Strong Fundamentals and End-to-End Delivery are the bare minimum. But to become a Senior you need to influence other developers and make technical decisions."* — theSeniorDev

---

## 🧭 TỔNG QUAN LỘ TRÌNH (6 Giai đoạn)

```
                          SENIOR FRONTEND DEVELOPER
                                   ▲
    ┌──────────────────────────────┼──────────────────────────────┐
    │                              │                              │
    │  ┌───────────────────────────┴───────────────────────────┐  │
    │  │              GĐ6: SENIOR + FREELANCE                   │  │
    │  │         (System Design, Portfolio, Soft Skills)        │  │
    │  └───────────────────────────┬───────────────────────────┘  │
    │                              │                              │
    │  ┌───────────────────────────┴───────────────────────────┐  │
    │  │           GĐ5: FULL-STACK & DEVOPS                     │  │
    │  │       (Node.js, Database, Docker, CI/CD, AWS)          │  │
    │  └───────────────────────────┬───────────────────────────┘  │
    │                              │                              │
    │  ┌───────────────────────────┴───────────────────────────┐  │
    │  │          GĐ4: KIẾN TRÚC & DESIGN SYSTEM               │  │
    │  │    (Micro-Frontend, Monorepo, Design System, a11y)    │  │
    │  └───────────────────────────┬───────────────────────────┘  │
    │                              │                              │
    │  ┌───────────────────────────┴───────────────────────────┐  │
    │  │           GĐ3: PRODUCTION-GRADE REACT                  │  │
    │  │    (Testing, Performance, Next.js, Security, Webpack)  │  │
    │  └───────────────────────────┬───────────────────────────┘  │
    │                              │                              │
    │  ┌───────────────────────────┴───────────────────────────┐  │
    │  │              GĐ2: REACT CHUYÊN SÂU                     │  │
    │  │  (Hooks, State Management, Router, Patterns, Tailwind) │  │
    │  └───────────────────────────┬───────────────────────────┘  │
    │                              │                              │
    │  ┌───────────────────────────┴───────────────────────────┐  │
    │  │  ██████████████░░░░░░░░  GĐ1: NỀN TẢNG NÂNG CAO  43%  │  │
    │  │  (JS Deep, TypeScript, Git Pro, Tooling)              │  │
    │  └───────────────────────────┬───────────────────────────┘  │
    │                              │                              │
    └──────────────────────────────┼──────────────────────────────┘
                                   │
                        BẠN ĐANG Ở ĐÂY 🚀
```

---

## 📚 GĐ1: NỀN TẢNG NÂNG CAO (8 tuần còn lại)

> **Tham chiếu**: javascript.info (Part 1, 2, 3) · roadmap.sh "Internet & Fundamentals"

### 1.1 — JavaScript Chuyên Sâu (theo javascript.info)

| Cụm | Module | Nội dung | Trạng thái | Mức |
|-----|--------|---------|:---:|:---:|
| 🔵 Móng | 01–03 | Environment, First Steps, Code Quality | ✅ | ⭐ |
| 🟢 Core | 04–06 | Object, Data Types, Advanced Functions | ✅ | 🔥🔥🔥 |
| 🟡 OOP | 07–09 | Properties, Prototypes, Classes | ⏳ | 🔥 |
| 🔴 Async | 10–14 | Error, Async, Generators, Modules, Misc | ⏳ | 🔥🔥 |

> **Đây là nền móng quan trọng nhất.** React, Next.js, Node.js — tất cả đều xây trên JS.  
> Nếu JS không vững → mọi thứ phía trên sẽ lung lay.

### 1.2 — TypeScript Pro (2 tuần)

| Chủ đề | Nội dung |
|--------|---------|
| Type System | Basic types, Interface vs Type, Generics, Utility Types |
| Advanced | Conditional Types, Mapped Types, Template Literal Types, infer |
| Config | tsconfig chuyên sâu, Declaration Files (.d.ts), Module Resolution |
| Practice | Viết type cho custom hook, HOC, generic component |

### 1.3 — Git & Tooling (1 tuần)

| Chủ đề | Nội dung |
|--------|---------|
| Git Pro | Rebase, Cherry-pick, Bisect, Hooks, Submodules |
| CI/CD căn bản | GitHub Actions, lint-staged, husky |
| Package | npm/pnpm/yarn workspaces, publishing |

---

## ⚛️ GĐ2: REACT CHUYÊN SÂU (4 tuần)

> **Tham chiếu**: roadmap.sh "React" section · theSeniorDev "Component-Driven Development"

### 2.1 — React Core & Hooks

| Chủ đề | Nội dung |
|--------|---------|
| Mental Model | Virtual DOM, Reconciliation, Fiber Architecture |
| Hooks Master | useState, useEffect, useRef, useMemo, useCallback, useReducer |
| Custom Hooks | useDebounce, useLocalStorage, useFetch, useIntersectionObserver |
| Patterns | Compound Components, Render Props, HOC, Custom Hooks |

### 2.2 — State Management

| Chủ đề | Công cụ |
|--------|--------|
| Local State | useState + useReducer |
| Shared State | Context API + Provider Pattern |
| Global State | Zustand (chính) + Redux Toolkit (biết) |
| Server State | TanStack Query (React Query) |
| Form State | React Hook Form + Zod validation |

### 2.3 — Routing & Styling

| Chủ đề | Công cụ |
|--------|--------|
| Routing | React Router v6 (loader, action, nested routes) |
| CSS | Tailwind CSS + shadcn/ui |
| Responsive | Mobile-first, Container Queries |

---

## 🏭 GĐ3: PRODUCTION-GRADE REACT (4 tuần)

> **Tham chiếu**: theSeniorDev "Web Performance" · "CI/CD & Infrastructure"

### 3.1 — Testing

| Loại | Công cụ | Mục tiêu |
|------|--------|---------|
| Unit | Vitest + React Testing Library | Test hooks, utils, components |
| Integration | Testing Library | Test user flows |
| E2E | Playwright | Test toàn bộ ứng dụng |

### 3.2 — Performance

| Chủ đề | Nội dung |
|--------|---------|
| Core Web Vitals | LCP, FID/INP, CLS — hiểu và tối ưu |
| Bundle | Code Splitting, Lazy Loading, Tree Shaking |
| Rendering | React.memo, useMemo/useCallback, Virtual List |
| Assets | Image optimization (WebP, srcset), Font optimization |
| Network | Caching, CDN, HTTP/2, preload/prefetch |

### 3.3 — Next.js Pro

| Chủ đề | Nội dung |
|--------|---------|
| Rendering | SSR, SSG, ISR, CSR — khi nào dùng gì |
| App Router | Server Components, Streaming, Suspense |
| Data | Server Actions, Route Handlers, Middleware |
| Production | Deployment (Vercel), Analytics, Error Monitoring |

### 3.4 — Security & Tooling

| Chủ đề | Nội dung |
|--------|---------|
| Security | XSS, CSRF, CORS, CSP, OWASP Top 10, OAuth2/JWT |
| Webpack | Loaders, Plugins, Custom Config, Module Federation |

---

## 🏛️ GĐ4: KIẾN TRÚC & DESIGN SYSTEM (4 tuần)

> **Tham chiếu**: theSeniorDev "Frontend Architecture" · "Microfrontends"

### 4.1 — Kiến trúc

| Chủ đề | Nội dung |
|--------|---------|
| Patterns | Feature-Sliced Design, Atomic Design, Clean Architecture (FE) |
| Micro-FE | Module Federation, Single-SPA, Web Components |
| Monorepo | Turborepo / Nx, shared packages |

### 4.2 — Design System

| Chủ đề | Công cụ |
|--------|--------|
| Components | shadcn/ui, Radix UI |
| Documentation | Storybook |
| Visual Testing | Chromatic / Percy |

### 4.3 — Accessibility & UX

- WCAG 2.1 AA standards
- Semantic HTML, ARIA labels
- Keyboard navigation, Screen reader testing

---

## 🔧 GĐ5: FULL-STACK & DEVOPS (4 tuần)

> **Tham chiếu**: roadmap.sh "Full-Stack" section · theSeniorDev "CI/CD & Infrastructure"

### 5.1 — Backend

| Chủ đề | Công cụ |
|--------|--------|
| Runtime | Node.js + Express / Fastify |
| Database | PostgreSQL (Drizzle ORM), Redis |
| API | RESTful, tRPC, GraphQL cơ bản |
| Auth | NextAuth.js, JWT, session management |

### 5.2 — DevOps

| Chủ đề | Công cụ |
|--------|--------|
| Container | Docker, Docker Compose |
| CI/CD | GitHub Actions, Vercel, Docker deployment |
| Cloud Basics | AWS S3, CloudFront, EC2 (free tier) |

---

## 🚀 GĐ6: SENIOR + FREELANCE (4 tuần)

> **Tham chiếu**: theSeniorDev "Influence & Decision Making"

### 6.1 — System Design cho Frontend

- Thiết kế kiến trúc cho ứng dụng lớn
- Trade-offs: SSR vs CSR, SPA vs MPA
- Real-time systems (WebSocket, SSE)
- Caching strategies

### 6.2 — Portfolio

| Dự án | Mục tiêu |
|-------|---------|
| **E-commerce Platform** | Full-stack Next.js, có payment, search, auth |
| **Dashboard Real-time** | WebSocket, charts, role-based access |
| **Design System** | Thư viện component riêng, Storybook, published npm |

### 6.3 — Soft Skills & Freelance

| Kỹ năng | Nội dung |
|---------|---------|
| Technical Writing | Viết blog, documentation |
| Code Review | Review code người khác hiệu quả |
| Mentoring | Hướng dẫn junior developers |
| Freelance | Tìm client, báo giá, quản lý dự án, hợp đồng |

---

## 📊 TỔNG KẾT THỜI GIAN

| Giai đoạn | Nội dung chính | Thời lượng | Tiến độ |
|-----------|---------------|:---:|:---:|
| **GĐ1** | JS Deep, TypeScript, Git, Tooling | 8 tuần | ████░░ 43% |
| **GĐ2** | React Hooks, State, Router, Tailwind | 4 tuần | ⏳ |
| **GĐ3** | Testing, Performance, Next.js, Security | 4 tuần | ⏳ |
| **GĐ4** | Architecture, Micro-FE, Design System | 4 tuần | ⏳ |
| **GĐ5** | Node.js, Database, Docker, CI/CD | 4 tuần | ⏳ |
| **GĐ6** | System Design, Portfolio, Freelance | 4 tuần | ⏳ |
| **TỔNG** | | **28 tuần** | |

> 📅 Bắt đầu: 05/05/2026 → Dự kiến hoàn thành: **Cuối tháng 11/2026**

---

## 🔗 NGUỒN THAM KHẢO CHÍNH

### Roadmaps chuẩn ngành

| Nguồn | Mô tả | Link |
|-------|------|------|
| **roadmap.sh** | Roadmap cộng đồng, #6 GitHub stars. Chi tiết từng bước | [roadmap.sh/frontend](https://roadmap.sh/frontend) |
| **theSeniorDev** | Lộ trình thực tế cho Senior, tập trung "tại sao" thay vì "cái gì" | [theSeniorDev 5 steps](https://theseniordev.com/blog/senior-frontend-developer-roadmap-2025) |
| **javascript.info** | Kinh thánh JS — từ cơ bản đến nâng cao | [javascript.info](https://javascript.info) |
| **Zero To Mastery** | Lộ trình Junior → Senior Web Developer 2026 | [zerotomastery.io](https://zerotomastery.io/courses/junior-to-senior-web-developer-roadmap) |

### Tài nguyên học tập

| Nguồn | Loại | Dùng cho |
|-------|------|---------|
| MDN Web Docs | Docs | Tra cứu mọi thứ |
| Frontend Masters | Video | Deep dives |
| Epic React (Kent C. Dodds) | Course | React patterns |
| ByteDance Web Infra | Blog | Performance, architecture |
| Josh Comeau | Blog | CSS, React animations |
| Dan Abramov | Blog | React mental model |
| Lee Robinson | Blog | Next.js, platform |

---

## ⏭️ TRẠNG THÁI HIỆN TẠI & BƯỚC TIẾP THEO

```
📍 Vị trí: GĐ1 — Tuần 1/8
📂 Module hiện tại: M01-M06 đã có nội dung
🎯 Mục tiêu tuần này: Làm hết bài tập M04 Object Basics
⏭️ Sau đó: Làm M05 Data Types → M06 Advanced Functions
```

### Flow làm việc mỗi ngày:

```
1. Chọn module → 2. Đọc theory.md → 3. Chạy examples.js
    ↓
4. Làm exercises.js (KHÔNG xem solutions)
    ↓
5. So sánh solutions.js → Ghi chú khác biệt
    ↓
6. Cập nhật Notion (trạng thái, ngày học)
    ↓
7. Hỏi Lobe nếu gặp khó → Sang module tiếp theo
```

---

> *"The difference between a Junior and a Senior is not years of experience. It's the depth of understanding."* — theSeniorDev

> *"Don't rush. If JS fundamentals are shaky, React will be impossible. Build the foundation first."* — Lobe
