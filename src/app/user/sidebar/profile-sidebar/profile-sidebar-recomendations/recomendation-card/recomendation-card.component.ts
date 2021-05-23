import { Component, Input, OnInit } from '@angular/core';
import { ProfileSidebarRecomended } from 'src/app/user/profile-page/shared/profile.model';

@Component({
  selector: 'app-recomendation-card',
  templateUrl: './recomendation-card.component.html',
  styleUrls: ['./recomendation-card.component.scss']
})
export class RecomendationCardComponent implements OnInit {

  @Input()
  recomendation!: ProfileSidebarRecomended;

  constructor() { }

  ngOnInit(): void {
  }
}
