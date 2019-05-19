import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Notification } from 'app/shared/models/notification';
import { ResponsiveService } from 'app/core/services/responsive.service';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  bMobile = true;
  notification$: Observable<Notification>;

  constructor(responsiveService: ResponsiveService,
    private m_notificationService: NotificationsService) {
    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });

    this.notification$ = this.m_notificationService.getAll();
  }

  ngOnInit() {
  }

}
