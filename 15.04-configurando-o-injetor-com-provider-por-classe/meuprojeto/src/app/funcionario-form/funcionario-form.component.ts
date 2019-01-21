import { Component, EventEmitter, Output } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  constructor(private funcionarioService: FuncionarioService) {

  }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);
  }

}
