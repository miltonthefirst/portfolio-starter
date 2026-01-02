import { Injectable, signal } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts = signal<BlogPost[]>([
    {
      id: 1,
      title: "My Journey into Web Development",
      excerpt: "How it all started with Tumblr themes and evolved into a career.",
      image: "https://placehold.co/600x400/1e293b/FFF?text=Blog+Post+1",
      date: "2024-01-01",
      url: "https://example.com/blog/journey"
    }
  ]);

  getPosts() {
    return this.posts.asReadonly();
  }
}
