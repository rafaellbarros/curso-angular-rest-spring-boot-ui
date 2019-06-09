import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { ErrorHandlerService } from '../../../../core/services/error-handler.service';

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
  lancamentos?: Lancamento[] = [];
  grid: any;

  constructor(
    private title: Title,
    private lancamentoService: LancamentoService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamentos');
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro).subscribe(resultado => {

      this.totalRegistros = resultado.total;
      this.lancamentos = resultado.lancamentos;

    },
    error => this.errorHandler.handle(error));
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
      this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' });
    },
    error => this.errorHandler.handle(error));
  }

  receiverEventChildTabela(event) {
    this.grid = event;
  }
}
