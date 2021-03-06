import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';

import { Pessoa } from '../../models';
import { PessoaFiltro } from '../../models/pessoa-filtro.model';
import { PessoaService } from '../../services';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';


@Component({
  selector: 'pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas: Pessoa[] = [];
  grid: any;

  constructor(
    private title: Title,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService ,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de pessoas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro).subscribe(resultado => {
      this.totalRegistros = resultado.total;
      this.pessoas = resultado.pessoas;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: Pessoa) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: Pessoa) {
    this.pessoaService.excluir(pessoa.codigo).subscribe(resp => {
      this.grid.first = 0;
      this.pesquisar();
      this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' });
    },
    error => this.errorHandler.handle(error));
  }

  alternarStatus(pessoa: Pessoa) {

    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus).subscribe(resp => {
      const status = pessoa.ativo ? 'desativada' : 'ativada';

      pessoa.ativo = novoStatus;

      this.messageService.add({ severity: 'success', detail: `Pessoa ${status} com sucesso!` });
    },
    error => this.errorHandler.handle(error));
  }

  receiverEventChildTabela(event) {
    this.grid = event;
  }

}
