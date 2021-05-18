import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainLayoutComponent } from './public/components/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { SandwitchMenuComponent } from './user/shared/components/sandwitch-menu/sandwitch-menu.component';
import { UserLayoutComponent } from './user/shared/components/user-layout/user-layout.component';
import { AuthInterceptor } from './user/shared/services/auth.interceptor';
import { SidebarService } from './user/shared/services/sidebar.service';
import { ProfileSidebarComponent } from './user/sidebar/profile-sidebar/profile-sidebar.component';
import { RefDirective } from './user/sidebar/ref.directive';
import { UserModule } from './user/user.module';

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
    UserModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
  entryComponents: [ProfileSidebarComponent]
})
export class AppModule { }
