import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTrendingFirstPostsComponent } from './feed-trending-first-posts.component';

describe('FeedTrendingFirstPostsComponent', () => {
  let component: FeedTrendingFirstPostsComponent;
  let fixture: ComponentFixture<FeedTrendingFirstPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTrendingFirstPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTrendingFirstPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
