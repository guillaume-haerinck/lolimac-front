import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModule } from './modules/shared-material.module';
import { TopAppBarComponent } from './components/top-app-bar/top-app-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    TopAppBarComponent,
    EventCardComponent,
    PostComponent
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
    PostComponent
  ]
})
export class SharedModule { }
