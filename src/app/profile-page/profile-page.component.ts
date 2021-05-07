import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {

  constructor() { }

  changeTab($event: any, tabName: string) {
    let currentTab;
    const tabs = document.getElementsByClassName('profile__tab') as HTMLCollectionOf<HTMLElement>;
    const tabButtons = document.getElementsByClassName('profile__tab-button') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('profile__tab--active');
    }

    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(' profile__tab-button--active', '');
    }

    currentTab = document.getElementById(tabName);

    if (currentTab) {
      currentTab.classList.add('profile__tab--active');
      $event.currentTarget.className += ' profile__tab-button--active';
    }
  }

  ngOnInit(): void {
  }
}
