import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [BottomNavigationComponent, TopBarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
