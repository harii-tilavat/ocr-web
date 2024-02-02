import { ToastrService } from 'ngx-toastr';
import { NuggetService } from 'src/app/_services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MenuListModel, menuConfig } from 'src/app/_model/menu-list/menu-list.model';
import { GenericResponseList, GenericResponseType } from 'src/app/_model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public year = new Date().getFullYear();
  public menuList: { title: string, routing: string }[] = [
    { title: 'About', routing: '/about' },
    { title: 'Contact', routing: '/contact' },
    { title: 'Documents', routing: '/docs' },
    // { title: 'OC', routing: '/blog' },
  ];
  // { title: 'Customer stories', routing: '/resources' },
  public enquiryForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })
  constructor(private nuggetService: NuggetService, private toastrService: ToastrService) {

  }
  ngOnInit(): void {
  }
  goToUdesk(): void {
    if (this.enquiryForm.valid) {
      this.nuggetService.formalEnquiry(this.enquiryForm.value).subscribe({
        next: (res: GenericResponseList<GenericResponseType>) => {
          if (res && res.success) {
            this.enquiryForm.reset();
            this.toastrService.success(res.message);
          }
        },
        error: () => { }
      })
    } else {
      this.enquiryForm.markAllAsTouched();
    }
  }
  emailSubmit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
