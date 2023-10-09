import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appEditor]'
})
export class EditorDirective implements OnInit {

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.setImagesRect();
  }
  setImagesRect(): void {
    if (this.el.nativeElement) {
      const images = (this.el.nativeElement as HTMLElement).querySelectorAll('img');
      images.forEach(i => {
        const width = i.getAttribute('width') || 0;
        if (+width && (+width > (this.el.nativeElement as HTMLElement).offsetWidth)) {
          i.style.width = '100%';
        } else {
          i.style.width = width + 'px';
        }
      })
    }
  }
  @HostListener('window:resize', [])
  onResizeEditor(): void {
    this.setImagesRect();
  }
}
