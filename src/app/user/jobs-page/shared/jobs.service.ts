import { Injectable } from '@angular/core';

import { JOBS, NEWJOBS } from './mock-jobs';

@Injectable() 

export class JobService {

  getJobs() {
    return Promise.resolve(JOBS);
  }

  getNewJobs() {
    return Promise.resolve(NEWJOBS);
  }
}