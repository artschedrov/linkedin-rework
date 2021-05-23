import { Injectable } from '@angular/core';
import { ARTICLES_FOR_USER } from './mock-article-for-user';

@Injectable()
export class ArticleForUserService {
  getArticlesForUser() {
    return Promise.resolve(ARTICLES_FOR_USER);
  }
}