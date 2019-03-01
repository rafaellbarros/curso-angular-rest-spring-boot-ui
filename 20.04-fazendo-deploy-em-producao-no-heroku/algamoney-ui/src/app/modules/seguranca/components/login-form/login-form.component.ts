import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

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
    private toasty: ToastyService) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .subscribe(() => {
        this.toasty.success('Login realizado com sucesso!');
        this.router.navigate(['/lancamentos']);
    }, error => this.errorHandler.handle(error));
  }

}
