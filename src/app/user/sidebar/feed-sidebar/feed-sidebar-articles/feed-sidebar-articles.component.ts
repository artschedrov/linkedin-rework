import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/user/shared/interfaces/article.interface';
import { SidebarService } from 'src/app/user/shared/services/sidebar.service';

@Component({
  selector: 'app-feed-sidebar-articles',
  templateUrl: './feed-sidebar-articles.component.html',
  styleUrls: ['./feed-sidebar-articles.component.scss']
})
export class FeedSidebarArticlesComponent implements OnInit {

  articles$!: Observable<Article[]>

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    let path = '/feedSidebar/0/trendArticles.json'
    this.articles$ = this.sidebarService.getSideBarInfo(path);
  }

}
