import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventComponent } from './create-event.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [CreateEventComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateEventModule { }
