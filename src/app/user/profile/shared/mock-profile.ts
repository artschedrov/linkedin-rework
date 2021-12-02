import { Profile, ProfileExperience, ProfileProject, ProfileSkills } from "./profile.model";

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

export const PROFILE_SKILLS: ProfileSkills[] = [
  {
    name: 'User experience (UX)',
    id: '123',
    endoresment: [{
      name: '1',
      id: '123',
      pic: '../../../../../assets/img/Photo1.png'
    },
    {
      name: '2',
      id: '123',
      pic: '../../../../../assets/img/Photo2.png'
    },
    {
      name: '3',
      id: '123',
      pic: '../../../../../assets/img/Photo3.png'
    },
    {
      name: '4',
      id: '123',
      pic: '../../../../../assets/img/Photo4.png'
    }]
  },
  {
    name: 'User experience (UX)',
    id: '123',
    endoresment: [{
      name: '1',
      id: '123',
      pic: '../../../../../assets/img/Photo1.png'
    }]
  },
  {
    name: 'User experience (UX)',
    id: '123',
    endoresment: [{
      name: '1',
      id: '123',
      pic: '../../../../../assets/img/Photo1.png'
    },
    {
      name: '4',
      id: '123',
      pic: '../../../../../assets/img/Photo4.png'
    }]
  }
]

export const PROFILE_EXPERIENCE: ProfileExperience[] = [
  {
    title: 'Freelance UX/UI designer',
    description: 'Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes',
    type: 'Self Employed',
    startDate: 'Jun 2016',
    endDate: 'Present',
    pic: '../../../../../assets/img/GroupExp1.png'
  },
  {
    title: 'UX/UI designer',
    description: 'New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.',
    type: 'Upwork',
    startDate: 'Jun 2019',
    endDate: 'Present',
    pic: '../../../../../assets/img/GroupExp2.png'
  }
]