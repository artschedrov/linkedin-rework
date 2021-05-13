import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidebarStatsComponent } from './profile-sidebar-stats.component';

describe('ProfileSidebarStatsComponent', () => {
  let component: ProfileSidebarStatsComponent;
  let fixture: ComponentFixture<ProfileSidebarStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSidebarStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSidebarStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
