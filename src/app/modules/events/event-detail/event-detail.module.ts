import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailComponent } from './event-detail.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [EventDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EventDetailModule { }
