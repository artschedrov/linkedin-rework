import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/user/profile/shared/profile.model';

@Component({
  selector: 'app-feed-sidebar-userinfo',
  templateUrl: './feed-sidebar-userinfo.component.html',
  styleUrls: ['./feed-sidebar-userinfo.component.scss']
})
export class FeedSidebarUserinfoComponent implements OnInit {
  
  @Input()
  profile!: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
