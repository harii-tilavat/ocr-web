import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService, AuthService } from '../_services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private toastService: ToastrService, private loginService: LoginService, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }
  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}
