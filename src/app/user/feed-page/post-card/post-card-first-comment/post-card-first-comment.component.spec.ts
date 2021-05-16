import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFirstCommentComponent } from './post-card-first-comment.component';

describe('PostCardFirstCommentComponent', () => {
  let component: PostCardFirstCommentComponent;
  let fixture: ComponentFixture<PostCardFirstCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardFirstCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardFirstCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
