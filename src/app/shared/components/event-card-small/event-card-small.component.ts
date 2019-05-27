import { Component, OnInit, Input } from '@angular/core';

import { Event } from 'app/shared/models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card-small',
  templateUrl: './event-card-small.component.html',
  styleUrls: ['./event-card-small.component.scss']
})
export class EventCardSmallComponent implements OnInit {
  @Input() event: Event;

  constructor(private m_router: Router) { }

  ngOnInit() {
  }

  goTo(url: string) {
    this.m_router.navigateByUrl(url);
  }
}
