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
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { WalletComponent } from './wallet/wallet.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';
import { CreditListComponent } from './admin/credit-list/credit-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FeedbackListComponent } from './admin/feedback-list/feedback-list.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { UserDetailComponent } from './admin/users-list/user-detail/user-detail.component';
import { CreditDetailComponent } from './admin/credit-list/credit-detail/credit-detail.component';
import { CsvToJsonComponent } from './csv-to-json/csv-to-json.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReferalListComponent } from './admin/referal-list/referal-list.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
@NgModule({
  declarations: [
    AdminComponent,
    DocumentsBinComponent,
    AccountSettingComponent,
    WalletComponent,
    ContactListComponent,
    CreditListComponent,
    DashboardComponent,
    FeedbackListComponent,
    UsersListComponent,
    UserDetailComponent,
    CreditDetailComponent,
    CsvToJsonComponent,
    ReferalListComponent,
    CreatePdfComponent
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
    NgbModalModule,
    NgxPaginationModule,
  ]
})
export class AdminModule { }
