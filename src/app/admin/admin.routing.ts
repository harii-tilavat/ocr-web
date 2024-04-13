import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_services';
import { AdminComponent } from './admin.component';
import { DocumentUploadComponent } from '../layout/components/document-upload/document-upload.component';
import { DocumentListComponent } from '../layout/components/document-list/document-list.component';
import { DocumentDetailComponent } from '../layout/components/document-list/document-detail/document-detail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { WalletComponent } from './user/wallet/wallet.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DocumentsBinComponent } from './user/documents-bin/documents-bin.component';
import { PricingComponent } from '../shared/pricing/pricing.component';
import { AdminAuthGuard } from '../_guard/adminAuth.guard';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { CreditListComponent } from './admin/credit-list/credit-list.component';
import { FeedbackListComponent } from './admin/feedback-list/feedback-list.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';
import { CsvToJsonComponent } from './user/csv-to-json/csv-to-json.component';
import { ReferalListComponent } from './admin/referal-list/referal-list.component';
import { CreatePdfComponent } from './user/create-pdf/create-pdf.component';

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
    path: 'a', component: AdminComponent, data: { title: 'OcrWeb Home Admin' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Admin Dashboard' }, }, // canActivate:[AuthGuard]
      { path: 'users-list', component: UsersListComponent },
      { path: 'contact-list', component: ContactListComponent },
      { path: 'feedback-list', component: FeedbackListComponent },
      { path: 'credit-list', component: CreditListComponent },
      { path: 'referal-list', component: ReferalListComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
    canActivate: [AdminAuthGuard]
  },
  {
    path: '', component: AdminComponent, data: { title: 'OcrWeb Home' },
    children: [
      { path: '', redirectTo: 'docs', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'docs', component: DocumentListComponent, data: { title: 'OcrWeb Documents' }, }, // canActivate:[AuthGuard]
      { path: 'docs/:id', component: DocumentDetailComponent, data: { title: 'OcrWeb Document details' }, },
      { path: 'upload', component: DocumentUploadComponent, data: { title: 'OcrWeb File upload' } },
      { path: 'csv-to-json', component: CsvToJsonComponent, data: { title: 'OcrWeb File CSV to JSON' } },
      { path: 'create-pdf', component: CreatePdfComponent, data: { title: 'OcrWeb File CSV to JSON' } },
      { path: 'profile', component: UserProfileComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: 'bin', component: DocumentsBinComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'pricing', component: PricingComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
