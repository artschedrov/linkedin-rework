import { Injectable } from '@angular/core';
import { CHAT_LINK_LIST } from './mock-chat-links';
import { CHAT_ROOMS } from './mock-chat-rooms';

@Injectable({providedIn: 'root'})
export class ChatService {
  
  getChatList() {
    return Promise.resolve(CHAT_LINK_LIST);
  }

  getChatRooms() {
    return Promise.resolve(CHAT_ROOMS);
  }
}