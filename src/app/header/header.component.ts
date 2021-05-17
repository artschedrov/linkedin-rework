import { Component, Input, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../user/shared/components/user-layout/user-layout.component';
import { Profile, ProfileViews } from '../user/shared/services/profile.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  user = {
    firstName: 'Sara',
    lastName: 'Black',
    email: '',
    avatar: '../../assets/user.jpeg',
    newViews: 32,
    totalViews: 324,
  }
  @Input()
  profile!: Profile;
  constructor(private userLayout: UserLayoutComponent) {}

  openSandwitchMenu() {
    this.userLayout.switchMenu();
  }

  ngOnInit() {
  }
}
