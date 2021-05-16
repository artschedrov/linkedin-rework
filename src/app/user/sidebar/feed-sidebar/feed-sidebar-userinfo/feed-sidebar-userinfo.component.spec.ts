import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSidebarUserinfoComponent } from './feed-sidebar-userinfo.component';

describe('FeedSidebarUserinfoComponent', () => {
  let component: FeedSidebarUserinfoComponent;
  let fixture: ComponentFixture<FeedSidebarUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedSidebarUserinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSidebarUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
