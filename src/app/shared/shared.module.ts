import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TopAppBarComponent } from './components/top-app-bar/top-app-bar.component';

@NgModule({
  declarations: [TopAppBarComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedMaterialModule,
    ReactiveFormsModule,
    TopAppBarComponent
  ]
})
export class SharedModule { }
