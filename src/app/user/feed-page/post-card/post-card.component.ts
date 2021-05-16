import { ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FeedService } from '../../shared/services/feed.service';
import { Post } from '../../shared/services/post.interface';
import { PostCardCommentThisComponent } from './post-card-comment-this/post-card-comment-this.component';
import { PostCardLikesComponent } from './post-card-likes/post-card-likes.component';
import { RefPostDirective } from './refPost.directive';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: Post;
  //likers: any;
  @Input() parentName!: string;

  @ViewChild(RefPostDirective, { static: true }) refPostDir!: RefPostDirective;
  //feedService: any;

  constructor(public resolver: ComponentFactoryResolver, private feedService: FeedService) { 
  }

  ngOnInit(): void {
    const postLikesFactory = this.resolver.resolveComponentFactory(PostCardLikesComponent);
    const postCommentFactory = this.resolver.resolveComponentFactory(PostCardCommentThisComponent);

    this.feedService.setScopePost(this.post);
    
    if (this.parentName === 'app-feed-last-liked-posts') {
      this.refPostDir.containerRef.clear();
      this.refPostDir.containerRef.createComponent(postLikesFactory);
    }
    if (this.parentName === 'app-feed-trending-comment') {
      this.refPostDir.containerRef.clear();
      this.refPostDir.containerRef.createComponent(postCommentFactory);
    }
  }
}
