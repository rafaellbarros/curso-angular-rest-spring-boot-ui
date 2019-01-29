import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { LancamentoFiltro } from '../../models/lancamento-filtro.model';

@Component({
  selector: 'lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent  {

  @Input() lancamentos = [];

  @Input() filtro: LancamentoFiltro;

  @Input() totalRegistros: number;

  @Output() eventAoMudarPagina: EventEmitter<any> = new EventEmitter();

  aoMudarPagina(event: LazyLoadEvent) {
    this.eventAoMudarPagina.emit(event);
  }

}
