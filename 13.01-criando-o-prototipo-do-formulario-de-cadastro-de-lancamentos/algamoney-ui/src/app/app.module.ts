import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { AppComponent } from './app.component';
import { LancamentoCadastroComponent } from './components/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './components/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PessoasPesquisaComponent } from './components/pessoas-pesquisa/pessoas-pesquisa.component';



@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
