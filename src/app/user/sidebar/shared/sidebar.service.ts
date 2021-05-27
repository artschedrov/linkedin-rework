import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class SidebarService {
  constructor(private http: HttpClient) {}

  getSideBarInfo(path: string) {
    return this.http.get(`${environment.fireBaseUrl}${path}`)
    .pipe(
      map((response: {[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id:key
      }));
    }));
  }

  public changeTab($event: any, tabName: any) {
    let currentTab;
    const tabs = document.getElementsByClassName('tabs__tab') as HTMLCollectionOf<HTMLElement>;
    const tabButtons = document.getElementsByClassName('tabs__tab-button') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tabs__tab--active');
    }

    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(' tabs__tab-button--active', '');
    }

    currentTab = document.getElementById(tabName);

    if (currentTab) {
      currentTab.classList.add('tabs__tab--active');

      $event.currentTarget.className += ' tabs__tab-button--active';
    }
  }
}