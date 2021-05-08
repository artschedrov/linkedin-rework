import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProfileProject } from '../../shared/services/profile.interface';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.scss']
})
export class ProfileProjectsComponent implements OnInit {
  projects$!: Observable<ProfileProject[]>;
  constructor(private profilesService: ProfileService) { }

  ngOnInit(): void {
    this.projects$ = this.profilesService.getProfileProjects();
  }

}
