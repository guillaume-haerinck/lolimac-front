import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventService } from './event.service';
import { PostsService } from './posts.service';
import { PostListComponent } from './post-list/post-list.component';
import { CommentComponent } from './post-list/comment/comment.component';

@NgModule({
  declarations: [PostListComponent, CommentComponent],
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
