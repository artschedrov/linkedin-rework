import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidebarVisitorsComponent } from './profile-sidebar-visitors.component';

describe('ProfileSidebarVisitorsComponent', () => {
  let component: ProfileSidebarVisitorsComponent;
  let fixture: ComponentFixture<ProfileSidebarVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSidebarVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSidebarVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
