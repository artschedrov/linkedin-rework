import { Component, Input, OnInit } from '@angular/core';
import { ProfileSkills } from 'src/app/user/profile/shared/profile.model';

@Component({
  selector: 'app-profile-skill-card',
  templateUrl: './profile-skill-card.component.html',
  styleUrls: ['./profile-skill-card.component.scss']
})
export class ProfileSkillCardComponent implements OnInit {
  @Input()
  skill!: ProfileSkills;
  endoresments: any;

  constructor() { }

  ngOnInit(): void {
    this.endoresments = Object.values(this.skill.endoresment);
  }
}
