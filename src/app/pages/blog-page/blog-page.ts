import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-page',
  imports: [],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  private blogService = inject(BlogService);
  posts = this.blogService.getPosts();
}
