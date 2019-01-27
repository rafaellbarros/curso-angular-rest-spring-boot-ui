import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../../services';
import { Lancamento } from '../../models';


@Component({
  selector: 'lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  descricao: string;
  lancamentos: Lancamento[] = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar({descricao: this.descricao}).subscribe(resp => this.lancamentos = resp['content']);
  }

}
