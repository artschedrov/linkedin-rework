import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class NavigationService {
  public scopeLinksIds!: Array<[]>;

  public setScopeNetworkIds(scopeLinksIds: any): void {
    this.scopeLinksIds = scopeLinksIds;
  }

  public getScopeNetworkIds(): any {
    return this.scopeLinksIds;
  }
}