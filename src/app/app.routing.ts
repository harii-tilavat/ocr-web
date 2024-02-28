import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }, // canActivate: [AuthGuard]
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
