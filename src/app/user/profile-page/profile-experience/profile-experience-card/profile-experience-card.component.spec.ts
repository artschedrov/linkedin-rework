import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperienceCardComponent } from './profile-experience-card.component';

describe('ProfileExperienceCardComponent', () => {
  let component: ProfileExperienceCardComponent;
  let fixture: ComponentFixture<ProfileExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExperienceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
