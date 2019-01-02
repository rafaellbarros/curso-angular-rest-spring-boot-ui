import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprojeto';
  nome = 'Rafael';
  idade = 20;


  getIdade() {
    return this.idade;
  }
}
