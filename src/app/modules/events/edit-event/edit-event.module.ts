import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventComponent } from './edit-event.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [EditEventComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EditEventModule { }
