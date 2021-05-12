import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  openDropdown() {
    const selectBlock = document.querySelector('.footer__menu-lang__select');
    selectBlock?.classList.toggle('open');
  }

  changeOption() {
    const options = document.querySelectorAll('.footer__menu-lang__option');
    //const selected = document.querySelector('.footer__menu-lang__option.selected');
    for (let i = 0; i < options.length; i++) {
      if(!options[i].classList.contains('selected')) {
        options[i].parentNode!.querySelector('.footer__menu-lang__option.selected')!.classList.remove('selected');
        options[i].classList.add('selected');
        //options[i].closest('.footer__menu-lang__select')!.querySelector('.footer__menu-lang__select__trigger span')!.textContent = options[i].textContent;
      }
    }

  }


  ngOnInit(): void {
    window.addEventListener('click', function (e) {
      const selects = document.querySelectorAll('.footer__menu-lang__select')
      for (let i = 0; i < selects.length; i++) {
        if (!selects[i].contains(e.target as Node)) {
            selects[i].classList.remove('open');
        }
      }
    });
  }
}
