import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidebarRecomendationsComponent } from './profile-sidebar-recomendations.component';

describe('ProfileSidebarRecomendationsComponent', () => {
  let component: ProfileSidebarRecomendationsComponent;
  let fixture: ComponentFixture<ProfileSidebarRecomendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSidebarRecomendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSidebarRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
