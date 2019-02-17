import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasPesquisaComponent } from './components/pessoas-pesquisa';
import { PessoaCadastroComponent } from './components/pessoa-cadastro';

const routes: Routes = [
  { path: 'pessoas', component: PessoasPesquisaComponent},
  { path: 'pessoas/nova', component: PessoaCadastroComponent},
  { path: 'pessoas/:codigo', component: PessoaCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule {}
