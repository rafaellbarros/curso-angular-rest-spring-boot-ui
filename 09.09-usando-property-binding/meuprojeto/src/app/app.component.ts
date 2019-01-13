import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Rafael';

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    const numero = Math.round(Math.random() * 100);
    this.nome = 'Rafael ' + numero;
  }

  alterarNome(event: any) {
    // console.log(event);
    this.nome = event.target.value;
  }
}