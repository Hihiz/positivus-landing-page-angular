import { Component, input, output } from '@angular/core';
import { BlogPost } from '../../models/blog-post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  post = input.required<BlogPost>();

  blogClick = output<{ blog: BlogPost; timeClicked: Date }>();

  onBlogClick(): void {
    this.blogClick.emit({
      blog: this.post(),
      timeClicked: new Date(),
    });
  }
}
