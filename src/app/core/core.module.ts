import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    BottomNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HttpClientModule,

    // Custom
    AuthService
  ],
  exports: [
    HttpClientModule,
    BottomNavigationComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
