import { Injectable } from '@angular/core';

import { INVITATIONS, RECENTS } from './mock-invitations';

@Injectable()
export class InvitationService {

  getInvitations() {
    return Promise.resolve(INVITATIONS);
  }

  getRecent() {
    return Promise.resolve(RECENTS);
  }
}
