import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NetworkService } from '../../shared/services/network.service';

@Component({
  selector: 'app-network-sidebar',
  templateUrl: './network-sidebar.component.html',
  styleUrls: ['./network-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NetworkSidebarComponent implements OnInit {

  networkIds!: any;
  activeNetworkId: any;

  constructor(private networkService: NetworkService) { }

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
    this.networkIds = this.networkService.getScopeNetworkIds();
    console.log(this.networkIds);
    this.activeNetworkId = this.networkIds[1];
  }

}
