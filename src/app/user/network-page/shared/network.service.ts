import { Injectable } from '@angular/core';
import { NETWORK_MENU_LINK } from './mock-network'
import { MenuLink } from './network.model';

@Injectable({providedIn: 'root'})
export class NetworkService {
  getNetworkLinks() {
    return Promise.resolve(NETWORK_MENU_LINK);
  }
}