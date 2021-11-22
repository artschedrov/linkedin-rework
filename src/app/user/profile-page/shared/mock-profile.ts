import { Profile, ProfileProject } from "./profile.model";

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

export const PROFILE_PROJECTS: ProfileProject[] = [
  {
    id: 1234,
    name: 'Zara redesign concept',
    type: 'UX/UI design',
    date: '15.07.2019',
    preview: 'assets/img/project1.png' 
  },
  {
    id: 12332,
    name: 'SCTHON event brand identity',
    type: 'UX/UI design',
    date: '03.31.2019',
    preview: 'assets/img/project2.png'
  },
  {
    id: 1234,
    name: 'Drozd. Brand identity',
    type: 'Graphic design',
    date: '15.07.2019',
    preview: 'assets/img/project3.png'
  }
]