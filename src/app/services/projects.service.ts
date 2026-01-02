import { Injectable, signal } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects = signal<Project[]>([
    {
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard with dark mode toggling, chart visualization, and recent order tables.",
      technologies: ["HTML", "CSS", "JS"],
      githubUrl: "#",
      liveUrl: "#",
      icon: "fas fa-laptop-code"
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task manager that helps teams organize their workflow efficiently.",
      technologies: ["React", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "Weather Forecaster",
      description: "Fetches real-time weather data from an API and displays forecasts with dynamic background animations.",
      technologies: ["API", "JavaScript"],
      githubUrl: "#",
      liveUrl: "#",
      icon: "fas fa-cloud"
    }
  ]);

  getProjects() {
    return this.projects.asReadonly();
  }
}
