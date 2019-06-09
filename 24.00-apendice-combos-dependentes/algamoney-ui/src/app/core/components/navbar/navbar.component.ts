import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';

import { LogoutService } from '../../../modules/seguranca/services/logout.service';
import { AuthService } from '@app/modules/seguranca/services';
import { ErrorHandlerService } from '../../services/error-handler.service';

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
    private messageService: MessageService) { }

  ngOnInit() { }

  logout() {
    this.logoutService.logout().subscribe(() => {
      this.messageService.add({ severity: 'success', detail: 'Logout realizado com sucesso!' });
      this.router.navigate(['/login']);
    }, error => this.errorHandler.handle(error));
  }
}
