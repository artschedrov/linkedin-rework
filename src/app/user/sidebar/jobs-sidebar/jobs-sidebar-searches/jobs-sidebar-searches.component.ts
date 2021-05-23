import { Component, OnInit } from '@angular/core';
import { JobsSearchesService } from './shared/jobsSearches.service'
import { searchJobCard } from './shared/search-card.model';

@Component({
  selector: 'app-jobs-sidebar-searches',
  templateUrl: './jobs-sidebar-searches.component.html',
  styleUrls: ['./jobs-sidebar-searches.component.scss']
})
export class JobsSidebarSearchesComponent implements OnInit {

  searchesJobs: searchJobCard[] = [];

  constructor(private jobsSearchService: JobsSearchesService) { }

  ngOnInit(): void {
    this.jobsSearchService.getJobSearches().then(searchesJobs => this.searchesJobs = searchesJobs);
  }
}
