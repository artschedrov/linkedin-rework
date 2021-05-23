import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSidebarRecomended } from 'src/app/user/profile-page/shared/profile.model';
import { SidebarService } from 'src/app/user/sidebar/shared/sidebar.service';

@Component({
  selector: 'app-profile-sidebar-recomendations',
  templateUrl: './profile-sidebar-recomendations.component.html',
  styleUrls: ['./profile-sidebar-recomendations.component.scss']
})
export class ProfileSidebarRecomendationsComponent implements OnInit {

  recomendations$!: Observable<ProfileSidebarRecomended[]>

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/profileSidebar/0/recomended.json'
    this.recomendations$ = this.sidebarService.getSideBarInfo(path);
  }
}
