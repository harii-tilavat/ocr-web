import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DompurifyPipe } from './dompurifyPipe/dompurify.pipe';
import { MetadataFilterPipe } from './metadata-filter/metadata-filter.pipe';
import { ImgExtentionPipe } from './img-extention/img-extention.pipe';



@NgModule({
  declarations: [DompurifyPipe, MetadataFilterPipe, ImgExtentionPipe],
  imports: [
    CommonModule
  ],
  exports: [DompurifyPipe, MetadataFilterPipe, ImgExtentionPipe]
})
export class PipesModule { }
