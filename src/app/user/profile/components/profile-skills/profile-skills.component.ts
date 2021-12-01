import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSkills } from '../../shared/profile.model';
import { ProfileService } from '../../shared/profile.service';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.scss']
})
export class ProfileSkillsComponent implements OnInit {

  skills: ProfileSkills[] = [];

  constructor(private profilesService: ProfileService) { }

  ngOnInit(): void {
    this.profilesService.getProfileSkills().then(skills => this.skills = skills);
  }
}