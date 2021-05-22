export interface Post {
  avatar: any,
  author: string,
  profession: string,
  description: string,
  attachPic?: any,
  attachVideo?: any,
  attachFile?: {
    name: string,
    type: any,
    size: string
  },
  commentCount: string,
  likesCount: string,
  likers: {
    name: string
  }
}