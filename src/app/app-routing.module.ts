import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'feed', component: FeedPageComponent},
  {path: 'network', component: NetworkPageComponent},
  {path: 'jobs', component: JobsPageComponent},
  {path: 'chat', component: ChatPageComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
