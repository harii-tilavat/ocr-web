import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericresponseModel } from 'src/app/_model';
import { LoaderService, LoginService, AuthService } from 'src/app/_services';
import { CustomValidatorRules } from 'src/app/_validators';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('inputs') inputs!: ElementRef[];
  public otpString = '';
  // public otpForm = new FormGroup({
  //   otp1: new FormControl<string | null>(null, [Validators.required, Validators.minLength(1)]),
  //   otp2: new FormControl<string | null>(null, [Validators.required, Validators.minLength(1)]),
  //   otp3: new FormControl<string | null>(null, [Validators.required, Validators.minLength(1)]),
  //   otp4: new FormControl<string | null>(null, [Validators.required, Validators.minLength(1)]),
  //   otp5: new FormControl<string | null>(null, [Validators.required, Validators.minLength(1)]),
  //   otp6: new FormControl<string | null>(null, [Validators.required, Validators.minLength(1)]),
  // });
  public otpForm = new FormGroup({
    otpString: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)]),
  });
  public subscription: Array<Subscription> = [];

  constructor(private loaderService: LoaderService, private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.focusFirstInput();
  }
  onSubmit(): void {
    if (!this.otpForm.valid) {
      this.otpForm.markAllAsTouched();
      return
    }
    this.otpString = this.otpForm.controls['otpString'].value!;
    if (this.otpString && this.otpString.length === 6) {

      this.loaderService.show();
      this.subscription.push(this.loginService.verifyOtp(this.otpString).subscribe({
        next: (res: GenericresponseModel) => {
          if (res && res.message) {
            this.toastService.success(res.message, 'Success');
            this.router.navigate(['/auth','login']);
          }
          this.loaderService.hide();
        },
        error: (err) => {
          console.log("Error => ", err);
          this.toastService.error(err && err.message || 'Something went wrong', 'Error!');
          this.loaderService.hide();
        }
      }));
    }
  }
  focusFirstInput(): void {
    const inputs = document.querySelectorAll('input[type="text"]');
    if (inputs && inputs.length > 0) {
      (inputs[0] as HTMLInputElement).focus();
    }
  }
  generateOtpString() {
    const otpObject: any = this.otpForm.value;
    for (let i = 1; i <= 6; i++) {
      this.otpString += otpObject[`otp${i}`];
    }
  }
  onInputChange(controlName: string, nextControlName: string): void {
    // const control: any = this.otpForm.get(controlName);
    // if (control.value && nextControlName) {
    //   const nextControl: any = this.otpForm.get(nextControlName);
    //   console.log("Next control => ", nextControl);
    //   nextControl.focus();
    // }
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
