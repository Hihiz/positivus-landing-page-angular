import { Component, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BlogPost } from '../models/blog-post';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  imports: [ReactiveFormsModule, BlogCardComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {
  private fb = new FormBuilder();

  searchForm = this.fb.group({
    article: [''],
  });

  searchQuery = toSignal(
    this.searchForm.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged((prev, curr) => prev.article === curr.article),
      map((form) => form.article ?? ''),
    ),
    { initialValue: '' },
  );

  posts: BlogPost[] = [
    {
      id: 1,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'How to quickly deploy a static website',
      description:
        'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.',
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
    {
      id: 2,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'Optimizing image performance for modern websites',
      description:
        "Images often make up the bulk of a web page's total size. Learning how to properly compress, lazy-load, and serve next-gen formats can drastically improve your site loading speed and overall user experience.",
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
    {
      id: 3,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'A beginner guide to semantic HTML tags',
      description:
        'Using the correct structural tags is vital for modern web standards. It not only helps search engines understand your content better but also ensures that assistive technologies can navigate your site seamlessly.',
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
    {
      id: 4,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'Understanding CSS Grid layouts in 2024',
      description:
        'Grid systems have completely revolutionized the way layout design is handled on the web. Master alignment, fractional units, and responsive templates without relying on heavy external frameworks.',
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
    {
      id: 5,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'How to integrate Web Analytics securely',
      description:
        "Tracking user behavior shouldn't mean compromising their personal data privacy. Discover lightweight and privacy-focused tracking tools that give you crucial business insights while respecting compliance standards.",
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
    {
      id: 6,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'Best practices for managing clean git repositories',
      description: `Working in teams requires consistent version control
                  strategies to avoid messy conflicts. Learn how to write clear
                  commit messages, manage branching models, and clean up
                  temporary workspaces effectively.`,
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
    {
      id: 7,
      categoryIcon: '/img/blog/category-1.svg',
      categoryTitle: 'Tutorial',
      date: '2024-01-20',
      dateFormatted: 'January 20, 2024',
      title: 'An introduction to keyboard navigation and accessibility',
      description: `Ensuring that interactive elements can be reached using only a
                  keyboard is a core aspect of digital accessibility. Learn how
                  to manage focus states, handle tab index attributes, and test
                  your interface for power users.`,
      authorAvatar: '/img/team/1.png',
      authorName: 'John Smith',
      authorLink: { routerLink: '/blog' },
      readMoreLink: { routerLink: '/blog' },
    },
  ];

  filteredPosts = computed(() => {
    const query = this.searchQuery().toLowerCase();

    if (query.length === 0) {
      return this.posts;
    }

    const result = this.posts.filter((post) => post.title.toLowerCase().includes(query));
    return result;
  });

  onBlogClick(event: { blog: BlogPost; timeClicked: Date }): void {
    console.log('Blog clicked:', event.blog.title, 'at', event.timeClicked);
  }
}
