import { Component, OnInit } from '@angular/core';
import { JobsTrackedService } from './shared/jobsTracked.service';
import { trackedJobCard } from './shared/tracked-card.model';

@Component({
  selector: 'app-jobs-sidebar-tracked',
  templateUrl: './jobs-sidebar-tracked.component.html',
  styleUrls: ['./jobs-sidebar-tracked.component.scss']
})
export class JobsSidebarTrackedComponent implements OnInit {

  trackedsJobs: trackedJobCard[] = [];

  constructor(private jobsTrackedService: JobsTrackedService) { }

  ngOnInit(): void {

    this.jobsTrackedService.getJobTracked().then(trackedsJobs => this.trackedsJobs = trackedsJobs);
  }

}
