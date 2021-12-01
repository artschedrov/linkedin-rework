import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSidebarVisitors } from 'src/app/user/profile/shared/profile.model';
import { SidebarService } from 'src/app/user/sidebar/shared/sidebar.service';

@Component({
  selector: 'app-profile-sidebar-visitors',
  templateUrl: './profile-sidebar-visitors.component.html',
  styleUrls: ['./profile-sidebar-visitors.component.scss']
})
export class ProfileSidebarVisitorsComponent implements OnInit {

  visitors$!: Observable<ProfileSidebarVisitors[]>

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/profileSidebar/0/visitors.json'
    this.visitors$ = this.sidebarService.getSideBarInfo(path);
  }

}
