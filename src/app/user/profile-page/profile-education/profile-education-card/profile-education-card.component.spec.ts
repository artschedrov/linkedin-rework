import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEducationCardComponent } from './profile-education-card.component';

describe('ProfileEducationCardComponent', () => {
  let component: ProfileEducationCardComponent;
  let fixture: ComponentFixture<ProfileEducationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEducationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEducationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
