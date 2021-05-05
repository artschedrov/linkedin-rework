import { Component, OnInit } from '@angular/core';


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

  constructor() {}

  ngOnInit() {
  }
}
