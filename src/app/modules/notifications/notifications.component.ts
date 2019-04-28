import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'app/core/services/responsive.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
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
