import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EventDetail } from 'app/shared/models/event-detail';
import { EventService } from '../event.service';
import { ResponsiveService } from 'app/core/services/responsive.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event$: Observable<EventDetail>
  bMobile = true;

  constructor(private m_eventService: EventService,
    private m_route: ActivatedRoute,
    private m_router: Router,
    responsiveService: ResponsiveService)
  {
    this.event$ = this.m_eventService.getEventById(Number(this.m_route.snapshot.paramMap.get('id')));

    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });
  }

  ngOnInit() {}

  goTo(url: string) {
    this.m_router.navigateByUrl(url);
  }
}
