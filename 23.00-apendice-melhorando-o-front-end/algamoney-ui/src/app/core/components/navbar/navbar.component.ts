import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/seguranca/services';
import { LogoutService } from '../../../modules/seguranca/services/logout.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() { }

  logout() {
    this.logoutService.logout().subscribe(() => {
      this.toastr.success('Logout realizado com sucesso!');
      this.router.navigate(['/login']);
    }, error => this.errorHandler.handle(error));
  }
}
