import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DirectiveModule } from '../_directive/directive.module';
import { PipesModule } from '../_pipes/pipes.module';
import { IconsModule } from '../icons/icons.module';
import { LayoutRoutingModule } from '../layout/layout.routing';
import { NgbModalModule } from '../shared/ng-modal';
import { AdminComponent } from './admin.component';
import { DocumentsBinComponent } from './documents-bin/documents-bin.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    AdminComponent,
    DocumentsBinComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    DirectiveModule,
    AdminRoutingModule,
    NgxExtendedPdfViewerModule,
    PipesModule,
    LayoutModule,
    NgbModalModule
  ]
})
export class AdminModule { }
