import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardLikesComponent } from './post-card-likes.component';

describe('PostCardLikesComponent', () => {
  let component: PostCardLikesComponent;
  let fixture: ComponentFixture<PostCardLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
