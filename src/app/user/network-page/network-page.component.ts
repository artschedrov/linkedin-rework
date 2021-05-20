import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../shared/services/network.service';

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss']
})
export class NetworkPageComponent implements OnInit {

  constructor(private networkService: NetworkService) {}

  netWorksIds = ['connections', 'invitations', 'teammates', 'groups', 'pages', 'hashtags']
  
  ngOnInit(): void {
    this.networkService.setScopeNetworkIds(this.netWorksIds);
  }

}
