import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { LayoutComponent } from './layout.component';
import { FileUploadComponent } from '../shared/ocr-components/file-upload/file-upload.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentDetailComponent } from './components/document-list/document-detail/document-detail.component';

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
    path: '', component: LayoutComponent, data: { title: 'OcrWeb Home' },
    children: [
      { path: '', component: HomeComponent },
      { path: 'upload', component: DocumentUploadComponent, data: { title: 'OcrWeb File upload' } },
      { path: 'docs', component: DocumentListComponent, data: { title: 'OcrWeb Documents' }, }, // canActivate:[AuthGuard]
      { path: 'docs/:id', component: DocumentDetailComponent, data: { title: 'OcrWeb Document details' }, }
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
