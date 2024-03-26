import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { PipesModule } from '../_pipes/pipes.module';
import { DirectiveModule } from '../_directive/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileLoaderComponent } from './ocr-components/file-loader/file-loader.component';
import { FileUploadComponent } from './ocr-components/file-upload/file-upload.component';
import { FileViewComponent } from './ocr-components/file-view/file-view.component';
import { FileDataComponent } from './ocr-components/file-data/file-data.component';
import { QnaAccordianComponent } from './ocr-components/qna-accordian/qna-accordian.component';
import { FilePreviewComponent } from './ocr-components/file-preview/file-preview.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModalModule } from './ng-modal';
import { LoaderComponent } from './basic/loader/loader.component';
import { AlertBoxComponent } from './basic/alert-box/alert-box.component';
import { RatingComponent } from './basic/rating/rating.component';
import { WebcamModule } from 'ngx-webcam';
import { OcrWebcamComponent } from './ocr-webcam/ocr-webcam.component';
import { PricingComponent } from './pricing/pricing.component';
import { PaginationComponent } from './basic/pagination/pagination.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SliderItemComponent,
    FileLoaderComponent,
    FileUploadComponent,
    FileViewComponent,
    FileDataComponent,
    QnaAccordianComponent,
    FilePreviewComponent,
    SidebarComponent,
    LoaderComponent,
    AlertBoxComponent,
    RatingComponent,
    OcrWebcamComponent,
    PricingComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    PipesModule,
    DirectiveModule,
    NgxExtendedPdfViewerModule,
    NgbModalModule,
    WebcamModule
    // NgxQRCodeModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SliderItemComponent,
    FileLoaderComponent,
    FileUploadComponent,
    FileDataComponent,
    QnaAccordianComponent,
    SidebarComponent,
    LoaderComponent,
    RatingComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
