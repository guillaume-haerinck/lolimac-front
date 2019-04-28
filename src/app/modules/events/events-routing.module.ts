import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [
    {
        path: 'creation',
        component: CreateEventComponent,
    },
    {
      path: '404',
      loadChildren: '../page-not-found/page-not-found.module#PageNotFoundModule'
    },
    {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }