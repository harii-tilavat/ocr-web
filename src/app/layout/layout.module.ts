import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourceComponent } from './components/resource/resource.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricingPlanComponent } from './components/pricing/pricing-plan/pricing-plan.component';
import { IconsModule } from '../icons/icons.module';
import { TeamsDetailsComponent } from './components/teams/teams-details/teams-details.component';
import { SelectedBlogComponent } from './components/resource/selected-blog/selected-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResourceDetailsComponent } from './components/resource/resource-details/resource-details.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { ShareArticleComponent } from '../shared/resources/share-article/share-article.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { PrivacyDetailComponent } from './components/privacy-policy/privacy-detail/privacy-detail.component';
import { DirectiveModule } from '../_directive/directive.module';

import { NuggetService } from 'src/app/_services';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../_pipes/pipes.module';
import { NgbModalModule } from '../shared/ng-modal';
import { DocumentListComponent } from './components/document-list/document-list.component';
@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    PricingComponent,
    TeamsComponent,
    AboutComponent,
    ContactComponent,
    ResourceComponent,
    LayoutComponent,
    PricingPlanComponent,
    TeamsDetailsComponent,
    SelectedBlogComponent,
    BlogComponent,
    ResourceDetailsComponent,
    BlogDetailsComponent,
    ShareArticleComponent,
    PrivacyPolicyComponent,
    PrivacyDetailComponent,
    DocumentListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    IconsModule,
    DirectiveModule,
    PipesModule,
    NgbModalModule
  ],
  exports: [TeamsDetailsComponent],
  providers: [NuggetService]
})
export class LayoutModule { }
