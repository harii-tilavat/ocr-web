import { Component, Input, OnInit } from '@angular/core';
import { PricingModel } from 'src/app/_model';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent implements OnInit {
  @Input() priceList!: PricingModel;
  @Input() priceIndex!:number;
  public isMonthly = true;
  public convertedPrice!: number;
  constructor() { }
  ngOnInit(): void {
    if (this.priceList.price) {
      if (this.priceList.discount) {
        this.convertedPrice = this.priceList.price - (this.priceList.price * this.priceList.discount / 100);
      } else {
        this.convertedPrice = this.priceList.price;
      }
    }
  }

}
