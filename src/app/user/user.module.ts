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
import { PostCardLikesComponent } from './feed-page/post-card/post-card-likes/post-card-likes.component';
import { PostCardCommentThisComponent } from './feed-page/post-card/post-card-comment-this/post-card-comment-this.component';
import { PostCardHighratedPostComponent } from './feed-page/post-card/post-card-highrated-post/post-card-highrated-post.component';
import { PostCardFirstCommentComponent } from './feed-page/post-card/post-card-first-comment/post-card-first-comment.component';
import { RefPostDirective } from './feed-page/post-card/refPost.directive';
import { PostCardFirstPostComponent } from './feed-page/post-card/post-card-first-post/post-card-first-post.component';
import { FeedSidebarComponent } from './sidebar/feed-sidebar/feed-sidebar.component';
import { FeedSidebarUserinfoComponent } from './sidebar/feed-sidebar/feed-sidebar-userinfo/feed-sidebar-userinfo.component';
import { FeedSidebarMygroupsComponent } from './sidebar/feed-sidebar/feed-sidebar-mygroups/feed-sidebar-mygroups.component';
import { FeedSidebarHashtagsComponent } from './sidebar/feed-sidebar/feed-sidebar-hashtags/feed-sidebar-hashtags.component';
import { FeedSidebarArticlesComponent } from './sidebar/feed-sidebar/feed-sidebar-articles/feed-sidebar-articles.component';
import { GroupCardComponent } from './sidebar/feed-sidebar/feed-sidebar-mygroups/group-card/group-card.component';
import { ArticleCardComponent } from './sidebar/feed-sidebar/feed-sidebar-articles/article-card/article-card.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { NetworkSidebarComponent } from './sidebar/network-sidebar/network-sidebar.component';
import { SandwitchMenuComponent } from './shared/components/sandwitch-menu/sandwitch-menu.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { NoticePageComponent } from './notice-page/notice-page.component';
import { MaterialModule } from '../material/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ConnectionsComponent } from './network-page/connections/connections.component';
import { InvitationsComponent } from './network-page/invitations/invitations.component';
import { TeammatesComponent } from './network-page/teammates/teammates.component';
import { GroupsComponent } from './network-page/groups/groups.component';
import { PagesComponent } from './network-page/pages/pages.component';
import { HashtagsComponent } from './network-page/hashtags/hashtags.component';
import { NavigationPanelComponent } from './shared/components/navigation-panel/navigation-panel.component';

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
    PostCardComponent,
    PostCardLikesComponent,
    PostCardCommentThisComponent,
    PostCardHighratedPostComponent,
    PostCardFirstCommentComponent,
    RefPostDirective,
    PostCardFirstPostComponent,
    FeedSidebarComponent,
    FeedSidebarUserinfoComponent,
    FeedSidebarMygroupsComponent,
    FeedSidebarHashtagsComponent,
    FeedSidebarArticlesComponent,
    GroupCardComponent,
    ArticleCardComponent,
    NetworkPageComponent,
    NetworkSidebarComponent,
    SandwitchMenuComponent,
    JobsPageComponent,
    ChatPageComponent,
    NoticePageComponent,
    ConnectionsComponent,
    InvitationsComponent,
    TeammatesComponent,
    GroupsComponent,
    PagesComponent,
    HashtagsComponent,
    NavigationPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: UserLayoutComponent, children: [
          {path: '', redirectTo: '/user/profile', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
          {path: 'feed', component: FeedPageComponent, canActivate: [AuthGuard]},
          {path: 'network', component: NetworkPageComponent, canActivate: [AuthGuard]},
          {path: 'jobs', component: JobsPageComponent, canActivate: [AuthGuard]},
          {path: 'chat', component: ChatPageComponent, canActivate: [AuthGuard]},
          {path: 'notice', component: NoticePageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, AuthGuard, SandwitchMenuComponent],
})
export class UserModule { }
