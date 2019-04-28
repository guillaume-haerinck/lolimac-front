import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
    {
      path: 'creation',
      component: CreateEventComponent,
    },
    {
      path: 'detail/:id',
      component: EventDetailComponent
    },
    {
      path: 'edition/:id',
      component: EditEventComponent
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