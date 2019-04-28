import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [CreateEventComponent],
  imports: [
    CommonModule,

    EventsRoutingModule
  ]
})
export class EventsModule { }
