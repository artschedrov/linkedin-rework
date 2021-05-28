import { ChatRoom } from './chat.model';

export const CHAT_ROOMS: ChatRoom[] = [
  {
    id: '111',
    companion: 'Darlene Black',
    messages: [
      {
        id: '23444',
        author: 'Darlene Black',
        userPic: '../../../../assets/img/PhotoV1.png',
        text: 'Hello',
        time: '4:49 PM',
        currentUser: false
      },
      {
        id: '23445',
        author: 'Sara Black',
        userPic: '../../../../assets/user.jpeg',
        text: 'Hi. How are you doing? Did you get that job yesterday?',
        time: '6:49 PM',
        currentUser: true
      },
      {
        id: '34445',
        author: 'Darlene Black',
        userPic: '../../../../assets/img/PhotoV1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        currentUser: false
      },
      {
        id: '34445',
        author: 'Darlene Black',
        userPic: '../../../../assets/img/PhotoV1.png',
        text: 'Lorem ipsum dolor sit amet.',
        currentUser: false
      }
    ]
  },
  {
    id: '222',
    companion: 'Theresa Steward',
    messages: [
      {
        id: '23445',
        author: 'Sara Black',
        userPic: '../../../../assets/user.jpeg',
        text: 'Hi. How are you doing? Did you get that job yesterday?',
        time: '6:49 PM',
        currentUser: true
      }
    ]
  },
  {
    id: '333',
    companion: 'Brandon Wilson',
  },
  {
    id: '444',
    companion: 'Kyle Fisher',
  },
  {
    id: '555',
    companion: 'Audrey Alexander',
  }
]