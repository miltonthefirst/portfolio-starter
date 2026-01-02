import { Injectable, signal } from '@angular/core';

export interface Skill {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills = signal<Skill[]>([
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Figma", icon: "fab fa-figma" }
  ]);

  getSkills() {
    return this.skills.asReadonly();
  }
}
