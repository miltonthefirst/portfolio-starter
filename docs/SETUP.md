### Local Setup Guide

Follow these steps to run the Angular + Firebase Portfolio Starter locally. The project embraces modern Angular best practices: standalone components (implicit), signals for state, `computed()` for derived state, `input()`/`output()`, `OnPush` change detection, native control flow, and Bootstrap 5 for UI.

---

#### 1) Prerequisites
- Node.js LTS (install from https://nodejs.org)
- npm (bundled with Node)
- Angular CLI: `npm i -g @angular/cli`

Verify versions:
```
node -v
npm -v
ng version
```

---

#### 2) Install dependencies
From the project root:
```
npm ci
```

If you prefer a clean install without a lockfile: `npm install`.

---

#### 3) Start the dev server
Use either command:
```
npm start
```
or
```
ng serve
```

Open `http://localhost:4200/`. The app rebuilds on file changes.

---

#### 4) Build for production
```
ng build
```

Artifacts are output to `dist/`.

---

#### 5) Add Bootstrap 5 (if not present)
Install:
```
npm i bootstrap@^5
```

Option A (angular.json styles):
1. Open `angular.json`
2. Add `node_modules/bootstrap/dist/css/bootstrap.min.css` to the `styles` array of the build options.

Option B (global stylesheet import):
```
/* src/styles.css or src/styles.scss */
@import "bootstrap/dist/css/bootstrap.min.css";
```

Use Bootstrap utilities/components (grid, cards, navbars). Keep templates simple and accessible.

---

#### 6) Images and performance
- Use `NgOptimizedImage` for static images (not for inline base64)
- Provide width/height for images to avoid layout shift
- Prefer responsive images where appropriate

---

#### 7) Coding guidelines for this project
- Components: small, single responsibility; prefer inline templates for small components
- State: use signals; no `mutate`, prefer `set`/`update`; use `computed()` for derived state
- Inputs/Outputs: use `input()` and `output()` functions
- Change detection: `ChangeDetectionStrategy.OnPush`
- Host bindings/listeners: define in the `host` object within `@Component`/`@Directive`
- Control flow: use `@if`, `@for`, `@switch` (native)
- Class/style: use property bindings instead of `ngClass`/`ngStyle`
- Services: single responsibility; `providedIn: 'root'`; prefer `inject()` over constructor injection

---

#### 8) Branching workflow (for students)
- Work through lesson branches in order:
  - `lesson-01-setup`
  - `lesson-02-components`
  - `lesson-03-routing`
  - `lesson-04-bootstrap`
  - `lesson-05-services`
  - `lesson-06-firebase-auth`
  - `lesson-07-firestore-crud`
  - `lesson-08-admin-panel`
- Keep commits small and descriptive
- When customizing, create a personal branch (e.g., `yourname/customizations`)

---

#### 9) Firebase integration
See `docs/FIREBASE.md` for step-by-step setup of Hosting, Auth, Firestore, Storage, emulators, and deploy.

---

#### 10) Troubleshooting
- Port 4200 in use: rerun with `ng serve --port 4300`
- Missing types or libs: `npm ci` again; clear cache with `npm cache verify` if needed
- Angular CLI not found: ensure global install or use `npx ng ...`
