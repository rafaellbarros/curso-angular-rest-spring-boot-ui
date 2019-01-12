import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Rafael Barros';
  dataAniversario = new Date(1988, 11, 29);
  preco = 12855.32;
  troco = 0.57392;
}
