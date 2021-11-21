import { Profile } from "./profile.model";

export const PROFILE: Profile[] = [
  {
    id: 1,
    firstName: 'Sara',
    lastName: 'Black',
    location: 'Saint Petersburg, Russian Federation',
    description: 'Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.',
    about: 'Im more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.',
    avatar: '../../assets/user.jpeg',
    infoPic: '../../assets/img/profile-info-pic.png',
    userLogo: '../../assets/icons/userlogo.svg',
    views: {
      totalViews: 367,
      newViews: 24
    },
    projectCount: 12
  }
]