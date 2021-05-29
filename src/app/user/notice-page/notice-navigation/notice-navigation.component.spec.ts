import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeNavigationComponent } from './notice-navigation.component';

describe('NoticeNavigationComponent', () => {
  let component: NoticeNavigationComponent;
  let fixture: ComponentFixture<NoticeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
