import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-pdf', 
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.scss']
})
export class CreatePdfComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];

  constructor(){}
  ngOnInit():void{

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
