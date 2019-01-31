import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { LancamentoFiltro, Lancamento } from '../../models';

import { LancamentoService } from '../../services/lancamento.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit  {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos: Lancamento[] = [];
  grid: any;

  constructor(
    private lancamentoService: LancamentoService,
    private toasty: ToastyService) { }

  ngOnInit() { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro).subscribe(resultado => {
      this.totalRegistros = resultado.total;
      this.lancamentos = resultado.lancamentos;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(lancamento: Lancamento) {
    this.lancamentoService.excluir(lancamento.codigo).subscribe(resp => {
      this.grid.first = 0;
      this.pesquisar();
      this.toasty.success('Lançamento excluído com sucesso!');
    });
  }

  receiverEventChildTabela(event) {
    this.grid = event;
  }
}
