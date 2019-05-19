import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Event } from 'app/shared/models/event';
import { EventService } from '../event.service';
import { ResponsiveService } from 'app/core/services/responsive.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event$: Observable<Event>
  bMobile = true;
  eventId: number;

  constructor(private m_eventService: EventService,
    route: ActivatedRoute,
    private m_router: Router,
    responsiveService: ResponsiveService)
  {
    this.eventId = Number(route.snapshot.paramMap.get('id'));
    this.event$ = this.m_eventService.getEventById(this.eventId);

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

  joinEvent(id: number) {
    this.m_eventService.join(id).subscribe(result => {
      console.log("joined !");
    }, error => {
      console.log(error);
    })
  }

  leaveEvent(id: number) {
    this.m_eventService.leave(id).subscribe(result => {
      console.log("leaved !");
    }, error => {
      console.log(error);
    })
  }

  reloadPosts(): void {
    this.event$ = this.m_eventService.getEventById(this.eventId);
  }
}
