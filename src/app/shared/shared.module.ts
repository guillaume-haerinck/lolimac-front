import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TopAppBarComponent } from './components/top-app-bar/top-app-bar.component';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [
    TopAppBarComponent,
    EventCardComponent
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
    EventCardComponent
  ]
})
export class SharedModule { }
