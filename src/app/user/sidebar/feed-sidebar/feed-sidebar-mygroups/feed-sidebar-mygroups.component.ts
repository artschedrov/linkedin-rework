import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/user/shared/services/group.interface';
import { SidebarService } from 'src/app/user/shared/services/sidebar.service';

@Component({
  selector: 'app-feed-sidebar-mygroups',
  templateUrl: './feed-sidebar-mygroups.component.html',
  styleUrls: ['./feed-sidebar-mygroups.component.scss']
})
export class FeedSidebarMygroupsComponent implements OnInit {

  groups$!: Observable<Group[]>

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/feedSidebar/0/groups.json';
    this.groups$ = this.sidebarService.getSideBarInfo(path);
  }
}
