import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatRoom } from '../shared/chat.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @Input()
  chatRoom!: ChatRoom;
  messages: any;

  constructor() { }

  ngOnInit(): void {
    this.messages = this.chatRoom.messages;
  }

}
