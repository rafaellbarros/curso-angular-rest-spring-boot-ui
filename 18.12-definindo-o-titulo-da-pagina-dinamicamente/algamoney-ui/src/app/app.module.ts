import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

import { LancamentosModule } from './modules/lancamentos';
import { LancamentoCadastroComponent } from './modules/lancamentos/components/lancamento-cadastro';
import { LancamentosPesquisaComponent } from './modules/lancamentos/components/lancamentos-pesquisa';
import { PessoasModule } from './modules/pessoas';
import { PessoaCadastroComponent } from './modules/pessoas/components/pessoa-cadastro';
import { PessoasPesquisaComponent } from './modules/pessoas/components/pessoas-pesquisa';
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
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),

    CoreModule,
    LancamentosModule,
    PessoasModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
