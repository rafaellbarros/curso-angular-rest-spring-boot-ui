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

  get getEstiloCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

}
