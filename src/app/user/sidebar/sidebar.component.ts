import { Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FeedSidebarComponent } from './feed-sidebar/feed-sidebar.component';
import { NetworkSidebarComponent } from './network-sidebar/network-sidebar.component';
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
    const profileSidebarFactory = this.resolver.resolveComponentFactory(ProfileSidebarComponent);
    const feedSidebarFactory = this.resolver.resolveComponentFactory(FeedSidebarComponent);
    const networkSidebarFactory = this.resolver.resolveComponentFactory(NetworkSidebarComponent);
    
    if (this.router.url === '/user/profile') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(profileSidebarFactory);
    }
    if (this.router.url === '/user/feed') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(feedSidebarFactory);
    }
    if (this.router.url ==='/user/network') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(networkSidebarFactory);
    }
  }
}
