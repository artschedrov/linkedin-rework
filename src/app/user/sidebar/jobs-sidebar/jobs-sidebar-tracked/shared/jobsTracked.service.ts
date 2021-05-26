import { Injectable } from '@angular/core';
import { TRACKEDJOB } from './mock-trackedJobs';

@Injectable({providedIn: 'root'})
export class JobsTrackedService {
  getJobTracked() {
    return Promise.resolve(TRACKEDJOB);
  }
}