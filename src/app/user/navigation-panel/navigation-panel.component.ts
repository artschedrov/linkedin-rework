import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from './shared/navigation.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationPanelComponent implements OnInit {

  linksIds!: any;
  activeLinkId: any;

  constructor(private navigationService: NavigationService) { }

  changeTab($event: any, tabName: any) {
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
    this.linksIds = this.navigationService.getScopeNetworkIds();
    this.activeLinkId = this.linksIds[1];
  }

}
