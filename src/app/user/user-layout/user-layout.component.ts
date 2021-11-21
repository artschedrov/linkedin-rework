import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Profile, ProfileViews } from '../profile-page/shared/profile.model';
import { ProfileService } from '../profile-page/shared/profile.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  
  profiles: Profile[] = [];
  profilesViews$!: Observable<ProfileViews[]>;
  
  constructor(private router: Router,
    public auth: AuthService, private profilesService: ProfileService) { }

  ngOnInit(){
    //this.profiles$ = this.profilesService.getProfileInfo();
    this.profilesService.getProfileInfo().then(profiles => this.profiles = profiles);
  }

  logOut(event: Event) {
    event.preventDefault();
    this.auth.logOut();
    this.router.navigate(['/user', 'login']);
  }
}
