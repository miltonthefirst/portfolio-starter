import { Injectable, signal } from '@angular/core';

export interface AboutData {
  title: string;
  subtitle: string;
  image: string;
  description1: string;
  description2: string;
}

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private aboutData = signal<AboutData>({
    title: "About Me",
    subtitle: "Get to know me better",
    image: "https://placehold.co/600x600/1e293b/FFF?text=Profile+Pic",
    description1: "I'm a Creative Web Developer based in [City]",
    description2: "I have a passion for creating clean, user-friendly, and efficient websites. My journey in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is fun!",
    // description3: "Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences."
  });

  getAboutData() {
    return this.aboutData.asReadonly();
  }
}
