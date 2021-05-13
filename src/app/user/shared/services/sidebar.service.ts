import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import {ProfileSidebarRecomended, ProfileSidebarViews, ProfileSidebarVisitors} from './profile.interface';

@Injectable({providedIn: 'root'})

export class SidebarService {
  constructor(private http: HttpClient) {}

  getSideBarInfo(path: string) {
    return this.http.get(`${environment.fireBaseUrl}${path}`)
    .pipe(
      map((response: {[key: string]: any}) => {
      return Object
      .keys(response)
      .map(key => ({
        ...response[key],
        id:key
      }));
    }));
  }
}