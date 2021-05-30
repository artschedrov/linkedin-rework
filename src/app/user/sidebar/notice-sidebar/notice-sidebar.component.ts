import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSidebarViews } from '../../profile-page/shared/profile.model';
import { SidebarService } from '../shared/sidebar.service';

@Component({
  selector: 'app-notice-sidebar',
  templateUrl: './notice-sidebar.component.html',
  styleUrls: ['./notice-sidebar.component.scss']
})
export class NoticeSidebarComponent implements OnInit {

  stats$!: Observable<ProfileSidebarViews[]>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/profileSidebar.json'
    this.stats$ = this.sidebarService.getSideBarInfo(path);
    console.log(this.stats$);
  }
}
