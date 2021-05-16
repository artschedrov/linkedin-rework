import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSidebarHashtagsComponent } from './feed-sidebar-hashtags.component';

describe('FeedSidebarHashtagsComponent', () => {
  let component: FeedSidebarHashtagsComponent;
  let fixture: ComponentFixture<FeedSidebarHashtagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedSidebarHashtagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSidebarHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
