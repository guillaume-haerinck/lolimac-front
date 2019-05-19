import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { AuthService } from 'app/core/services/auth.service';
import { UserService } from '../visitor/user.service';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bMobile = true;
  user$: Observable<User>;

  constructor(responsiveService: ResponsiveService,
    private m_authService: AuthService,
    private m_router: Router,
    private m_userService: UserService) {
    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });

    this.user$ = this.m_userService.get(this.m_authService.getUserId());
  }

  ngOnInit() {}

  logout(): void {
    this.m_authService.logout();
    this.m_router.navigate(['/visiteur/login']);
  }
}
