import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosPesquisaComponent } from './modules/lancamentos/components/lancamentos-pesquisa';
import { LancamentoCadastroComponent } from './modules/lancamentos/components/lancamento-cadastro';
import { PessoasPesquisaComponent } from './modules/pessoas/components/pessoas-pesquisa';
import { PessoaCadastroComponent } from './modules/pessoas/components/pessoa-cadastro';
import { PaginaNaoEncontradaComponent } from './core/components/pagina-nao-encontrada';

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  { path: 'lancamentos', component: LancamentosPesquisaComponent},
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent},
  { path: 'lancamentos/:codigo', component: LancamentoCadastroComponent},
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
