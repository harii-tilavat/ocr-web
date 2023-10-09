import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverIconDirective } from './hover-icon/hover-icon.directive';
import { ScrollListenerDirective } from './scroll-listener/scroll-listener.directive';
import { CanvasDirectiveDirective } from './canvas-directive/canvas-directive.directive';
import { EditorDirective } from './editor-directive/editor.directive';



@NgModule({
  declarations: [
    HoverIconDirective,
    ScrollListenerDirective,
    CanvasDirectiveDirective,
    EditorDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HoverIconDirective,
    ScrollListenerDirective,
    CanvasDirectiveDirective,
    EditorDirective
  ]
})
export class DirectiveModule { }
