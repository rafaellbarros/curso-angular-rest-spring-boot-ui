import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent  {

  @Input() pessoas = [];

}
