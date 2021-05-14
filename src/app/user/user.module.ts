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
import { ProfileProjectComponent } from './profile-page/profile-projects/profile-project/profile-project.component';
import { ProfileSkillCardComponent } from './profile-page/profile-skills/profile-skill-card/profile-skill-card.component';
import { ProfileExperienceCardComponent } from './profile-page/profile-experience/profile-experience-card/profile-experience-card.component';
import { ProfileEducationCardComponent } from './profile-page/profile-education/profile-education-card/profile-education-card.component';
import { ProfileSidebarComponent } from './sidebar/profile-sidebar/profile-sidebar.component';
import { RefDirective } from './sidebar/ref.directive';
import { ProfileSidebarVisitorsComponent } from './sidebar/profile-sidebar/profile-sidebar-visitors/profile-sidebar-visitors.component';
import { ProfileSidebarStatsComponent } from './sidebar/profile-sidebar/profile-sidebar-stats/profile-sidebar-stats.component';
import { ProfileSidebarRecomendationsComponent } from './sidebar/profile-sidebar/profile-sidebar-recomendations/profile-sidebar-recomendations.component';
import { VisitorCardComponent } from './sidebar/profile-sidebar/profile-sidebar-visitors/visitor-card/visitor-card.component';
import { RecomendationCardComponent } from './sidebar/profile-sidebar/profile-sidebar-recomendations/recomendation-card/recomendation-card.component';
import { FeedCreatePostComponent } from './feed-page/feed-create-post/feed-create-post.component';
import { FeedLastLikedPostsComponent } from './feed-page/feed-last-liked-posts/feed-last-liked-posts.component';
import { FeedTrendingCommentPostsComponent } from './feed-page/feed-trending-comment-posts/feed-trending-comment-posts.component';
import { FeedTrendingRatedPostsComponent } from './feed-page/feed-trending-rated-posts/feed-trending-rated-posts.component';
import { FeedTrendingFirstPostsComponent } from './feed-page/feed-trending-first-posts/feed-trending-first-posts.component';
import { PostCardComponent } from './feed-page/post-card/post-card.component';

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
    ProfileProjectComponent,
    ProfileSkillCardComponent,
    ProfileExperienceCardComponent,
    ProfileEducationCardComponent,
    ProfileSidebarComponent,
    RefDirective,
    ProfileSidebarVisitorsComponent,
    ProfileSidebarStatsComponent,
    ProfileSidebarRecomendationsComponent,
    VisitorCardComponent,
    RecomendationCardComponent,
    FeedCreatePostComponent,
    FeedLastLikedPostsComponent,
    FeedTrendingCommentPostsComponent,
    FeedTrendingRatedPostsComponent,
    FeedTrendingFirstPostsComponent,
    PostCardComponent
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
  providers: [AuthService, AuthGuard],
})
export class UserModule { }
