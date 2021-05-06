import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  user = {
    firstName: 'Sara',
    lastName: 'Black',
    email: '',
    avatar: '../../assets/user.jpeg',
    infoPic: '../../assets/img/profile-info-pic.png',
    location: 'Saint Petersburg, Russian Federation',
    description: 'Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.',
    userLogo: '../../assets/icons/userlogo.svg',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
