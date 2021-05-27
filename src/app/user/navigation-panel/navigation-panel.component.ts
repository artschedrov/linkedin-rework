import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NetworkService } from '../network-page/shared/network.service';
import { SidebarService } from '../sidebar/shared/sidebar.service';

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
  link: any;

  constructor(private networkService: NetworkService, private sidebarService: SidebarService) {}

  switchNavigationTab($event: any, tabName: any) {
    this.sidebarService.changeTab($event, tabName);
  }

  ngOnInit(): void {
    this.networkService.getNetworkLinks().then(linksIds => this.linksIds = linksIds);
  }
}
