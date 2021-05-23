import { Component, Input, OnInit } from '@angular/core';
import { ProfileEducation } from 'src/app/user/profile-page/shared/profile.model';

@Component({
  selector: 'app-profile-education-card',
  templateUrl: './profile-education-card.component.html',
  styleUrls: ['./profile-education-card.component.scss']
})
export class ProfileEducationCardComponent implements OnInit {
  @Input()
  education!: ProfileEducation;
  constructor() { }

  ngOnInit(): void {
  }

}
