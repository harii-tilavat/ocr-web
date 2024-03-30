import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService, AuthService, FileUploadService, LoaderService } from 'src/app/_services';
import { CustomValidatorRules } from 'src/app/_validators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public subscription: Array<Subscription> = [];
  public emailForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, CustomValidatorRules.emailValidation])
  });
  constructor(private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private fileUploadService: FileUploadService, private loaderService: LoaderService) { }
  ngOnInit(): void {
  }
  goToLogin(): void {
    this.router.navigate(['/auth', 'login']);
  }
  submitEmail(): void {
    if (!this.emailForm.valid) {
      this.emailForm.markAllAsTouched();
      return
    }
    this.loaderService.show();
    this.loginService.forgotPassword(this.emailForm.controls['email'].value).subscribe({
      next: (res) => {
        if (res && res.message) {
          this.toastService.success(res.message, 'Success');
        }
        this.loaderService.hide();
      },
      error: (err) => {
        this.toastService.error(err.error.message, 'ERROR');
        this.loaderService.hide();
      }
    })
  }
  ngOnDestroy(): void {
    this.subscription.forEach(i => i.unsubscribe());
  }
}
