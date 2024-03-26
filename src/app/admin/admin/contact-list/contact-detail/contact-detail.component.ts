import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactListModel } from 'src/app/_model';
import { ContactListComponent } from 'src/app/admin/admin/contact-list/contact-list.component';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
  public contactDetail!: ContactListModel;
  public subscription: Array<Subscription> = [];

  constructor() { }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
