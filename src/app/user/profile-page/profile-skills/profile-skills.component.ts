import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileSkills } from '../../shared/interfaces/profile.interface';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.scss']
})
export class ProfileSkillsComponent implements OnInit {

  skills$!: Observable<ProfileSkills[]>;

  constructor(private profilesService: ProfileService) { }

  ngOnInit(): void {
    this.skills$ = this.profilesService.getProfileSkills();
  }
}