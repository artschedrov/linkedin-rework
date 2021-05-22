import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from 'src/app/user/shared/services/feed.service';
import { Post } from 'src/app/user/shared/interfaces/post.interface';

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
