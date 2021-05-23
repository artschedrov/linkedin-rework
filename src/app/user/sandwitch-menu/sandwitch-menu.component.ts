import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandwitch-menu',
  templateUrl: './sandwitch-menu.component.html',
  styleUrls: ['./sandwitch-menu.component.scss']
})
export class SandwitchMenuComponent implements OnInit {

  constructor() { }  

  ngOnInit(): void {
  }

  public switchMenu() {
    const sandwitchMenu = document.getElementById('header-sandwitch');
    sandwitchMenu!.classList.toggle('other--active');
    this.switchBlur();
    this.lockBodyScroll();
  }

  public switchBlur() {
    const header = document.getElementsByClassName('header__layout')[0] as HTMLElement;
    const main = document.getElementsByClassName('main__layout')[0] as HTMLElement;
    const footer = document.getElementsByClassName('footer__layout')[0] as HTMLElement;

    header.classList.toggle('blur');
    main.classList.toggle('blur');
    footer.classList.toggle('blur');
  }

  public lockBodyScroll() {
    const currentBody = document.getElementsByClassName('body')[0] as HTMLElement;
    currentBody.classList.toggle('body--lock');
  }
}
