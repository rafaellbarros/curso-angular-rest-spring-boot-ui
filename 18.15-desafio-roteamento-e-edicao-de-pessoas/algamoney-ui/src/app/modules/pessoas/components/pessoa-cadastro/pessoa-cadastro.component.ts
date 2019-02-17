import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { Pessoa } from '@app/modules/pessoas/models';
import { PessoaService } from '@pessoas/services';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.setTitle('Nova pessoa');
    const { codigo } = this.route.snapshot.params;
    if (codigo) { this.carregarPessoa(codigo); }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa).subscribe(pessoa => {
      this.toasty.success('Pessoa adicionada com sucesso!');
      this.router.navigate(['/pessoas', pessoa.codigo]);
    }, error => this.errorHandler.handle(error));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa).subscribe(pessoa => {
      this.pessoa = this.pessoa;

      this.toasty.success('Pessoa alterada com sucesso!');
      this.atualizarTituloEdicao();
    }, error => this.errorHandler.handle(error));
  }

  nova(form: FormControl) {
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
        this.atualizarTituloEdicao()
      }, error => this.errorHandler.handle(error))

  private atualizarTituloEdicao = () =>
    this.setTitle(`Edição de pessoa: ${this.pessoa.nome}`)

  private setTitle = (title: string) => this.title.setTitle(title);
}
