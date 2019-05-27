import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModule } from './modules/shared-material.module';
import { TopAppBarComponent } from './components/top-app-bar/top-app-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { EventCardSmallComponent } from './components/event-card-small/event-card-small.component';

@NgModule({
  declarations: [
    TopAppBarComponent,
    EventCardComponent,
    PostListComponent,
    CommentListComponent,
    DialogComponent,
    EventCardSmallComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  exports: [
    SharedMaterialModule,
    ReactiveFormsModule,
    TopAppBarComponent,
    EventCardComponent,
    PostListComponent,
    CommentListComponent,
    DialogComponent,
    EventCardSmallComponent
  ]
})
export class SharedModule { }
