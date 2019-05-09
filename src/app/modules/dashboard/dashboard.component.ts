import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'app/core/services/responsive.service';

import { Event } from 'app/shared/models/event';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events: Event[] = [];
  bMobile = true;

  constructor(responsiveService: ResponsiveService, private m_eventService: EventService) { 
    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });
  }

  ngOnInit() {
    this.m_eventService.getEventList(0, 20).subscribe(result => {
      this.events = result;
    }, error => {

    });
  }

}
