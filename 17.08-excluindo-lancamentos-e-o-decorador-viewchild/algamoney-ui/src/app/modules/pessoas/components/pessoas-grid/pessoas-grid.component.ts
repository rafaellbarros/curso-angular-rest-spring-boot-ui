import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PessoaFiltro } from '../../models';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent  {

  @Input() pessoas = [];

  @Input() filtro: PessoaFiltro;

  @Input() totalRegistros: number;

  @Output() eventAoMudarPagina: EventEmitter<any> = new EventEmitter();

  aoMudarPagina(event: LazyLoadEvent) {
    this.eventAoMudarPagina.emit(event);
  }
}
