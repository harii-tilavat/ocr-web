import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverIconDirective } from './hover-icon/hover-icon.directive';
import { ScrollListenerDirective } from './scroll-listener/scroll-listener.directive';
import { EditorDirective } from './editor-directive/editor.directive';



@NgModule({
  declarations: [
    HoverIconDirective,
    ScrollListenerDirective,
    EditorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HoverIconDirective,
    ScrollListenerDirective,
    EditorDirective,
  ]
})
export class DirectiveModule { }
