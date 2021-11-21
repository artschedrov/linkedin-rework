import { Component, OnInit } from '@angular/core';
import { Profile } from './shared/profile.model';
import { ProfileService } from './shared/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {

  profiles: Profile[] = [];
  
  constructor(private profilesService: ProfileService) { }

  changeTab($event: any, tabName: string) {
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

  ngOnInit(): void {
    this.profilesService.getProfileInfo().then(profiles => this.profiles = profiles);
    
  }
}
