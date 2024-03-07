import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_services';
import { AdminComponent } from './admin.component';
import { DocumentUploadComponent } from '../layout/components/document-upload/document-upload.component';
import { DocumentListComponent } from '../layout/components/document-list/document-list.component';
import { DocumentDetailComponent } from '../layout/components/document-list/document-detail/document-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { WalletComponent } from './wallet/wallet.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DocumentsBinComponent } from './documents-bin/documents-bin.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent, data: { title: 'Get Curious Home' } },
//   { path: 'product', component: ProductComponent, data: { title: 'Product Home' } },
//   { path: 'pricing', component: PricingComponent, data: { title: 'Pricing Home' } },
//   { path: 'teams/:id', component: TeamsComponent, data: { title: 'Teams Home' } },
//   { path: 'about', component: AboutComponent, data: { title: 'About Home' } },
//   { path: 'contact', component: ContactComponent, data: { title: 'Contact Home' } },
//   { path: 'resources', component: ResourceComponent, data: { title: 'Resource Home' } },
//   { path: 'resources/:id', component: ResourceDetailsComponent, data: { title: 'Resource Details' } },
//   { path: 'blog', component: BlogComponent, data: { title: 'Blog Home' } },
//   { path: 'blog/:id', component: BlogDetailsComponent, data: { title: 'Blog Details' } },
//   { path: 'terms/:id', component: PrivacyPolicyComponent, data: { title: 'Privacy Policy' } },
//   { path: '', redirectTo: '', pathMatch: 'full' },
//   { path: '**', redirectTo: '', pathMatch: 'full' }
// ];

const routes: Routes = [
  {
    path: '', component: AdminComponent, data: { title: 'OcrWeb Home' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: 'bin', component: DocumentsBinComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'upload', component: DocumentUploadComponent, data: { title: 'OcrWeb File upload' } },
      { path: 'docs', component: DocumentListComponent, data: { title: 'OcrWeb Documents' }, }, // canActivate:[AuthGuard]
      { path: 'docs/:id', component: DocumentDetailComponent, data: { title: 'OcrWeb Document details' }, },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
