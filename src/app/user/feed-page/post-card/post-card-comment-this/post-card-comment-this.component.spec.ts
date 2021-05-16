import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardCommentThisComponent } from './post-card-comment-this.component';

describe('PostCardCommentThisComponent', () => {
  let component: PostCardCommentThisComponent;
  let fixture: ComponentFixture<PostCardCommentThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardCommentThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardCommentThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
