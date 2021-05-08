import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanActivate, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { ProfileInfoComponent } from './profile-page/profile-info/profile-info.component';
import { ProfileAboutComponent } from './profile-page/profile-about/profile-about.component';
import { ProfileEducationComponent } from './profile-page/profile-education/profile-education.component';
import { ProfileExperienceComponent } from './profile-page/profile-experience/profile-experience.component';
import { ProfileProjectsComponent } from './profile-page/profile-projects/profile-projects.component';
import { ProfileSkillsComponent } from './profile-page/profile-skills/profile-skills.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/services/auth.guard';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ProfileProjectComponent } from './profile-page/profile-projects/profile-project/profile-project.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserLayoutComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ProfileInfoComponent,
    ProfileAboutComponent,
    ProfileEducationComponent,
    ProfileExperienceComponent,
    ProfileProjectsComponent,
    ProfileSkillsComponent,
    SidebarComponent,
    FeedPageComponent,
    ProfileProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: UserLayoutComponent, children: [
          {path: '', redirectTo: '/user/profile', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
          {path: 'feed', component: FeedPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, AuthGuard]
})
export class UserModule { }
