import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { Lancamento } from '@lancamentos/models';
import { LancamentoService } from '@lancamentos/services';
import { PessoaService } from '@pessoas/services';
import { CategoriaService } from '@shared/services/categorias';
import { ToastyService } from 'ng2-toasty';


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
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private toaty: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    const { codigo } = this.route.snapshot.params;

    this.setTitle('Novo lançamento');

    if (codigo) { this.carregarLancamento(codigo); }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  adicionarLancamento(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento).subscribe(lancamento => {
      this.toaty.success('Lançamento adicionando com sucesso!');
      this.router.navigate(['/lancamentos', lancamento.codigo]);
    }, error => this.errorHandler.handle(error));
  }

  atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento).subscribe(lancamento => {
      this.lancamento = lancamento;

      this.toaty.success('Lançamento alterado com sucesso!');
      this.atualizarTituloEdicao();
    }, error => this.errorHandler.handle(error));
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function () {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/novo']);
  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

  private carregarLancamento = (codigo: number) =>
    this.lancamentoService.buscarPorCodigo(codigo)
      .subscribe(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao();
      }, error => this.errorHandler.handle(error))

  private carregarCategorias = () => this.categoriaService
    .listarTodas()
      .subscribe(
        categorias => this.categorias = categorias.map(categoria => ({label: categoria.nome, value: categoria.codigo})),
        error => this.errorHandler.handle(error)
      )

  private carregarPessoas = () => this.pessoaService
    .listarTodas()
      .subscribe(
        pessoas => this.pessoas = pessoas.map(pessoa => ({label: pessoa.nome, value: pessoa.codigo})),
        error => this.errorHandler.handle(error)
      )

  private atualizarTituloEdicao = () =>
    this.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`)

  private setTitle = (title: string) => this.title.setTitle(title);

}
