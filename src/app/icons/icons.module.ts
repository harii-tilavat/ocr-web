import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuggetIconComponent } from './nugget-icon.component';
import { IconsRegistry } from './icon-registry';



@NgModule({
  declarations: [
    NuggetIconComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [IconsRegistry],
  exports: [NuggetIconComponent]
})
export class IconsModule { }
