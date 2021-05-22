import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedService } from '../../shared/services/feed.service';
import { Post } from '../../shared/interfaces/post.interface';

@Component({
  selector: 'app-feed-trending-first-posts',
  templateUrl: './feed-trending-first-posts.component.html',
  styleUrls: ['./feed-trending-first-posts.component.scss']
})
export class FeedTrendingFirstPostsComponent implements OnInit {

  firstPosts$!: Observable<Post[]>;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    let path = '/posts/firstPosted.json';
    this.firstPosts$ = this.feedService.getFeedInfo(path);
  }
}
