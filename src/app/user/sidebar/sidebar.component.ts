import { Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { RefDirective } from './ref.directive';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild(RefDirective, { static: true }) refDir!: RefDirective;
  constructor(public resolver: ComponentFactoryResolver, private router: Router) { }
    
  ngOnInit() {
    console.log(this.router.url);
    const profileSidebarFactory = this.resolver.resolveComponentFactory(ProfileSidebarComponent);
    
    if (this.router.url === '/user/profile') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(profileSidebarFactory);
    }
  }
}
