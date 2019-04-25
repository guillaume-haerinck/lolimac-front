import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// custom
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  bInvalid = false;

  constructor(private m_formBuilder: FormBuilder, private m_authService: AuthService, private m_router: Router) {
    this.loginForm = this.m_formBuilder.group({
      username: ['pseudo_test', Validators.required],
      password: ['mot_de_passe', Validators.required]
    });
  }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    this.m_authService.login(username, password)
      .subscribe(response => {
        this.m_router.navigate([this.m_authService.redirectUrl]);
      }, error => {
        // TODO display error with the form field
      });
  }

}
