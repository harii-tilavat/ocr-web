import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverIcon]'
})
export class HoverIconDirective {

  constructor(private elRef: ElementRef) {
    console.log("Directive Called:", elRef);
  }

}
