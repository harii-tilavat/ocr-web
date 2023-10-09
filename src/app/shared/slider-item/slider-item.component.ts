import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnChanges {

  @Input() sliderItem: any;
  @Input() rtl = 'SLIDE_LEFT';
  @Input() isTeams = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rtl'] && !changes['rtl'].firstChange) {
      this.rtl = changes['rtl'].currentValue;
    }
  }
}
