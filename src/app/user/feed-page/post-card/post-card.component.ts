import { ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FeedService } from '../../shared/services/feed.service';
import { Post } from '../../shared/interfaces/post.interface';
import { PostCardCommentThisComponent } from './post-card-comment-this/post-card-comment-this.component';
import { PostCardFirstPostComponent } from './post-card-first-post/post-card-first-post.component';
import { PostCardHighratedPostComponent } from './post-card-highrated-post/post-card-highrated-post.component';
import { PostCardLikesComponent } from './post-card-likes/post-card-likes.component';
import { RefPostDirective } from './refPost.directive';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  attachFiles!: any;
  @Input() post!: Post;
  @Input() parentName!: string;

  @ViewChild(RefPostDirective, { static: true }) refPostDir!: RefPostDirective;

  constructor(public resolver: ComponentFactoryResolver, private feedService: FeedService) { 
  }

  ngOnInit(): void {
    const postLikesFactory = this.resolver.resolveComponentFactory(PostCardLikesComponent);
    const postCommentFactory = this.resolver.resolveComponentFactory(PostCardCommentThisComponent);
    const postHighratedFactory = this.resolver.resolveComponentFactory(PostCardHighratedPostComponent);
    const postFirstPostFactory = this.resolver.resolveComponentFactory(PostCardFirstPostComponent);

    this.feedService.setScopePost(this.post);
    
    if (this.parentName === 'app-feed-last-liked-posts') {
      this.refPostDir.containerRef.clear();
      this.refPostDir.containerRef.createComponent(postLikesFactory);
    }
    if (this.parentName === 'app-feed-trending-comment') {
      this.refPostDir.containerRef.clear();
      this.refPostDir.containerRef.createComponent(postCommentFactory);
    }
    if (this.parentName === 'app-feed-trending-rated-posts') {
      this.refPostDir.containerRef.clear();
      this.refPostDir.containerRef.createComponent(postHighratedFactory);
    }
    if (this.parentName === 'app-feed-trending-first-posts') {
      this.refPostDir.containerRef.clear();
      this.refPostDir.containerRef.createComponent(postFirstPostFactory);
    }

    if(this.post.attachFile) {
      this.attachFiles = Object.values(this.post.attachFile!);
    }
  }
}
