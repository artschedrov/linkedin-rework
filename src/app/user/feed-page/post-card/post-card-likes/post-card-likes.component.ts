import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from 'src/app/user/feed-page/shared/feed.service';
import { Post } from 'src/app/user/feed-page/shared/post.model';

@Component({
  selector: 'app-post-card-likes',
  templateUrl: './post-card-likes.component.html',
  styleUrls: ['./post-card-likes.component.scss']
})
export class PostCardLikesComponent implements OnInit {

  likers: any;
  post: any;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.post = this.feedService.getScopePost();
    this.likers = Object.values(this.post.likers);
  }
}
