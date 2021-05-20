import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class NetworkService {
  public scopeNetworkIds!: Array<[]>;

  public setScopeNetworkIds(scopeNetworkIds: any): void {
    this.scopeNetworkIds = scopeNetworkIds;
  }

  public getScopeNetworkIds(): any {
    return this.scopeNetworkIds;
  }
}

