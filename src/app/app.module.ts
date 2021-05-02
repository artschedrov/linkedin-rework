import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ProfileInfoComponent } from './profile-page/profile-info/profile-info.component';
import { ProfileAboutComponent } from './profile-page/profile-about/profile-about.component';
import { ProfileProjectsComponent } from './profile-page/profile-projects/profile-projects.component';
import { ProfileSkillsComponent } from './profile-page/profile-skills/profile-skills.component';
import { ProfileExperienceComponent } from './profile-page/profile-experience/profile-experience.component';
import { ProfileEducationComponent } from './profile-page/profile-education/profile-education.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfilePageComponent,
    FeedPageComponent,
    NetworkPageComponent,
    JobsPageComponent,
    ChatPageComponent,
    ProfileInfoComponent,
    ProfileAboutComponent,
    ProfileProjectsComponent,
    ProfileSkillsComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
