import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService, FileUploadService, LoaderService } from 'src/app/_services';
import { NgbModal } from 'src/app/shared/ng-modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public contactForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    surname: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    subject: new FormControl<string | null>(null, [Validators.required]),
    message: new FormControl<string | null>(null, [Validators.required]),
  });
  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router, private modalService: NgbModal, private fileUploadService: FileUploadService, private loaderService: LoaderService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.loaderService.show();
    console.log("Value ==>> ", this.contactForm.value);
    this.subscription.push(this.fileUploadService.setContact(this.contactForm.value).subscribe({
      next: (res) => {
        this.toastrService.success(res.message, 'Success');
        this.loaderService.hide();
        this.contactForm.reset();
      },
      error: (err) => {
        this.toastrService.error(err && err.error && err.error.message || 'Please try again!', 'ERROR');
        this.loaderService.hide();
      }
    }));
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
