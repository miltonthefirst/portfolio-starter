import { Injectable, signal } from '@angular/core';

export interface ProfileData {
  fullName: string;
  profession: string;
  tagline: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile = signal<ProfileData>({
    fullName: "Milton Gore",
    profession: "Software Engineer",
    tagline: "I build things for the web.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:milton@example.com"
    }
  });

  getMyProfile() {
    return this.profile.asReadonly();
  }
}
