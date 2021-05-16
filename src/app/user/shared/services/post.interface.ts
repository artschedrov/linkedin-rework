export interface Post {
  avatar: any,
  author: string,
  profession: string,
  description: string,
  attachPic?: any,
  attachVideo?: any,
  attachFile?: any,
  commentCount: string,
  likesCount: string,
  likers: {
    name: string
  }
}