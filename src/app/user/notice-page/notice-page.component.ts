import { Component, OnInit } from '@angular/core';
import { NoticeService } from './shared/notice.service';

@Component({
  selector: 'app-notice-page',
  templateUrl: './notice-page.component.html',
  styleUrls: ['./notice-page.component.scss']
})
export class NoticePageComponent implements OnInit {

  noticeSearches: any;
  noticeViewedAll: any;
  noticeLikedAll: any;
  noticeInterestedAll: any;

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNoticeSearches()
    .then(noticeSearches => this.noticeSearches = noticeSearches);
    
    this.noticeService.getNoticeViewed()
    .then(noticeViewedAll => this.noticeViewedAll = noticeViewedAll);

    this.noticeService.getNoticeLiked()
    .then(noticeLikedAll => this.noticeLikedAll = noticeLikedAll);

    this.noticeService.getNoticeInterested()
    .then(noticeInterestedAll => this.noticeInterestedAll = noticeInterestedAll);
  }

}
