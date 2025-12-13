### Firebase Setup & Deploy

This guide walks you through adding Firebase (Hosting, Auth, Firestore, Storage) to the Angular portfolio. It assumes modern Angular with standalone components and best practices outlined in the README.

---

#### 1) Install tooling

Install Firebase CLI globally and the AngularFire library:
```
npm i -g firebase-tools
npm i @angular/fire firebase
```

Login to Firebase:
```
firebase login
```

Create a Firebase project in the Console (https://console.firebase.google.com) and note the project ID.

---

#### 2) Initialize Hosting, Firestore, and Storage

From the repo root, run:
```
firebase init
```

Select:
- Hosting
- Firestore
- Storage (optional now, recommended for images)

Choose the existing project you created. For Hosting, set the public directory to `dist/portfolio-starter/browser` (adjust if your output path differs). Configure as a single-page app: Yes.

This will create files such as `firebase.json`, `.firebaserc`, and rule files (if not present yet).

---

#### 3) Environment configuration

Add your Firebase web app config to Angular environments.

Example structure (do not commit secrets):
```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'your-project-id.firebaseapp.com',
    projectId: 'your-project-id',
    storageBucket: 'your-project-id.appspot.com',
    messagingSenderId: '...',
    appId: '...'
  }
};
```

Create a production variant in `environment.prod.ts` with the same shape and your production project values.

---

#### 4) Bootstrap AngularFire

Register Firebase providers in your app bootstrap (typically `main.ts`). Use `provideFirebaseApp` and individual feature providers. Prefer `inject()` inside services/components.

Example:
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
});
```

---

#### 5) Auth basics

Create an `AuthService` with `inject()` and AngularFire Auth APIs. Use route guards to protect admin routes.

```ts
import { inject, Injectable, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  currentUser = toSignal(user(this.auth), { initialValue: null });

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
```

Guard reference: https://angular.dev/guide/routing/route-guards

---

#### 6) Firestore CRUD basics

Use AngularFire Firestore for blog posts. Keep services single-responsibility.

```ts
import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  tags?: string[];
  status?: 'draft' | 'published';
  createdAt: number;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private fs = inject(Firestore);
  private col = collection(this.fs, 'posts');

  list(): Observable<BlogPost[]> {
    return collectionData(this.col, { idField: 'id' }) as Observable<BlogPost[]>;
  }

  create(post: BlogPost) {
    return addDoc(this.col, post);
  }

  update(id: string, data: Partial<BlogPost>) {
    return updateDoc(doc(this.fs, 'posts', id), data);
  }

  delete(id: string) {
    return deleteDoc(doc(this.fs, 'posts', id));
  }
}
```

Firestore docs: https://firebase.google.com/docs/firestore

---

#### 7) Storage uploads

Use AngularFire Storage to upload images. For large images, consider client-side compression (see Assignments).

```ts
import { inject, Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private storage = inject(Storage);

  async uploadPublic(path: string, file: File): Promise<string> {
    const r = ref(this.storage, path);
    await uploadBytes(r, file);
    return getDownloadURL(r);
  }
}
```

Storage docs: https://firebase.google.com/docs/storage

---

#### 8) Security rules (basics)

Start strict; relax as necessary for the course.

Firestore `firestore.rules` example (only authenticated users can write; anyone can read published posts):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if resource.data.status == 'published';
      allow write: if request.auth != null; // admin checks can be added later
    }
  }
}
```

Storage `storage.rules` example:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /public/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Always test rules in the Firebase emulator or with the Rules Playground.

---

#### 9) Emulators (optional but recommended)

You can use Firebase Emulators for local development:
```
firebase init emulators
firebase emulators:start
```

Docs: https://firebase.google.com/docs/emulator-suite

---

#### 10) Deploy

Build the Angular app:
```
ng build
```

Deploy Hosting (and rules if configured):
```
firebase deploy
```

Your site will be available at `https://<project-id>.web.app`.
