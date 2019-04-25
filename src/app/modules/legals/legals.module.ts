import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalsComponent } from './legals.component';
import { LegalsRoutingModule } from './legals-routing.module';

@NgModule({
  declarations: [ LegalsComponent ],
  imports: [
    CommonModule,

    LegalsRoutingModule
  ]
})
export class LegalsModule { }
