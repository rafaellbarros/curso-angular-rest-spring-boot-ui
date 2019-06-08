import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoAutorizadoComponent, PaginaNaoEncontradaComponent } from './core/components/inlines';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: 'app/modules/lancamentos/lancamentos.module#LancamentosModule' },
  { path: 'pessoas', loadChildren: 'app/modules/pessoas/pessoas.module#PessoasModule' },
  { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'relatorios', loadChildren: 'app/modules/relatorios/relatorios.module#RelatoriosModule'},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
