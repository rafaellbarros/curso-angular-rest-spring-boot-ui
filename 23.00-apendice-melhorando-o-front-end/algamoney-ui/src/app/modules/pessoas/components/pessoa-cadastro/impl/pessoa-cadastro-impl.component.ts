import { OnInit, Output, EventEmitter } from '@angular/core';
import { IPessoaCadastroComponentImpl } from '.';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '@app/modules/pessoas/services';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { Pessoa, Contato } from '@app/modules/pessoas/models';

export class PessoaCadastroComponentImpl implements OnInit, IPessoaCadastroComponentImpl {

  public pessoa = new Pessoa();
  public exbindoFormularioContato = false;
  public contato: Contato;
  contatoIndex: number;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.setTitle('Nova pessoa');
    const { codigo } = this.route.snapshot.params;
    if (codigo) { this.carregarPessoa(codigo); }
  }

  prepararNovoContato(): void {
    this.exbindoFormularioContato = true;
    this.contato = new Contato();
    this.contatoIndex = this.pessoa.contatos.length;
  }

  prepararEdicaoContato(contato: Contato, index: number): void {
    this.contato = this.clonarContato(contato);
    this.exbindoFormularioContato = true;
    this.contatoIndex = index;
  }

  confirmarContato(form: FormControl): void {
    this.pessoa.contatos[this.contatoIndex] = this.clonarContato(this.contato);
    this.exbindoFormularioContato = false;

    if (this.contato.codigo != null) {
      this.toastr.success('Contato alterado na lista com sucesso!');
    } else {
      this.toastr.success('Contato adicionado na lista com sucesso!');
    }

    form.reset();
  }

  removerContato(index: number): void {
    this.pessoa.contatos.splice(index, 1);
  }

  clonarContato(contato: Contato): Contato {
    return new Contato(contato.codigo,
      contato.nome, contato.email, contato.telefone);
  }

  salvar(form: FormControl): void {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl): void {
    this.pessoaService.adicionar(this.pessoa).subscribe(pessoa => {
      this.toastr.success('Pessoa adicionada com sucesso!');
      this.router.navigate(['/pessoas', pessoa.codigo]);
    }, error => this.errorHandler.handle(error));
  }

  atualizarPessoa(form: FormControl): void {
    this.pessoaService.atualizar(this.pessoa).subscribe(pessoa => {
      this.pessoa = this.pessoa;
      this.toastr.success('Pessoa alterada com sucesso!');
      this.atualizarTituloEdicao();
    }, error => this.errorHandler.handle(error));
  }

  nova(form: FormControl): void {
    form.reset();

    setTimeout(function () {
      this.pessoa = new Pessoa();
    }.bind(this), 1);

    this.router.navigate(['/pessoas/nova']);
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }


  private carregarPessoa = (codigo: number) =>
    this.pessoaService.buscarPorCodigo(codigo)
      .subscribe(pessoa => {
       this.pessoa = pessoa;
       this.atualizarTituloEdicao();
      }, error => this.errorHandler.handle(error))

  private atualizarTituloEdicao = () =>
  this.setTitle(`Edição de pessoa: ${this.pessoa.nome}`)

  private setTitle = (title: string) => this.title.setTitle(title);

}
