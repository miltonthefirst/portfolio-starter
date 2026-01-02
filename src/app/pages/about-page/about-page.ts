import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  private aboutService = inject(AboutService);
  aboutData = this.aboutService.getAboutData();
}
