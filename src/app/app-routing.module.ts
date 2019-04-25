import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsSignedInGuard } from './core/guards/is-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [IsSignedInGuard]
  },
  {
    path: 'notifications',
    loadChildren: './modules/notifications/notifications.module#NotificationsModule',
    canActivate: [IsSignedInGuard]
  },
  {
    path: 'profile',
    loadChildren: './modules/profile/profile.module#ProfileModule',
    canActivate: [IsSignedInGuard]
  },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule',
    canActivate: [IsSignedInGuard]
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
