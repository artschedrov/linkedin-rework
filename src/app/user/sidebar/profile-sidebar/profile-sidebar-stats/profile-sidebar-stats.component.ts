import { Component, Input, OnInit } from '@angular/core';
import { ProfileSidebarViews } from 'src/app/user/profile-page/shared/profile.model';

@Component({
  selector: 'app-profile-sidebar-stats',
  templateUrl: './profile-sidebar-stats.component.html',
  styleUrls: ['./profile-sidebar-stats.component.scss']
})
export class ProfileSidebarStatsComponent implements OnInit {

  @Input()
  stat!: ProfileSidebarViews;
  constructor() { }

  ngOnInit(): void {
  }

}
