import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainLayoutComponent } from './public/components/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './user/shared/services/auth.interceptor';
import { ProfileSidebarComponent } from './user/sidebar/profile-sidebar/profile-sidebar.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvitationService } from './user/network-page/invitations/shared/invitations.service';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    BrowserAnimationsModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
  entryComponents: [ProfileSidebarComponent]
})
export class AppModule { }
