import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFirstPostComponent } from './post-card-first-post.component';

describe('PostCardFirstPostComponent', () => {
  let component: PostCardFirstPostComponent;
  let fixture: ComponentFixture<PostCardFirstPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardFirstPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardFirstPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
