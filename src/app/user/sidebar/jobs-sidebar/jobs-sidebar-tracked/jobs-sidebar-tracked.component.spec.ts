import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSidebarTrackedComponent } from './jobs-sidebar-tracked.component';

describe('JobsSidebarTrackedComponent', () => {
  let component: JobsSidebarTrackedComponent;
  let fixture: ComponentFixture<JobsSidebarTrackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsSidebarTrackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsSidebarTrackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
