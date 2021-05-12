import {ComponentFactoryResolver, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProfileSidebarComponent } from '../../sidebar/profile-sidebar/profile-sidebar.component';
import { RefDirective } from '../../sidebar/ref.directive';

@Injectable({providedIn: 'root'})

export class SidebarService {
  refDir!: RefDirective;
  constructor(public resolver: ComponentFactoryResolver) {

  }
}