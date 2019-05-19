import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

enum FormStep {
  Minimal,
  Places,
  Modules
};

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  bMobile = true;
  eventForm: FormGroup;
  currentStep = FormStep.Minimal;
  formStep = FormStep;
  topBarTitle = "Création d'évènement";

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
      photo_url: ['https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    this.m_eventService.createEvent(this.eventForm.value)
      .subscribe(response => {
        if (response.id_event) {
          this.m_router.navigate([`/evenements/detail/${response.id_event}`]);
        } else {
          this.m_router.navigate([`/tableau-de-bord`]);
        }
      }, (error: HttpErrorResponse) => {
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
      case FormStep.Minimal:
        this.topBarTitle = "Création d'évènement";
        break;

      case FormStep.Places:
        this.topBarTitle = "Précision du lieu";
        break;

      case FormStep.Modules:
        this.topBarTitle = "Ajout de modules";
        break;
    }
  }
}
