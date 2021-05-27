import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatRoom } from './shared/chat.model';
import { ChatService } from './shared/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  chatRooms!: any;

  ngOnInit(): void {
    this.chatService.getChatRooms().then(chatRooms => this.chatRooms = chatRooms);
  }
}
