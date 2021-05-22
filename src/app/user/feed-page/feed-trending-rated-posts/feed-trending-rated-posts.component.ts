import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedService } from '../../shared/services/feed.service';
import { Post } from '../../shared/interfaces/post.interface';

@Component({
  selector: 'app-feed-trending-rated-posts',
  templateUrl: './feed-trending-rated-posts.component.html',
  styleUrls: ['./feed-trending-rated-posts.component.scss']
})
export class FeedTrendingRatedPostsComponent implements OnInit {

  highRatedPosts$!: Observable<Post[]>;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    let path = '/posts/highRated.json';
    this.highRatedPosts$ = this.feedService.getFeedInfo(path);
  }
}
