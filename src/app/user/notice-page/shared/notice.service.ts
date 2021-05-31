import { Injectable } from '@angular/core';
import { NOTICE_INTERESTED, NOTICE_LIKED, NOTICE_MENU_LINK, NOTICE_SEARCHES, NOTICE_VIEWED } from './mock-notice';

@Injectable({providedIn: 'root'})
export class NoticeService {
  
  getNoticeLinks() {
    return Promise.resolve(NOTICE_MENU_LINK);
  }

  getNoticeSearches() {
    return Promise.resolve(NOTICE_SEARCHES);
  }

  getNoticeViewed() {
    return Promise.resolve(NOTICE_VIEWED);
  }

  getNoticeLiked() {
    return Promise.resolve(NOTICE_LIKED);
  }

  getNoticeInterested() {
    return Promise.resolve(NOTICE_INTERESTED);
  }
}