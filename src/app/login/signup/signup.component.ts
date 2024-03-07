import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService, AuthService } from 'src/app/_services';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public loginMode = false;
  public authMode!: string;
  public signupForm = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required]),
    number: new FormControl<string | null>(null, [Validators.required]),
  });
  constructor(private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['/user']);
    }
  }
  ngOnInit(): void {
    this.router.events.subscribe({
      next: (res) => {
        const data = this.activatedRoute.snapshot.data;
        if (data && data['mode']) {
          if (data['mode'] === 'LOGIN') {
            this.loginMode = true;
          } else {
            this.loginMode = false;
          }
        }
      }
    });
    this.authService.isLoggedInSubject.subscribe({
      next: (res: any) => {
        console.log("Is login auth==>> ", res);
      }
    })
  }
  onSignup(): void {
    if (!this.signupForm.valid) {
      this.toastService.error('Please fill all fields!', 'Error');
      this.signupForm.markAllAsTouched();
      return;
    }

    this.loginService.loginUser(this.signupForm.value).subscribe({
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
    if (this.loginMode) {
      this.router.navigate(['/auth', 'signup'], { relativeTo: this.activatedRoute });
    } else {
      this.router.navigate(['/auth', 'login'], { relativeTo: this.activatedRoute });
    }
  }

  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}
