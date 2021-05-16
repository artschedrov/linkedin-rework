import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedService } from '../../shared/services/feed.service';
import { Post } from '../../shared/services/post.interface';

@Component({
  selector: 'app-feed-trending-comment-posts',
  templateUrl: './feed-trending-comment-posts.component.html',
  styleUrls: ['./feed-trending-comment-posts.component.scss']
})
export class FeedTrendingCommentPostsComponent implements OnInit {
  
  newComments$!: Observable<Post[]>;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    let path = '/posts/newComments.json';
    this.newComments$ = this.feedService.getFeedInfo(path);
  }

}
