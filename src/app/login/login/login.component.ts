import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/_services';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { AlertBoxComponent } from 'src/app/shared/basic/alert-box/alert-box.component';
import { NgbModal } from 'src/app/shared/ng-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginMode = false;
  public authMode!: string;
  public loginForm = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required])
  });
  public signupForm = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required]),
    number: new FormControl<string | null>(null, [Validators.required]),
  });
  constructor(private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private ngbModel: NgbModal) {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['/user']);
    }
  }
  ngOnInit(): void {
    // this.router.events.subscribe({
    //   next: (res) => {
    //     const data = this.activatedRoute.snapshot.data;
    //     if (data && data['mode']) {
    //       if (data['mode'] === 'LOGIN') {
    //         this.loginMode = true;
    //       } else {
    //         this.loginMode = false;
    //       }
    //     }
    //   }
    // });
    // this.authService.isLoggedInSubject.subscribe({
    //   next: (res) => {
    //     console.log("Is login auth==>> ", res);
    //   }
    // })
  }
  onSubmit(): void {
    if (!this.loginForm.valid) {
      this.toastService.error('Please fill all fields!', 'Error');
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loginService.loginUser(this.loginForm.value).subscribe({
      next: (res: { token: string, message: string }) => {
        if (res && res.token) {
          this.authService.login(res.token);
          this.toastService.success('Login successfully!', 'Success');
        }
        console.log("Respose => ", res);
      },
      error: (err: HttpErrorResponse) => {
        console.log("Error => ", err);
        this.toastService.error(err && err.error && err.error.message ? err.error.message : 'Something went wrong', 'Try again!');
      }
    });
  }
  changeMode(): void {
    this.router.navigate(['/auth', 'signup'], { relativeTo: this.activatedRoute });
  }
  goToForgotPass(): void {
    this.router.navigate(['/auth', 'forgot-password']);
  }
  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}
