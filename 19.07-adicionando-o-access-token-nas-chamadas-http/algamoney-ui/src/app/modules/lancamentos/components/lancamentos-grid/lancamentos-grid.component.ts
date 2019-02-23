import { Component, EventEmitter, Input, Output, AfterViewInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { LancamentoFiltro } from '../../models/lancamento-filtro.model';
import { Lancamento } from '../../models';


@Component({
  selector: 'lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent  implements AfterViewInit {

  @ViewChild('tabela') grid;

  @Input() lancamentos = [];

  @Input() filtro: LancamentoFiltro;

  @Input() totalRegistros: number;

  @Output() eventAoMudarPagina: EventEmitter<any> = new EventEmitter();

  @Output() eventConfirmarExclusao: EventEmitter<any> = new EventEmitter();

  @Output() eventViewChildTabela: EventEmitter<any> = new EventEmitter();


  ngAfterViewInit() {
    this.eventViewChildTabela.emit(this.grid);
  }

  aoMudarPagina(event: LazyLoadEvent) {
    this.eventAoMudarPagina.emit(event);
  }

  confirmarExclusao(lancamento: Lancamento) {
    this.eventConfirmarExclusao.emit(lancamento);
  }
}
