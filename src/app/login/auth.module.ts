import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../_services';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { title: 'Ocrweb login' } },
      { path: 'signup', component: SignupComponent, data: { title: 'Ocrweb signup' } },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Ocrweb signup' } },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService]
})
export class AuthModule { }
