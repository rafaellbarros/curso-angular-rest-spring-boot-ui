import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '@app/categorias';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { PessoaService } from '../../../pessoas/services/pessoa.service';
import { Lancamento } from '../../models';
import { FormControl } from '@angular/forms';


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
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.carregaCategorias();
    this.carregaPessoas();
  }

  salvar(form: FormControl) {
    console.log(this.lancamento);
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
