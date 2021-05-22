import { Component, Input, OnInit } from '@angular/core';
import { ProfileSidebarVisitors } from 'src/app/user/shared/interfaces/profile.interface';

@Component({
  selector: 'app-visitor-card',
  templateUrl: './visitor-card.component.html',
  styleUrls: ['./visitor-card.component.scss']
})
export class VisitorCardComponent implements OnInit {
  
  @Input()
  visitor!: ProfileSidebarVisitors;
  
  constructor() { }

  ngOnInit(): void {
  }

}
