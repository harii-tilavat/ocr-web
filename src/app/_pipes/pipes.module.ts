import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DompurifyPipe } from './dompurifyPipe/dompurify.pipe';
import { MetadataFilterPipe } from './metadata-filter/metadata-filter.pipe';



@NgModule({
  declarations: [DompurifyPipe, MetadataFilterPipe],
  imports: [
    CommonModule
  ],
  exports: [DompurifyPipe, MetadataFilterPipe]
})
export class PipesModule { }
