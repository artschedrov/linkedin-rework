import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTrendingCommentPostsComponent } from './feed-trending-comment-posts.component';

describe('FeedTrendingCommentPostsComponent', () => {
  let component: FeedTrendingCommentPostsComponent;
  let fixture: ComponentFixture<FeedTrendingCommentPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTrendingCommentPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTrendingCommentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
