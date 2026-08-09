import { Component, input, output } from '@angular/core';
import { TeamItem } from '../../models/team-item';
import { TeamCardComponent } from './team-card/team-card.component';

@Component({
  selector: 'app-team-section',
  imports: [TeamCardComponent],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
})
export class TeamSectionComponent {
  members = input.required<TeamItem[]>();

  socialClick = output<{
    member: TeamItem;
    platform: string;
  }>();

  onSocialClick(event: { member: TeamItem; platform: string }): void {
    console.log(`Social click: ${event.platform} for ${event.member.name}`);

    this.socialClick.emit(event);
  }
}
