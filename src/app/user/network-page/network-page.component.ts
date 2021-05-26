import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation-panel/shared/navigation.service';
import { NETWORK_MENU_LINK } from './shared/mock-network'

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.scss']
})
export class NetworkPageComponent implements OnInit {

  
  constructor() {}
  
  ngOnInit(): void {
  }
}