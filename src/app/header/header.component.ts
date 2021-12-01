import { Component, Input, OnInit } from '@angular/core';
import { SandwitchMenuComponent } from '../user/sandwitch-menu/sandwitch-menu.component';
import { Profile } from '../user/profile/shared/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
