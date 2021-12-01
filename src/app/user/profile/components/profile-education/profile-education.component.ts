import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileEducation } from '../../shared/profile.model';
import { ProfileService } from '../../shared/profile.service';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.scss']
})
export class ProfileEducationComponent implements OnInit {
  
  educations$!: Observable<ProfileEducation[]>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.educations$ = this.profileService.getProfileEducation()
  }

}
