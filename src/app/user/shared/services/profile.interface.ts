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
  }
}

export interface ProfileViews {
  totalViews: number,
  newViews: number
}

export interface ProfileProject {
  id: number,
  name: string,
  type: string,
  date: string
}