import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';

import { AuthService } from '../../services';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .subscribe(() => {
        this.messageService.add({ severity: 'success', detail: 'Login realizado com sucesso!' });
        this.router.navigate(['/dashboard']);
    }, error => this.errorHandler.handle(error));
  }

}
