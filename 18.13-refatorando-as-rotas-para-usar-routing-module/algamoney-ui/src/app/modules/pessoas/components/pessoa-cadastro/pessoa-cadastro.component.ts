import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { Pessoa } from '@app/modules/pessoas/models';
import { PessoaService } from '@pessoas/services';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa).subscribe(resp => {
      this.toasty.success('Pessoa adicionada com sucesso!');

      form.reset();
      this.pessoa = new Pessoa();
    }, error => this.errorHandler.handle(error));
  }
}
