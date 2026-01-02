import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills-page',
  imports: [],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPage {
  private skillsService = inject(SkillsService);
  skills = this.skillsService.getSkills();
}
