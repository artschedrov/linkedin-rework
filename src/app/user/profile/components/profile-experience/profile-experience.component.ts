import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileExperience } from '../../shared/profile.model';
import { ProfileService } from '../../shared/profile.service';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileExperienceComponent implements OnInit {

  experiences$!: Observable<ProfileExperience[]>

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.experiences$ = this.profileService.getProfileExperience();
  }

}
