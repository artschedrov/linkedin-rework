export interface Profile {
  id: number,
  firstName: string,
  lastName: string,
  location: string,
  description: string,
  about: string,
  avatar: any,
  infoPic: any,
  userLogo: any
  views: {
    totalViews: number,
    newViews: number
  },
  projectCount: number
}

export interface ProfileViews {
  totalViews: number,
  newViews: number
}

export interface ProfileProject {
  id: number,
  name: string,
  type: string,
  date: string,
  preview: any
}

export interface ProfileSkills {
  name: string,
  id: string
  endoresment: {
    name: string,
    id: string,
    pic: any
  }  
}

export interface ProfileExperience {
  title: string,
  description: string,
  type: string,
  startDate: string,
  endDate: string,
  pic: any
}

export interface ProfileEducation {
  title: string,
  description: string,
  extra: string,
  startDate: string,
  endDate: string,
  pic: any
}

export interface ProfileSidebarViews {
  views: {
    postViews: string,
    searchApearance: string,
    today: string
  }
}

export interface ProfileSidebarRecomended {
  name: string,
  pic: any,
  views: string
}

export interface ProfileSidebarVisitors {
  description: string,
  name: string,
  pic: any
}