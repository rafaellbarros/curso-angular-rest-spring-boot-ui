import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/seguranca/services';
import { LogoutService } from '../../../modules/seguranca/services/logout.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private toasty: ToastyService) { }

  ngOnInit() { }

  logout() {
    this.logoutService.logout().subscribe(() => {
      this.toasty.success('Logout realizado com sucesso!');
      this.router.navigate(['/login']);
    }, error => this.errorHandler.handle(error));
  }
}
