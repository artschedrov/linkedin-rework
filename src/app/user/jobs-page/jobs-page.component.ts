import { Component, OnInit } from '@angular/core';
import { Job } from './shared/jobs.model';
import { JobService } from './shared/jobs.service';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class JobsPageComponent implements OnInit {

  jobs: Job[] = [];
  newJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().then(jobs => this.jobs = jobs);
    this.jobService.getNewJobs().then(newJobs => this.newJobs = newJobs);
  }
}
