import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GenericResponseList, GenericResponseType } from 'src/app/_model';
import { NuggetService } from 'src/app/_services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    company: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, []),
    message: new FormControl(null, [Validators.required]),
  });
  constructor(private nuggetService: NuggetService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.nuggetService.createInquiry(this.contactForm.value).subscribe({
        next: (res: GenericResponseList<GenericResponseType>) => {
          if (res && res.message) {
            this.toastrService.success(res.message, 'success');
          }
          this.contactForm.reset();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }

  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }

}
