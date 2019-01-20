import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ngx-currency-mask';
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { LancamentoCadastroComponent } from './components/lancamento-cadastro';
import { LancamentosGridComponent } from './components/lancamentos-grid';
import { LancamentosPesquisaComponent } from './components/lancamentos-pesquisa';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,

    SharedModule
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
})
export class LancamentosModule { }
