import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../shared/interfaces/profile.interface';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  @Input()
  profile!: Profile;
  constructor() {}

  ngOnInit() {
  }

}
