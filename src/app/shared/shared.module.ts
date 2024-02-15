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
import { FileViewComponent } from './ocr-components/file-upload/file-view/file-view.component';
import { FileDataComponent } from './ocr-components/file-data/file-data.component';
import { QnaAccordianComponent } from './ocr-components/qna-accordian/qna-accordian.component';
// import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';

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
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    PipesModule,
    DirectiveModule,
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
  ]
})
export class SharedModule { }
