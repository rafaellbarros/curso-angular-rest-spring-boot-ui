import { Component, OnInit, Input } from '@angular/core';
import { Contato } from '../../models';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pessoa-cadastro-contato',
  templateUrl: './pessoa-cadastro-contato.component.html',
  styleUrls: ['./pessoa-cadastro-contato.component.css']
})
export class PessoaCadastroContatoComponent implements OnInit {

  @Input()
  public contatos: Array<Contato>;

  public contato: Contato;
  public exbindoFormularioContato = false;
  contatoIndex: number;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  prepararNovoContato(): void {
    this.exbindoFormularioContato = true;
    this.contato = new Contato();
    this.contatoIndex = this.contatos.length;
  }

  prepararEdicaoContato(contato: Contato, index: number): void {
    this.contato = this.clonarContato(contato);
    this.exbindoFormularioContato = true;
    this.contatoIndex = index;
  }

  confirmarContato(form: FormControl): void {
    this.contatos[this.contatoIndex] = this.clonarContato(this.contato);
    this.exbindoFormularioContato = false;

    if (this.editando) {
      this.toastr.success('Contato alterado na lista com sucesso!');
    } else {
      this.toastr.success('Contato adicionado na lista com sucesso!');
    }

    form.reset();
  }

  removerContato(index: number): void {
    this.contatos.splice(index, 1);
  }

  clonarContato(contato: Contato): Contato {
    return new Contato(contato.codigo,
      contato.nome, contato.email, contato.telefone);
  }

  get editando() {
    return this.contato && this.contato.codigo;
  }

}
