import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/_services';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl<string | null>('hari', [Validators.required]),
    password: new FormControl<string | null>('1234', [Validators.required])
  });
  constructor(private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router) {
    // if (this.authService.isUserLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
  }
  ngOnInit(): void {
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
}
