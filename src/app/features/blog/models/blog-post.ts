import { RouterLinkBase } from '../../../shared/models/router-link-base';

export interface BlogPost {
  id: number;
  categoryIcon: string;
  categoryTitle: string;
  date: string;
  dateFormatted: string;
  title: string;
  description: string;
  authorAvatar: string;
  authorName: string;
  authorLink: RouterLinkBase;
  readMoreLink: RouterLinkBase;
}
