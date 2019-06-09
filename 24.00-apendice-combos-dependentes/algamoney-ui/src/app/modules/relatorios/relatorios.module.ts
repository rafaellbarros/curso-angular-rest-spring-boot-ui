import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/components/calendar/calendar';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from '@app/shared';
import { RelatorioLancamentosComponent } from './components/relatorio-lancamentos/relatorio-lancamentos.component';

@NgModule({
  declarations: [RelatorioLancamentosComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,

    SharedModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
