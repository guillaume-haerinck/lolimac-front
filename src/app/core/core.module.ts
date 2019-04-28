import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CoreMaterialModule } from './core-material.module';

@NgModule({
  declarations: [
    BottomNavigationComponent,
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreMaterialModule
  ],
  providers: [
    HttpClientModule,

    // Custom
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr-FR'
    }
  ],
  exports: [
    HttpClientModule,
    BottomNavigationComponent,
    TopNavigationComponent,
    CoreMaterialModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
