import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

enum FormStep {
  Page1,
  Page2,
  Page3
};

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  bMobile = true;
  eventForm: FormGroup;
  currentStep = FormStep.Page2;
  formStep = FormStep;
  topBarTitle = "Création d'évènement";
  minDate = new Date();

  constructor(responsiveService: ResponsiveService,
    private m_formBuilder: FormBuilder,
    private m_eventService: EventService,
    private m_router: Router)
  {
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
      date_start_hour: '0',
      date_start_minute: '0',
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
  }

  submitForm(): void {
    let form = this.eventForm.value;
    if (form.date_start != '') {
      form.date_start.setHours(form.date_start_hour, form.date_start_minute);
      delete form.date_start_hour;
      delete form.date_start_minute;
    }

    this.m_eventService.createEvent(form)
      .subscribe(response => {
        if (response.id_event) {
          this.m_router.navigate([`/evenements/detail/${response.id_event}`]);
        } else {
          // this.m_router.navigate([`/tableau-de-bord`]);
          console.error("Le back n'a pas indiqué l'ID de l'event créé");
        }
      }, (error: HttpErrorResponse) => {
        console.error("error");
        // TODO display error with the form field
      });
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  updateTitle(): void {
    switch(this.currentStep) {
      case FormStep.Page1:
        this.topBarTitle = "Création d'évènement";
        break;

      case FormStep.Page2:
        this.topBarTitle = "Lieu et Date";
        break;

      case FormStep.Page3:
        this.topBarTitle = "Précisions";
        break;
    }
  }
}
