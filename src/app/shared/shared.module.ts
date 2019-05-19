import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModule } from './modules/shared-material.module';
import { TopAppBarComponent } from './components/top-app-bar/top-app-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    TopAppBarComponent,
    EventCardComponent,
    PostListComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedMaterialModule,
    ReactiveFormsModule,
    TopAppBarComponent,
    EventCardComponent,
    PostListComponent,
    CommentListComponent
  ]
})
export class SharedModule { }
