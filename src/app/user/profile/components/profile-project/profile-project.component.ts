import { Component, Input, OnInit } from '@angular/core';
import { ProfileProject } from 'src/app/user/profile/shared/profile.model';
import { ProfileService } from 'src/app/user/profile/shared/profile.service';

@Component({
  selector: 'app-profile-project',
  templateUrl: './profile-project.component.html',
  styleUrls: ['./profile-project.component.scss']
})
export class ProfileProjectComponent implements OnInit {
  @Input()
  project!: ProfileProject;
  constructor() { }

  ngOnInit(): void {
  }

}
