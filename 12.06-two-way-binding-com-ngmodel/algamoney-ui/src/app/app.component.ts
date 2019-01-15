import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: string;

  constructor(profissao?: string) {
    this.profissao = profissao;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente('');
  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = 'Outra';

  salvar(form: NgForm) {

    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;
    console.log(form.value);
    console.log(this.cliente);
  }
}
