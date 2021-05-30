import { Injectable } from '@angular/core';
import { NOTICE_MENU_LINK, NOTICE_SEARCHES } from './mock-notice';

@Injectable({providedIn: 'root'})
export class NoticeService {
  
  getNoticeLinks() {
    return Promise.resolve(NOTICE_MENU_LINK);
  }

  getNoticeSearches() {
    return Promise.resolve(NOTICE_SEARCHES);
  }
}