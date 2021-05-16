import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedService } from '../../shared/services/feed.service';
import { Post } from '../../shared/services/post.interface';

@Component({
  selector: 'app-feed-last-liked-posts',
  templateUrl: './feed-last-liked-posts.component.html',
  styleUrls: ['./feed-last-liked-posts.component.scss']
})
export class FeedLastLikedPostsComponent implements OnInit {

  lastLikedPosts$!: Observable<Post[]>;
  constructor(private feedService: FeedService) { 
  }

  ngOnInit(): void {
    let path = '/posts/lastLiked.json';
    this.lastLikedPosts$ = this.feedService.getFeedInfo(path);
  }
}
