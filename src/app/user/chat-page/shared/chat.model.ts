export interface ChatLink {
  id: string,
  name: string,
  userPic: any,
  online: boolean,
  lastMessage?: string,
}

export interface ChatRoom {
  id: string,
  companion: string,
  messages?: any
}