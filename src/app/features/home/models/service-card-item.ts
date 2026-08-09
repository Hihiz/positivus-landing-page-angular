
import { RouterLinkBase } from '../../../shared/models/router-link-base';

export interface ServiceCardItem extends RouterLinkBase {
  cardTheme: 'gray' | 'green' | 'dark';
  title: string;
  cardIcon: string;
  linkIcon: string;
  spanTheme?: 'white';
  pColor?: 'white';
}
