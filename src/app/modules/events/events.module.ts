import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventComponent } from './create-event/create-event.component';
import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EditEventComponent } from './edit-event/edit-event.component';

@NgModule({
  declarations: [
    CreateEventComponent,
    EventDetailComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,

    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
