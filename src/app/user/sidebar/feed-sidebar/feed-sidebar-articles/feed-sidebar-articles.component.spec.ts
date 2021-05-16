import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSidebarArticlesComponent } from './feed-sidebar-articles.component';

describe('FeedSidebarArticlesComponent', () => {
  let component: FeedSidebarArticlesComponent;
  let fixture: ComponentFixture<FeedSidebarArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedSidebarArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSidebarArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
