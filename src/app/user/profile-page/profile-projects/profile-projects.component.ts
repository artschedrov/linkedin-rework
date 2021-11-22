import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Profile, ProfileProject } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.scss']
})
export class ProfileProjectsComponent implements OnInit {
  projects: ProfileProject[] = [];
  @Input()
  profile!: Profile;
  constructor(private profilesService: ProfileService) { }

  ngOnInit(): void {
    this.profilesService.getProfileProjects().then(projects => this.projects = projects);
  }

}
