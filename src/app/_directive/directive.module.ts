import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverIconDirective } from './hover-icon/hover-icon.directive';
import { ScrollListenerDirective } from './scroll-listener/scroll-listener.directive';
import { CanvasDirectiveDirective } from './canvas-directive/canvas-directive.directive';
import { EditorDirective } from './editor-directive/editor.directive';
import { AnnounceBarDirective } from './announce-bar/announce-bar.directive';



@NgModule({
  declarations: [
    HoverIconDirective,
    ScrollListenerDirective,
    CanvasDirectiveDirective,
    EditorDirective,
    AnnounceBarDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HoverIconDirective,
    ScrollListenerDirective,
    CanvasDirectiveDirective,
    EditorDirective,
    AnnounceBarDirective
  ]
})
export class DirectiveModule { }
