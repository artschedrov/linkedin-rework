import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/post.interface';

@Injectable({providedIn: 'root'})

export class FeedService {

  public scopePost!: Post;
  constructor(private http: HttpClient) {}

  public setScopePost(scopePost: any): void {
    this.scopePost = scopePost;
  }

  public getScopePost(): Post {
    return this.scopePost;
  }

  getFeedInfo(path: string) {
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