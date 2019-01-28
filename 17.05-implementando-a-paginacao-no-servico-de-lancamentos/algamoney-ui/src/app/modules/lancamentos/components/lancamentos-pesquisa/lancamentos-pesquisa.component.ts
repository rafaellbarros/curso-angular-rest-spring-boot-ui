import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../../services';
import { Lancamento, LancamentoFiltro } from '../../models';


@Component({
  selector: 'lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  filtro = new LancamentoFiltro();
  lancamentos: Lancamento[] = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar(this.filtro).subscribe(resultado => {
      this.lancamentos = resultado.lancamentos;
    });
  }

}
