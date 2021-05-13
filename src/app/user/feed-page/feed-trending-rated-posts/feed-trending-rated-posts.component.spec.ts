import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTrendingRatedPostsComponent } from './feed-trending-rated-posts.component';

describe('FeedTrendingRatedPostsComponent', () => {
  let component: FeedTrendingRatedPostsComponent;
  let fixture: ComponentFixture<FeedTrendingRatedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTrendingRatedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTrendingRatedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
