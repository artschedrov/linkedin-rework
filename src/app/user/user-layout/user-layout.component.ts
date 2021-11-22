import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile, ProfileViews } from '../profile-page/shared/profile.model';
import { ProfileService } from '../profile-page/shared/profile.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  
  profiles: Profile[] = [];
  //profilesViews$!: Observable<ProfileViews[]>;
  
  constructor(private profilesService: ProfileService) { }

  ngOnInit(){
    this.profilesService.getProfileInfo().then(profiles => this.profiles = profiles);
  }
}
