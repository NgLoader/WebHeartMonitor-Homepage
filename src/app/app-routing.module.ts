import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/dashboard/dashboard-routing.module').then(child => child.DashboardRoutingModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/error/page-not-found/page-not-found-routing.module').then(child => child.PageNotFoundRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
