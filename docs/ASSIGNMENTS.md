### Assignments

This page lists practice tasks by difficulty. Follow Angular best practices used in this repo:
- Standalone components (implicit), signals for state, `computed()` for derived values
- `input()` / `output()` functions, `OnPush` change detection
- Lazy-loaded feature routes where applicable
- Host bindings/listeners via `host` object
- Prefer Reactive Forms for complex use-cases
- Class/style bindings over `ngClass`/`ngStyle`
- Native control flow (`@if`, `@for`, `@switch`)

Use Bootstrap 5 for layout/styles and `NgOptimizedImage` for static images.

---

#### Beginner
1) About section
- Build an `/about` page with your bio and photo.
- Use a simple responsive layout (Bootstrap grid) and `NgOptimizedImage` for the image.

Acceptance:
- Page is reachable via router link.
- Mobile-friendly layout.

2) Display skills dynamically
- Model your skills as an array of objects in a service (e.g., `ProfileService`).
- Render a responsive grid of skill cards.

Acceptance:
- Adding a new skill in the service reflects in the UI without template changes.

3) Card grid with Bootstrap
- Create a component that renders a grid of project cards (title, description, tech tags).

Acceptance:
- Cards wrap nicely on mobile; spacing consistent with Bootstrap utilities.

4) Contact form (no backend)
- Build a contact form with name, email, message.
- Validate required fields and email format.

Acceptance:
- Submit button disabled until valid.
- On submit, log the payload; show a success state.

---

#### Intermediate
1) Blog tags/categories
- Add `tags: string[]` or `category: string` to blog posts.
- Filter posts by tag/category on the public blog page.

Acceptance:
- Filter updates the list without page reload.

2) CSS animations
- Add tasteful hover/entrance animations for cards and buttons using CSS (no heavy JS libs).

Acceptance:
- Animations do not harm accessibility or performance.

3) Pagination for blog
- Implement client-side pagination (or Firestore paginated query when integrated).

Acceptance:
- Navigating pages preserves scroll position and state.

4) Scroll-to-top button
- Floating button appears after scrolling down and returns to top smoothly.

Acceptance:
- Accessible (keyboard activatable, visible focus styles).

---

#### Advanced
1) Draft vs published posts
- Add a `status: 'draft' | 'published'` field and show only published posts publicly.
- In admin, allow toggling status.

Acceptance:
- Public list excludes drafts; admin list shows both with clear labels.

2) Image compression before upload
- Compress selected images client-side before uploading to Storage.

Acceptance:
- File size is reduced with acceptable quality; error states handled.

3) Dark/Light theme toggle
- Implement a theme switch stored in local storage.
- Respect prefers-color-scheme as default.

Acceptance:
- Toggle updates CSS variables or Bootstrap theme classes app-wide.

4) Analytics (Firebase Analytics)
- Integrate Analytics and track key events (page views, blog post interactions).

Acceptance:
- Events visible in Firebase Analytics debug view.

---

#### Deliverables Checklist
- Live deployment link (Firebase Hosting)
- Source code link (GitHub)
- README updated with features implemented
- Screenshots or short demo video (optional but encouraged)
