import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services';

const routes: Routes = [
  // { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import("./login/auth.module").then(m => m.AuthModule) },
  { path: 'user', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }, //
  { path: '**', redirectTo: '', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
