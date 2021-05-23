import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainLayoutComponent } from './public/components/main-layout/main-layout.component';
import { AuthGuard } from './user/shared/auth.guard';

const routes: Routes = [ 
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/user/profile', pathMatch: 'full'}
  ]
  },
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
