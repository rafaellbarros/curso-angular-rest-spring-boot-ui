import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { LancamentoFiltro } from '../../models';
import { Lancamento } from '../../models/lancamento.model';
import { LancamentoService } from '../../services/lancamento.service';

@Component({
  selector: 'lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit  {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos: Lancamento[] = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {

  }

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
}
