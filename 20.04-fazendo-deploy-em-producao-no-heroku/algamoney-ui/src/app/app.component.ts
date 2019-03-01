import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algamoney-ui';

  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router) {
    this.toastyConfig.theme = 'bootstrap';
  }

  get exibindoNavBar() {
    return this.router.url !== '/login';
  }

}
