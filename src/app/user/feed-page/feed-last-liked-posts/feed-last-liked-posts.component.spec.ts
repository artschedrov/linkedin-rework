import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedLastLikedPostsComponent } from './feed-last-liked-posts.component';

describe('FeedLastLikedPostsComponent', () => {
  let component: FeedLastLikedPostsComponent;
  let fixture: ComponentFixture<FeedLastLikedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedLastLikedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedLastLikedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
