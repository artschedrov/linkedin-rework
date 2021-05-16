import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSidebarViews, ProfileSidebarVisitors } from '../../shared/services/profile.interface';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

  stats$!: Observable<ProfileSidebarViews[]>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/profileSidebar.json'
    this.stats$ = this.sidebarService.getSideBarInfo(path);
  }
}
