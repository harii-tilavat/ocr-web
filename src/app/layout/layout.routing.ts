import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourceComponent } from './components/resource/resource.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { ResourceDetailsComponent } from './components/resource/resource-details/resource-details.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Get Curious Home' } },
  { path: 'product', component: ProductComponent, data: { title: 'Product Home' } },
  { path: 'pricing', component: PricingComponent, data: { title: 'Pricing Home' } },
  { path: 'teams/:id', component: TeamsComponent, data: { title: 'Teams Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Home' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Home' } },
  { path: 'resources', component: ResourceComponent, data: { title: 'Resource Home' } },
  { path: 'resources/:id', component: ResourceDetailsComponent, data: { title: 'Resource Details' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog Home' } },
  { path: 'blog/:id', component: BlogDetailsComponent, data: { title: 'Blog Details' } },
  { path: 'terms/:id', component: PrivacyPolicyComponent, data: { title: 'Privacy Policy' } },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
