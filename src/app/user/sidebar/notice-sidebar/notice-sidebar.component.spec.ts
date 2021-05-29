import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeSidebarComponent } from './notice-sidebar.component';

describe('NoticeSidebarComponent', () => {
  let component: NoticeSidebarComponent;
  let fixture: ComponentFixture<NoticeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
