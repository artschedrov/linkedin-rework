import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from 'src/app/user/feed-page/shared/feed.service';
import { Post } from 'src/app/user/feed-page/shared/post.model';

@Component({
  selector: 'app-post-card-first-post',
  templateUrl: './post-card-first-post.component.html',
  styleUrls: ['./post-card-first-post.component.scss']
})
export class PostCardFirstPostComponent implements OnInit {

  post: any;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.post = this.feedService.getScopePost();
  }

}
