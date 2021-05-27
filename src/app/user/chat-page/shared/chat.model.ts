export interface ChatLink {
  id: string,
  name: string,
  userPic: any,
  online: boolean,
  lastMessage?: string,
}

export interface ChatRoom {
  id: string
  messages?: [
    { id: string,
      text: string
    }
  ]
}