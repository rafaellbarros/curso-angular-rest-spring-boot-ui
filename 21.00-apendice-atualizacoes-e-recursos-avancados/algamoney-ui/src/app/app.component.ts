import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algamoney-ui';

  constructor(
    private router: Router) {
  }

  get exibindoNavBar() {
    return this.router.url !== '/login';
  }

}
