
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../seguranca';
import { DashboardComponent } from './components/dashboard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
