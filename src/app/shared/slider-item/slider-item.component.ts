import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnChanges {

  @Input() sliderItem: any;
  @Input() rtl = 'SLIDE_LEFT';
  @Input() isTeams = false;

  constructor(private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rtl'] && !changes['rtl'].firstChange) {
      this.rtl = changes['rtl'].currentValue;
    }
  }
  goToUdesk(): void {
    window.open('https://app.userstudy.co/', "_blank");
  }
  startOCR(): void {
    this.router.navigate(['/upload']);
  }
}
