import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../shared/services/profile.interface';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {
  @Input()
  profile!: Profile;
  constructor() { }

  ngOnInit(): void {
  }

}
