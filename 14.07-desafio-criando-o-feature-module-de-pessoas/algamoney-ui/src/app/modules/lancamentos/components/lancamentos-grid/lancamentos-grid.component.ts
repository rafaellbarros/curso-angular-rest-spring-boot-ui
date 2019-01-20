import { Component, Input } from '@angular/core';

@Component({
  selector: 'lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent  {

  @Input() lancamentos = [];

}
