import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwitchMenuComponent } from './sandwitch-menu.component';

describe('SandwitchMenuComponent', () => {
  let component: SandwitchMenuComponent;
  let fixture: ComponentFixture<SandwitchMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwitchMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwitchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
