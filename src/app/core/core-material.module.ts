import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatIconModule, MatButtonModule, MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class CoreMaterialModule { }
