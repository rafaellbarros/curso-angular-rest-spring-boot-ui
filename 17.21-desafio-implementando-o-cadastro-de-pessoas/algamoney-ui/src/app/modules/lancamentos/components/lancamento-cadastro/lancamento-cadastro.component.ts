import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '@app/categorias';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';

import { FormControl } from '@angular/forms';

import { LancamentoService } from '@lancamentos/services';

import { ToastyService } from 'ng2-toasty';
import { PessoaService } from '@pessoas/services';
import { Lancamento } from '@lancamentos/models';

@Component({
  selector: 'lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();


  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private toaty: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.carregaCategorias();
    this.carregaPessoas();
  }

  salvar(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento).subscribe(resp => {
      this.toaty.success('Lançamento adicionando com sucesso!');

      form.reset();
      this.lancamento = new Lancamento();
    }, error => this.errorHandler.handle(error));
  }

  private carregaCategorias = () => this.categoriaService
    .listarTodas()
      .subscribe(
        categorias => this.categorias = categorias,
        error => this.errorHandler.handle(error)
      )

  private carregaPessoas = () => this.pessoaService
    .listarTodas()
      .subscribe(
        pessoas => this.pessoas = pessoas.map(pessoa => ({label: pessoa.nome, value: pessoa.codigo})),
        error => this.errorHandler.handle(error)
      )
}
