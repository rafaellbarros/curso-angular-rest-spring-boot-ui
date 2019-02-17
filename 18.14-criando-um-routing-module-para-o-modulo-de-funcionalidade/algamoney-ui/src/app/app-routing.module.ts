import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/components/pagina-nao-encontrada';
import { PessoaCadastroComponent } from './modules/pessoas/components/pessoa-cadastro';
import { PessoasPesquisaComponent } from './modules/pessoas/components/pessoas-pesquisa';

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  { path: 'pessoas', component: PessoasPesquisaComponent},
  { path: 'pessoas/novo', component: PessoaCadastroComponent},
  { path: 'pessoas/:codigo', component: PessoaCadastroComponent},
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  { path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
