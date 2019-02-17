import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

import { LancamentosModule } from './modules/lancamentos';
import { LancamentoCadastroComponent } from './modules/lancamentos/components/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './modules/lancamentos/components/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasModule } from './modules/pessoas';
import { PessoaCadastroComponent } from './modules/pessoas/components/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './modules/pessoas/components/pessoas-pesquisa/pessoas-pesquisa.component';


const routes: Routes = [
  { path: 'lancamentos', component: LancamentosPesquisaComponent},
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent},
  { path: 'lancamentos/:codigo', component: LancamentoCadastroComponent},
  { path: 'pessoas', component: PessoasPesquisaComponent},
  { path: 'pessoas/novo', component: PessoaCadastroComponent},
  { path: 'pessoas/:codigo', component: PessoaCadastroComponent},
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
