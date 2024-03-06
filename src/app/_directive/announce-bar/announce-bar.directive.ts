import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAnnounceBar]'
})
export class AnnounceBarDirective implements OnInit, OnChanges, AfterViewInit {
  @Input() isAnnounce = false;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {

  }

  initBodyPadding(): void {
    setTimeout(() => {
      const offset = (this.el.nativeElement as HTMLElement).getBoundingClientRect().height;
      if (offset && offset < 154) {
        (document.body as HTMLElement).style.paddingTop = offset + 'px';
      } else {
        if (this.isAnnounce) {
          (document.body as HTMLElement).style.paddingTop = '153px';
        } else {
          (document.body as HTMLElement).style.paddingTop = '82px';
        }
      }
    }, 100);
  }
  ngAfterViewInit(): void {
    // this.initBodyPadding();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isAnnounce'] && !changes['isAnnounce'].firstChange) {
      this.isAnnounce = changes['isAnnounce'].currentValue;
      // this.initBodyPadding();
    }
  }

}
