import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSidebarMygroupsComponent } from './feed-sidebar-mygroups.component';

describe('FeedSidebarMygroupsComponent', () => {
  let component: FeedSidebarMygroupsComponent;
  let fixture: ComponentFixture<FeedSidebarMygroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedSidebarMygroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSidebarMygroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
