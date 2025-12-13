### Lessons Overview

This roadmap mixes building and learning. We favor Angular best practices used in modern Angular:
- Standalone components by default (do not set `standalone: true`; it’s implied)
- Signals for local state and `computed()` for derived state
- Use `input()` and `output()` functions
- Lazy-loaded feature routes
- Host bindings/listeners declared in the `host` object
- `ChangeDetectionStrategy.OnPush`
- Prefer inline templates for small components
- Prefer Reactive Forms for complex forms
- Avoid `ngClass`/`ngStyle` in favor of class/style bindings
- Native control flow (`@if`, `@for`, `@switch`)
- Use `NgOptimizedImage` for static images

---

#### Phase 1 — Angular Fundamentals

1) Lesson 1 — Project Setup
- Install Angular CLI
- Create a fresh Angular app
- Explore file structure and `angular.json`

Docs:
- First app: https://angular.dev/tutorials/first-app


2) Lesson 2 — Components
- Manually create components (no generators where possible)
- Pass data via `input()`
- Emit events via `output()`
- Use signals for local state; use `computed()` for derived state
- Apply `ChangeDetectionStrategy.OnPush`

Docs:
- Components: https://angular.dev/guide/components
- Inputs: https://angular.dev/guide/components/inputs
- Outputs: https://angular.dev/guide/components/outputs

Build:
- `HeaderComponent`, `FooterComponent`, `HomeComponent`


3) Lesson 3 — Routing
- Set up app routes
- Define static routes
- Use `routerLink` in templates
- Plan for lazy-loaded feature routes later

Docs:
- Routing: https://angular.dev/guide/routing

Build routes for:
- `/about`, `/skills`, `/projects`


4) Lesson 4 — Bootstrap Integration
- Install Bootstrap via npm
- Wire styles in `angular.json` or import in global styles
- Use grid, cards, navbars, modals

Docs:
- Bootstrap 5: https://getbootstrap.com/docs/5.3/getting-started/introduction/

Build UI:
- Navbar, Hero section, Skills cards


5) Lesson 5 — Services & Dependency Injection
- Create services manually (single-responsibility)
- Fetch mock profile/blog data
- Define interfaces/models for data
- Use `inject()` in services and components

Docs:
- DI: https://angular.dev/guide/di
- Providers: https://angular.dev/guide/di/defining-dependency-providers

Build:
- `ProfileService`, `BlogService` (mock)


6) Lesson 6 — Forms
- Template-driven forms basics
- Reactive Forms foundation (for admin panel)
- Prefer Reactive for complex scenarios

Docs:
- Forms overview: https://angular.dev/guide/forms
- Reactive forms: https://angular.dev/guide/forms/reactive-forms

Build:
- Contact form (no backend yet)

---

#### Phase 2 — Firebase Integration

7) Lesson 7 — Firebase Setup
- Install Firebase CLI
- Initialize Hosting, Firestore, Auth
- Configure `environment.ts`
- Intro to security rules

Docs:
- Firebase docs: https://firebase.google.com/docs


8) Lesson 8 — Authentication
- Email/password login
- Create `AuthService`
- Protect routes using guards
- Create `/admin/login`

Docs:
- Route Guards: https://angular.dev/guide/routing/route-guards
- Firebase Auth: https://firebase.google.com/docs/auth


9) Lesson 9 — Firestore CRUD
- Create, read, update, delete blog posts
- Public blog listing `/blog`
- Admin CRUD under `/admin/blog`

Docs:
- Firestore: https://firebase.google.com/docs/firestore


10) Lesson 10 — Firebase Storage
- Upload images (profile + blog images)
- Save download URLs in Firestore docs

Docs:
- Storage: https://firebase.google.com/docs/storage


11) Lesson 11 — Deploy
- Build Angular app
- Deploy to Firebase Hosting

Docs:
- Hosting/Deploy: https://firebase.google.com/docs/hosting

Outcome:
- Live site at `https://yourname.web.app`

---

#### Phase 3 — Admin Panel (Deep Angular Concepts)
- Reactive forms for profile editor/blog manager
- Guards for route protection
- Lazy-loaded admin feature routes
- Services returning Observables
- Custom pipes and reusable components
- Firebase data binding patterns

Refs:
- Observables: https://v17.angular.io/guide/observables-in-angular
- Pipes: https://angular.dev/guide/pipes
