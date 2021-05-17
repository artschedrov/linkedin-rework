import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../shared/services/profile.interface';
import { ProfileService } from '../../shared/services/profile.service';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-feed-sidebar',
  templateUrl: './feed-sidebar.component.html',
  styleUrls: ['./feed-sidebar.component.scss']
})
export class FeedSidebarComponent implements OnInit {

  profiles$!: Observable<Profile[]>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/profiles.json'
    this.profiles$ = this.sidebarService.getSideBarInfo(path);
  }
}
