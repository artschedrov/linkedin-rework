import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkillCardComponent } from './profile-skill-card.component';

describe('ProfileSkillCardComponent', () => {
  let component: ProfileSkillCardComponent;
  let fixture: ComponentFixture<ProfileSkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSkillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSkillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
