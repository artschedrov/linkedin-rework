import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Profile, ProfileViews } from '../../services/profile.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  profiles$!: Observable<Profile[]>;
  profilesViews$!: Observable<ProfileViews[]>;
  constructor(private router: Router,
    public auth: AuthService, private profilesService: ProfileService) { }

  ngOnInit(){
    this.profiles$ = this.profilesService.getProfileInfo();
  }

  logOut(event: Event) {
    event.preventDefault();
    this.auth.logOut();
    this.router.navigate(['/user', 'login']);
  }

}
