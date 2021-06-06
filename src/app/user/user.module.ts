import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanActivate, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { ProfileInfoComponent } from './profile-page/profile-info/profile-info.component';
import { ProfileAboutComponent } from './profile-page/profile-about/profile-about.component';
import { ProfileEducationComponent } from './profile-page/profile-education/profile-education.component';
import { ProfileExperienceComponent } from './profile-page/profile-experience/profile-experience.component';
import { ProfileProjectsComponent } from './profile-page/profile-projects/profile-projects.component';
import { ProfileSkillsComponent } from './profile-page/profile-skills/profile-skills.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from './shared/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/auth.guard';
import { ProfileProjectComponent } from './profile-page/profile-projects/profile-project/profile-project.component';
import { ProfileSkillCardComponent } from './profile-page/profile-skills/profile-skill-card/profile-skill-card.component';
import { ProfileExperienceCardComponent } from './profile-page/profile-experience/profile-experience-card/profile-experience-card.component';
import { ProfileEducationCardComponent } from './profile-page/profile-education/profile-education-card/profile-education-card.component';
import { ProfileSidebarComponent } from './sidebar/profile-sidebar/profile-sidebar.component';
import { RefDirective } from './sidebar/shared/ref.directive';
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
import { SandwitchMenuComponent } from './sandwitch-menu/sandwitch-menu.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { NoticePageComponent } from './notice-page/notice-page.component';
import { MaterialModule } from '../material/material.module';
import { ConnectionsComponent } from './network-page/connections/connections.component';
import { InvitationsComponent } from './network-page/invitations/invitations.component';
import { TeammatesComponent } from './network-page/teammates/teammates.component';
import { GroupsComponent } from './network-page/groups/groups.component';
import { PagesComponent } from './network-page/pages/pages.component';
import { HashtagsComponent } from './network-page/hashtags/hashtags.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { InvitationService } from './network-page/invitations/shared/invitations.service';
import { JobsSidebarComponent } from './sidebar/jobs-sidebar/jobs-sidebar.component';
import { JobsSearchComponent } from './jobs-page/jobs-search/jobs-search.component';
import { JobService } from './jobs-page/shared/jobs.service';
import { JobsSidebarSearchesComponent } from './sidebar/jobs-sidebar/jobs-sidebar-searches/jobs-sidebar-searches.component';
import { JobsSidebarTrackedComponent } from './sidebar/jobs-sidebar/jobs-sidebar-tracked/jobs-sidebar-tracked.component';
import { ArticlesForUserComponent } from './sidebar/jobs-sidebar/articles-for-user/articles-for-user.component';
import { JobsSearchesService } from './sidebar/jobs-sidebar/jobs-sidebar-searches/shared/jobsSearches.service';
import { JobsTrackedService } from './sidebar/jobs-sidebar/jobs-sidebar-tracked/shared/jobsTracked.service';
import { ArticleForUserService } from './sidebar/jobs-sidebar/articles-for-user/shared/articleForUser.service';
import { ChatListComponent } from './chat-page/chat-list/chat-list.component';
import { ChatRoomComponent } from './chat-page/chat-room/chat-room.component';
import { CreateMessageComponent } from './chat-page/create-message/create-message.component';
import { NoticeSidebarComponent } from './sidebar/notice-sidebar/notice-sidebar.component';
import { NoticeNavigationComponent } from './notice-page/notice-navigation/notice-navigation.component';

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
    NavigationPanelComponent,
    JobsSidebarComponent,
    JobsSearchComponent,
    JobsSidebarSearchesComponent,
    JobsSidebarTrackedComponent,
    ArticlesForUserComponent,
    ChatListComponent,
    ChatRoomComponent,
    CreateMessageComponent,
    NoticeSidebarComponent,
    NoticeNavigationComponent,
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
          // {path: 'login', component: LoginPageComponent},
          {path: 'profile', component: ProfilePageComponent},
          {path: 'feed', component: FeedPageComponent},
          {path: 'network', component: NetworkPageComponent},
          {path: 'jobs', component: JobsPageComponent},
          {path: 'chat', component: ChatPageComponent},
          {path: 'notice', component: NoticePageComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    SandwitchMenuComponent, 
    InvitationService
  ],
})
export class UserModule { }
