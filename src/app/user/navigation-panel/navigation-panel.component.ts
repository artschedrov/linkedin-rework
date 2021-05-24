import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InvitationService } from '../network-page/invitations/shared/invitations.service';
import { NetworkService } from '../network-page/shared/network.service';
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
  invitations: any;

  constructor(
    private networkService: NetworkService, 
    private invitationsService: InvitationService,
    private router: Router
    ) {}

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
    this.networkService.getNetworkLinks().then( linksIds => this.linksIds = linksIds);
    this.activeLinkId;
  }
}
