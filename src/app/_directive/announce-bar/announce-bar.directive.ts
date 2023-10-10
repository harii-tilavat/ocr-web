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
    (document.body as HTMLElement).style.paddingTop = (this.el.nativeElement as HTMLElement).offsetHeight + 'px';
  }
  ngAfterViewInit(): void {
    this.initBodyPadding();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isAnnounce'] && !changes['isAnnounce'].firstChange) {
      this.isAnnounce = changes['isAnnounce'].currentValue;
      setTimeout(() => {
        this.initBodyPadding();
      }, 0);
    }
  }

}
