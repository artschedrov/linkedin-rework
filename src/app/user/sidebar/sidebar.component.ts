import { Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ChatListComponent } from '../chat-page/chat-list/chat-list.component';
import { NavigationPanelComponent } from '../navigation-panel/navigation-panel.component';
import { FeedSidebarComponent } from './feed-sidebar/feed-sidebar.component';
import { JobsSidebarComponent } from './jobs-sidebar/jobs-sidebar.component';
import { NoticeSidebarComponent } from './notice-sidebar/notice-sidebar.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { RefDirective } from './shared/ref.directive';

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
    const navigationSidebarFactory = this.resolver.resolveComponentFactory(NavigationPanelComponent);
    const jobsSidebarFactory = this.resolver.resolveComponentFactory(JobsSidebarComponent);
    const chatsSidebarFactory = this.resolver.resolveComponentFactory(ChatListComponent);
    const noticeSidebarFactory = this.resolver.resolveComponentFactory(NoticeSidebarComponent);
    
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
      this.refDir.containerRef.createComponent(navigationSidebarFactory);
    }
    if (this.router.url === '/user/jobs') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(jobsSidebarFactory);
    }
    if (this.router.url === '/user/chat') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(chatsSidebarFactory);
    }
    if (this.router.url === '/user/notice') {
      this.refDir.containerRef.clear();
      this.refDir.containerRef.createComponent(noticeSidebarFactory);
    }
  }
}
