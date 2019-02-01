import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Lancamento, LancamentoFiltro } from '../../models';
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
  grid: any;

  constructor(
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService) { }

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

  confirmarExclusao(lancamento: Lancamento) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
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
