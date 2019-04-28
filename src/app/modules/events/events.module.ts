import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventComponent } from './create-event/create-event.component';
import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [CreateEventComponent],
  imports: [
    CommonModule,

    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
