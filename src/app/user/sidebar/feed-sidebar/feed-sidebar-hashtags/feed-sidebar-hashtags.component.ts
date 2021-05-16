import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hashtag } from 'src/app/user/shared/services/hashtag.interface';
import { SidebarService } from 'src/app/user/shared/services/sidebar.service';

@Component({
  selector: 'app-feed-sidebar-hashtags',
  templateUrl: './feed-sidebar-hashtags.component.html',
  styleUrls: ['./feed-sidebar-hashtags.component.scss']
})
export class FeedSidebarHashtagsComponent implements OnInit {

  hashtags$!: Observable<Hashtag[]>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/feedSidebar/0/hashtags.json';
    this.hashtags$ = this.sidebarService.getSideBarInfo(path);
  }

}
