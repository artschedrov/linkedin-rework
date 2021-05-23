import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSidebarSearchesComponent } from './jobs-sidebar-searches.component';

describe('JobsSidebarSearchesComponent', () => {
  let component: JobsSidebarSearchesComponent;
  let fixture: ComponentFixture<JobsSidebarSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsSidebarSearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsSidebarSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
