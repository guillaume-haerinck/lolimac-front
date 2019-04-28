import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'app/core/services/responsive.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bMobile = true;

  constructor(responsiveService: ResponsiveService) { 
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

}
