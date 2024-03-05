import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate:[AuthGuard]}, //
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
