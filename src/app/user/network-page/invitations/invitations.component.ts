import { Component, OnInit } from '@angular/core';
import { Invitation } from './shared/invitations.model';
import { InvitationService } from './shared/invitations.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  invitations: Invitation[] = [];
  recents: Invitation[] = [];

  constructor(private invitationService: InvitationService) {}

  ngOnInit(): void {
    this.invitationService.getInvitations()
    .then(invitations => this.invitations = invitations);

    this.invitationService.getRecent()
    .then(recents => this.recents = recents);
  }
}
