import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardHighratedPostComponent } from './post-card-highrated-post.component';

describe('PostCardHighratedPostComponent', () => {
  let component: PostCardHighratedPostComponent;
  let fixture: ComponentFixture<PostCardHighratedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardHighratedPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardHighratedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
