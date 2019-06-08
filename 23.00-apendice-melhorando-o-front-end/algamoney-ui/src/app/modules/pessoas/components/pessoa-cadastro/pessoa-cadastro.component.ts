import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { PessoaService } from '@pessoas/services';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PessoaCadastroComponentImpl, IPessoaCadastroComponentImpl } from './impl';
import { Contato } from '../../models';


@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit, IPessoaCadastroComponentImpl  {

  public impl: PessoaCadastroComponentImpl;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService
  ) {
    this.impl = new PessoaCadastroComponentImpl(
      title,
      route,
      router,
      pessoaService,
      toastr,
      errorHandler);
  }

  ngOnInit(): void {
    this.impl.ngOnInit();
  }

  prepararNovoContato(): void {
    this.impl.prepararNovoContato();
  }

  prepararEdicaoContato(contato: Contato, index: number): void {
    this.impl.prepararEdicaoContato(contato, index);
  }

  confirmarContato(form: FormControl): void {
    this.impl.confirmarContato(form);
  }

  removerContato(index: number): void {
    this.impl.removerContato(index);
  }

  salvar(form: FormControl): void {
    this.impl.salvar(form);
  }

  adicionarPessoa(form: FormControl): void {
    this.impl.adicionarPessoa(form);
  }

  atualizarPessoa(form: FormControl): void {
    this.impl.atualizarPessoa(form);
  }

  nova(form: FormControl): void {
    this.impl.nova(form);
  }
}
