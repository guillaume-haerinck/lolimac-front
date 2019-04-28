import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatBadgeModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ]
})
export class SharedMaterialModule { }
