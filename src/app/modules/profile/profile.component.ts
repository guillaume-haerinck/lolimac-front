import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { AuthService } from 'app/core/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bMobile = true;

  constructor(responsiveService: ResponsiveService,
    private m_authService: AuthService,
    private m_router: Router) {
    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });
  }

  ngOnInit() {
  }


  logOut(): void {
    this.m_authService.logout();
    this.m_router.navigate(['/visiteur/login']);
  }
}
