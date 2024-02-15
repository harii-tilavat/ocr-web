import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { DirectiveModule } from '../_directive/directive.module';

import { NuggetService } from 'src/app/_services';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../_pipes/pipes.module';
import { NgbModalModule } from '../shared/ng-modal';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    LayoutComponent,
    DocumentListComponent,
    DocumentUploadComponent,
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
  exports: [],
  providers: [NuggetService]
})
export class LayoutModule { }
