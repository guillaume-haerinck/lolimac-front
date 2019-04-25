import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private m_authService: AuthService, private m_router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    this.m_authService.login(username, password)
      .subscribe(response => {
        this.m_router.navigate([this.m_authService.redirectUrl]);
      }, error => {
        // TODO mettre sur formulaire que erreur
      });
  }

}
