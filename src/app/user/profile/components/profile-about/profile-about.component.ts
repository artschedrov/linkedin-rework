import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Profile } from '../../shared/profile.model';
import { SidebarService } from '../../../sidebar/shared/sidebar.service';

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
