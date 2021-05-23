import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/user/feed-page/shared/feed.service';

@Component({
  selector: 'app-post-card-highrated-post',
  templateUrl: './post-card-highrated-post.component.html',
  styleUrls: ['./post-card-highrated-post.component.scss']
})
export class PostCardHighratedPostComponent implements OnInit {

  attachFiles: any
  post: any;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.post = this.feedService.getScopePost();
  }

}
