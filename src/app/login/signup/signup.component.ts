import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { GenericresponseModel, } from 'src/app/_model';
import { LoginService, AuthService, LoaderService } from 'src/app/_services';
import { CustomValidatorRules } from 'src/app/_validators';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  public subscription: Array<Subscription> = [];
  public loginMode = false;
  public authMode!: string;
  public isRegistered!: string;
  public signupForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    username: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, CustomValidatorRules.emailValidation]),
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl<string | null>(null, [Validators.required]),
    number: new FormControl<string | null>(null, []),
    user_ref_code: new FormControl<string | null>(null),
  });
  public otpForm = new FormGroup({
    otp: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)]),
  });
  constructor(private loaderService: LoaderService, private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['/user']);
    }
  }
  ngOnInit(): void {
    this.subscription.push(this.router.events.subscribe({
      next: (res) => {
        const data = this.activatedRoute.snapshot.data;
        const user_ref_code = this.activatedRoute.snapshot.queryParams['user_ref_code'];
        if (data && data['mode']) {
          if (data['mode'] === 'LOGIN') {
            this.loginMode = true;
          } else {
            this.loginMode = false;
          }
        }
        this.signupForm.patchValue({
          user_ref_code: user_ref_code
        })
      }
    }));
  }
  onSignup(): void {
    if (!this.signupForm.valid) {
      this.toastService.error('Please fill all fields!', 'Error');
      this.signupForm.markAllAsTouched();
      return;
    }

    this.loaderService.show();
    this.subscription.push(this.loginService.registerUser(this.signupForm.value).subscribe({
      next: (res: GenericresponseModel) => {
        if (res && res.message) {
          this.toastService.success(res.message, 'Success');
        }
        this.loaderService.hide();
      },
      error: (err: HttpErrorResponse) => {
        console.log("Error => ", err);
        this.toastService.error(err && err.error && err.error.message || 'Something went wrong', 'Try again!');
        this.loaderService.hide();
      }
    }));
  }
  loginWithGoogle(): void {

  }
  changeMode(): void {
    if (this.loginMode) {
      this.router.navigate(['/auth', 'signup'], { relativeTo: this.activatedRoute });
    } else {
      this.router.navigate(['/auth', 'login'], { relativeTo: this.activatedRoute });
    }
  }

  goToHomepage(): void {
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
