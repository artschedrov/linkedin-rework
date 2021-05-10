import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Profile, ProfileProject } from '../../shared/services/profile.interface';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile-projects',
  templateUrl: './profile-projects.component.html',
  styleUrls: ['./profile-projects.component.scss']
})
export class ProfileProjectsComponent implements OnInit {
  projects$!: Observable<ProfileProject[]>;
  @Input()
  profile!: Profile;
  constructor(private profilesService: ProfileService) { }

  ngOnInit(): void {
    this.projects$ = this.profilesService.getProfileProjects();
  }

}
