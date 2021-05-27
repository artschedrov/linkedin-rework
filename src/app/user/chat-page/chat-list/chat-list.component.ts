import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar/shared/sidebar.service';
import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chatLinks: any;

  constructor(private chatService: ChatService, private sidebarService: SidebarService) { }

  switchChatLink($event: any, tabName: any) {
    this.sidebarService.changeTab($event, tabName);
  }

  ngOnInit(): void {
    this.chatService.getChatList().then(chatLinks => this.chatLinks = chatLinks);
  }
}
