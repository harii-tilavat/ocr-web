import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {

  constructor(private elRef: ElementRef, private renderer2: Renderer2) {
    console.log("Directive Called");
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
      this.renderer2.addClass(this.elRef.nativeElement,'scrolled');
    } else {
      this.renderer2.removeClass(this.elRef.nativeElement,'scrolled');
    }
    // console.log("Click success: ", event);
    // console.log("Native Element: ", this.elRef);
    // console.log("Render 2: ", this.renderer2);
  }
}
