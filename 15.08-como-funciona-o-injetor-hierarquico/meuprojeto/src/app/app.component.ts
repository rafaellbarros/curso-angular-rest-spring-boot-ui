import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './modules/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) {
  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }

}
