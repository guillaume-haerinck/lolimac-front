import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { EventService } from '../event.service';
import { fillUndefinedProperties } from 'app/shared/utility/change-objects';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  bMobile: boolean;
  eventId: number;
  eventForm: FormGroup;

  constructor(responsiveService: ResponsiveService,
    private m_router: Router,
    private m_formBuilder: FormBuilder,
    route: ActivatedRoute,
    private m_eventService: EventService) {
    this.eventId = Number(route.snapshot.paramMap.get('id'));

    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
        this.bMobile = false;
      } else {
        this.bMobile = true;
      }
    });

    this.eventForm = this.m_formBuilder.group({
      title: ['', Validators.required],
      photo_url: ['https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', Validators.required],
      description: '',
      date_start: '',
      date_end: '',
      place: this.m_formBuilder.group({
        name: '',
        street: '',
        number: '',
        city: ''
      })
    });
  }

  ngOnInit() {
    this.m_eventService.getEventById(this.eventId).subscribe((result) => {
      result = fillUndefinedProperties(result);
      this.eventForm.patchValue({
        title: result.title,
        photo_url: result.photo_url,
        description: result.description,
        date_start: result.date_start,
        date_end: result.date_end,
        place: result.place
      });
    }, error => {

    });
  }

  goTo(url: string) {
    this.m_router.navigateByUrl(url);
  }
}
