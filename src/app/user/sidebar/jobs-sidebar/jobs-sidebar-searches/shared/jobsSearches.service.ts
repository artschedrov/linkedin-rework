import { Injectable } from '@angular/core';

import { JOB_SEARCHES } from './mock-jobsSearches';

@Injectable({providedIn: 'root'})

export class JobsSearchesService {
  getJobSearches() {
    return Promise.resolve(JOB_SEARCHES);
  }
}