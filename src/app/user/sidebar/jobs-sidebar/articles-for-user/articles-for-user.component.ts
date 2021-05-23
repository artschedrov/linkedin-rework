import { Component, OnInit } from '@angular/core';
import { articleForUser } from './shared/article-for-user.model';
import { ArticleForUserService } from './shared/articleForUser.service';

@Component({
  selector: 'app-articles-for-user',
  templateUrl: './articles-for-user.component.html',
  styleUrls: ['./articles-for-user.component.scss']
})
export class ArticlesForUserComponent implements OnInit {

  articles: articleForUser[] = [];

  constructor(private articleForUser: ArticleForUserService) { }

  ngOnInit(): void {
    this.articleForUser.getArticlesForUser().then(articles => this.articles = articles);
  }
}
