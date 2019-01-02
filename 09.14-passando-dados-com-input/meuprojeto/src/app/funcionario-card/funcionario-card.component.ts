import { Component, Input } from '@angular/core';

@Component({
  selector: 'funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent  {

  @Input()
  funcionario: any;

}
