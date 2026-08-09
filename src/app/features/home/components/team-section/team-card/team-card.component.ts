import { Component, input, output } from '@angular/core';
import { TeamItem } from '../../../models/team-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-card',
  imports: [RouterLink],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
})
export class TeamCardComponent {
  member = input.required<TeamItem>();

  socialClick = output<{
    member: TeamItem;
    platform: string;
  }>();

  onSocialClick(): void {
    this.socialClick.emit({
      member: this.member(),
      platform: 'Li',
    });
  }
}
