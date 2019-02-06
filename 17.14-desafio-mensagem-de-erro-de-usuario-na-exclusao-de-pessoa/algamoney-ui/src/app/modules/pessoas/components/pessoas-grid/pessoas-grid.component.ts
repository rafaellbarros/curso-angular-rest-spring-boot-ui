import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { Pessoa, PessoaFiltro } from '../../models';

@Component({
  selector: 'pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent  implements AfterViewInit {

  @ViewChild('tabela') grid;

  @Input() pessoas = [];

  @Input() filtro: PessoaFiltro;

  @Input() totalRegistros: number;

  @Output() eventAoMudarPagina: EventEmitter<any> = new EventEmitter();

  @Output() eventConfirmarExclusao: EventEmitter<any> = new EventEmitter();

  @Output() eventViewChildTabela: EventEmitter<any> = new EventEmitter();

  ngAfterViewInit() {
    this.eventViewChildTabela.emit(this.grid);
  }

  aoMudarPagina = (event: LazyLoadEvent) => this.eventAoMudarPagina.emit(event);

  confirmarExclusao = (pessoa: Pessoa) => this.eventConfirmarExclusao.emit(pessoa);

}
