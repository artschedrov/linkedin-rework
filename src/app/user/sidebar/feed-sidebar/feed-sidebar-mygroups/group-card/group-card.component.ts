import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/user/sidebar/feed-sidebar/feed-sidebar-articles/shared/group.model';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {
  
  @Input()
  group!: Group;

  constructor() { }

  ngOnInit(): void {
  }
}
