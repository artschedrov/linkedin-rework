import { Component, Input, OnInit } from '@angular/core';
import { ProfileSidebarViews } from 'src/app/user/shared/interfaces/profile.interface';

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
