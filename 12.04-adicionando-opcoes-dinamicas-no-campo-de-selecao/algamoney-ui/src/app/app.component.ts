import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Empresário', 'Outro']; 

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
  }
}
