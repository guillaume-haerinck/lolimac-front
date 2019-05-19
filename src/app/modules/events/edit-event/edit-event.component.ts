import { Component, OnInit } from '@angular/core';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  bMobile: boolean;
  eventId: number;

  constructor(responsiveService: ResponsiveService,
    private m_router: Router,
    route: ActivatedRoute) {
    this.eventId = Number(route.snapshot.paramMap.get('id'));

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

  goTo(url: string) {
    this.m_router.navigateByUrl(url);
  }
}
