import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .subscribe(() => {
        this.toastr.success('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']);
    }, error => this.errorHandler.handle(error));
  }

}
