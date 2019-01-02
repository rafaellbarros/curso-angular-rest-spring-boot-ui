import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  ultimoId = 0;
  nome = 'Rafael';
  adicionado = false;

  @Output('onFormReady') funcionarioAdicionado = new EventEmitter();


  adicionar() {
    console.log(`Adicionando: ${this.nome}`);
    this.adicionado = true;
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}
