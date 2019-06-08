import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { PanelModule } from 'primeng/panel';

import { SharedModule } from '@app/shared';
import { PessoaCadastroComponent } from './components/pessoa-cadastro';
import { PessoasGridComponent } from './components/pessoas-grid';
import { PessoasPesquisaComponent } from './components/pessoas-pesquisa';
import { PessoasRoutingModule } from './pessoas.routing.module';



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
    PanelModule,

    SharedModule,
    PessoasRoutingModule

  ],
  exports: [],
})
export class PessoasModule { }
