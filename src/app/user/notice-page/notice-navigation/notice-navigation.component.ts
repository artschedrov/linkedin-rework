import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar/shared/sidebar.service';
import { NoticeService } from '../shared/notice.service';

@Component({
  selector: 'app-notice-navigation',
  templateUrl: './notice-navigation.component.html',
  styleUrls: ['./notice-navigation.component.scss']
})
export class NoticeNavigationComponent implements OnInit {

  noticeLinks: any;

  constructor(private noticeService: NoticeService, private sidebarService: SidebarService) { }

  switchNoticeTab($event: any, tabName: any) {
    this.sidebarService.changeTab($event, tabName);
  }

  ngOnInit(): void {
    this.noticeService.getNoticeLinks().then(noticeLinks => this.noticeLinks = noticeLinks);
  }

}
