import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss']
})
export class NetworkPageComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  netWorksIds = ['connections', 'invitations', 'teammates', 'groups', 'pages', 'hashtags']
  
  ngOnInit(): void {
    this.navigationService.setScopeNetworkIds(this.netWorksIds);
  }

}
