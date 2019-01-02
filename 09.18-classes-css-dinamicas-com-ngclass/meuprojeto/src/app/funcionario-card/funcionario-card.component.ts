import { Component, Input } from '@angular/core';

@Component({
  selector: 'funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent  {

  @Input()
  funcionario: any;

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  get getEstiloCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

  get getClassesCss() {
    return ['badge', 'badge-default', 'badge-primary']
  }

}
