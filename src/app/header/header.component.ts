import { Component, Input, OnInit } from '@angular/core';
import { SandwitchMenuComponent } from '../user/shared/components/sandwitch-menu/sandwitch-menu.component';
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
  links = ['/user/feed', '/user/network'];
  activeLink = this.links[0];
  @Input()
  profile!: Profile;
  constructor(private sandwitchMenu: SandwitchMenuComponent) {}

  openSandwitchMenu() {
    this.sandwitchMenu.switchMenu();
  }

  switchNavTab($event: any) {
    const tablinks = document.getElementsByClassName('menu__link') as HTMLCollectionOf<HTMLElement>;
    for (let  i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' menu__link--active', '');
    }
    $event.currentTarget.className += ' menu__link--active';
  }

  ngOnInit() {
  }
}
