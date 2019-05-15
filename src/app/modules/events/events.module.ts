import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventService } from './event.service';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    EventsRoutingModule
  ],
  providers: [
    EventService,
    PostsService
  ]
})
export class EventsModule { }
