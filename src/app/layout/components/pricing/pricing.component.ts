import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PricingModel } from 'src/app/_model';
import { NgbModal } from 'src/app/shared/ng-modal';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public hiringPriceList: PricingModel[] = [
    {
      id: 1,
      planType: 'free',
      price: null,
      discount: null,
      features:
      {
        no_of_resercher: 1,
        no_of_sessions: 3,
        is_transcription: true
      }
    },
    {
      id: 2,
      planType: 'Single',
      price: 50,
      discount: null,
      features: {
        no_of_resercher: 1,
        no_of_sessions: 10,
        is_transcription: true
      }
    },
    {
      id: 3,
      planType: 'Team',
      price: 225,
      discount: 20,
      features: {
        no_of_resercher: 5,
        no_of_sessions: 50,
        is_transcription: true
      }
    },
    {
      id: 4,
      planType: 'Company',
      price: 400,
      discount: null,
      features:
      {
        no_of_resercher: 10,
        no_of_sessions: 100,
        is_transcription: true
      }
    },
  ]
  public recruitPriceList: PricingModel[] = [
    {
      id: 5,
      planType: 'Pay as you go',
      price: 50,
      discount: null,
      features: null,
      participant_per_month: null,
    },
    {
      id: 6,
      planType: 'Single',
      price: 400,
      discount: null,
      features: null,
      participant_per_month: 10,
    },
    {
      id: 7,
      planType: 'Team',
      price: 1200,
      discount: null,
      features: null,
      participant_per_month: 40,
    },
    {
      id: 8,
      planType: 'Company',
      price: 2500,
      discount: null,
      features: null,
      participant_per_month: 100,
    },
  ]
  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {

  }
  openModal(): void {
    // const modalRef = this.modalService.open(PricingPlanComponent,{scrollable:true});
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
