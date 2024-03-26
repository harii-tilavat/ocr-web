import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreditListModel } from 'src/app/_model';
@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.scss']
})
export class CreditDetailComponent implements OnInit, OnDestroy {
  public creditDetail!: CreditListModel;
  public subscription: Array<Subscription> = [];

  constructor() { }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
