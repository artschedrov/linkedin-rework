import { Component, Input, OnInit } from '@angular/core';
import { ProfileExperience } from 'src/app/user/profile/shared/profile.model';

@Component({
  selector: 'app-profile-experience-card',
  templateUrl: './profile-experience-card.component.html',
  styleUrls: ['./profile-experience-card.component.scss']
})
export class ProfileExperienceCardComponent implements OnInit {
  @Input()
  experience!: ProfileExperience;
  constructor() { }

  ngOnInit(): void {
  }

}
