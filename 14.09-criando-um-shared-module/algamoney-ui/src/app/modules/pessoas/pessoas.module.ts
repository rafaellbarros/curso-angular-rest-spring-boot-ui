import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { PessoaCadastroComponent } from './components/pessoa-cadastro';
import { PessoasGridComponent } from './components/pessoas-grid';
import { PessoasPesquisaComponent } from './components/pessoas-pesquisa';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule

  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
  ],
})
export class PessoasModule { }
