import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/user/shared/services/feed.service';

@Component({
  selector: 'app-post-card-comment-this',
  templateUrl: './post-card-comment-this.component.html',
  styleUrls: ['./post-card-comment-this.component.scss']
})
export class PostCardCommentThisComponent implements OnInit {

  commentators: any;
  post: any;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.post = this.feedService.getScopePost();
    this.commentators = Object.values(this.post.lastComment);
  }

}
