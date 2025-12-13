# Angular + Firebase Portfolio Starter (Beginners Track)

Build a personal portfolio + blog with an admin panel using Angular, Bootstrap, and Firebase. This repository is designed for students following a hands-on learning path. Each lesson is mapped to official Angular.dev and Firebase docs.

Quick links:
- Lessons overview: see `docs/LESSONS.md`
- Assignments: see `docs/ASSIGNMENTS.md`
- Firebase setup & deploy: see `docs/FIREBASE.md`
- Local setup instructions: see `docs/SETUP.md`

## 1) Project Overview

We will build a portfolio/resume website with:

- Home
- About
- Skills
- Projects
- Contact
- Blog (public)
- Admin portal to manage blog posts + profile

Tech stack:
- Angular (from scratch mindset; favor manual creation over generators)
- Bootstrap (UI styling)
- Firebase (Hosting, Auth, Firestore, Storage)

## 2) Repository Structure

Your GitHub repo will look like:

```
/portfolio-starter
  /src
  /docs
  /assignments
  /design
README.md
```

We will push lesson branches like:

- `lesson-01-setup`
- `lesson-02-components`
- `lesson-03-routing`
- `lesson-04-bootstrap`
- `lesson-05-services`
- `lesson-06-firebase-auth`
- `lesson-07-firestore-crud`
- `lesson-08-admin-panel`

Students:
- Fork the repo, or
- Create personal branches to customize

## 3) Angular Best Practices Used Here

- Standalone components by default (do not set `standalone: true`; it’s implied)
- Signals for local state and `computed()` for derived state
- Prefer `input()` and `output()` functions over decorators
- Use lazy loading for feature routes
- Put host bindings/listeners in the `host` object of `@Component`/`@Directive` (avoid `@HostBinding`/`@HostListener`)
- `ChangeDetectionStrategy.OnPush` on components
- Prefer inline templates for small, focused components
- Prefer Reactive Forms over Template-driven for complex forms
- Avoid `ngClass`/`ngStyle`; use `[class...]` and `[style...]` bindings
- Use native control flow (`@if`, `@for`, `@switch`)
- Use `NgOptimizedImage` for static images (not for inline base64)

See the lessons for references to Angular.dev.

## 4) Local Development

Prerequisites:
- Node.js LTS and npm
- Angular CLI installed globally: `npm i -g @angular/cli`

Install dependencies:
```
npm ci
```

Start the dev server:
```
npm start
```

or with Angular CLI:
```
ng serve
```

Open `http://localhost:4200/` in your browser. The app reloads on code changes.

Build production:
```
ng build
```

Run unit tests:
```
ng test
```

## 5) Learning Path (High-level)

Each step includes official docs links. Details are in `docs/LESSONS.md`.

Phase 1 — Angular Fundamentals
1. Lesson 1: Project Setup — install CLI, create project, file structure
2. Lesson 2: Components — create manually, `input()`/`output()`
3. Lesson 3: Routing — static routes, `routerLink`
4. Lesson 4: Bootstrap — grid, cards, modals, navbars
5. Lesson 5: Services & DI — interfaces/models, mock data
6. Lesson 6: Forms — Template basics; Reactive Forms foundation

Phase 2 — Firebase Integration
7. Lesson 7: Firebase Setup — CLI, hosting, firestore, auth; environments, rules
8. Lesson 8: Authentication — email/password, guards, `/admin/login`
9. Lesson 9: Firestore CRUD — blog CRUD, public `/blog`
10. Lesson 10: Storage — image upload, save URLs
11. Lesson 11: Deploy — build and deploy to Firebase Hosting

Phase 3 — Admin Panel (Deep Angular)
- Reactive forms, guards, lazy-loaded routes, services with Observables, custom pipes, reusable components, Firebase data binding

## 6) Assignments

Assignments are organized by difficulty with clear deliverables. See `docs/ASSIGNMENTS.md`.

## 7) Firebase

Follow `docs/FIREBASE.md` for:
- Setting up Firebase project and CLI
- Configuring `environment.ts`
- Basic security rules for Firestore and Storage
- Deploying to Firebase Hosting

## 8) Contributing (for students)

- Use lesson branches to follow along.
- Keep commits small and meaningful.
- When adding features, follow the Angular best practices listed above.

## 9) References

- Angular First App: https://angular.dev/tutorials/first-app
- Components: https://angular.dev/guide/components
- Inputs: https://angular.dev/guide/components/inputs
- Outputs: https://angular.dev/guide/components/outputs
- Routing: https://angular.dev/guide/routing
- DI & Providers: https://angular.dev/guide/di
- Forms: https://angular.dev/guide/forms
- Reactive Forms: https://angular.dev/guide/forms/reactive-forms
- Route Guards: https://angular.dev/guide/routing/route-guards
- Pipes: https://angular.dev/guide/pipes
- Observables: https://v17.angular.io/guide/observables-in-angular
- Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Firebase: https://firebase.google.com/docs
