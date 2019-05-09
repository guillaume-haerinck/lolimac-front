import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResponsiveService } from 'app/core/services/responsive.service';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/core/services/snack-bar.service';

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
    private m_router: Router,
    private m_snackbar: SnackBarService)
  {
    responsiveService.isMobile().subscribe(result => {
      if (result.matches) {
          this.bMobile = false;
      } else {
          this.bMobile = true;
      }
    });

    this.eventForm = this.m_formBuilder.group({
      name: ['', Validators.required],
      imageSearch: [''],
      imageUrl: ['']
    });
  }

  ngOnInit() {
  }

  createEvent(): void {
    this.m_eventService.createEvent(this.eventForm.value)
      .subscribe(response => {
        this.m_router.navigate([`/evenements/detail/${response.id_event}`]);
      }, (error: HttpErrorResponse) => {
        // TODO display error with the form field
          this.m_snackbar.open('Problème coté serveur !', 'Facebook c\'est mieux', 10000);
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
