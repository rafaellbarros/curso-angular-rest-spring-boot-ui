import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotAuthenticatedError } from '@app/modules/seguranca/money-http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {

      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {

      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof HttpErrorResponse
      && errorResponse.status >= 400 && errorResponse.status <= 499) {

      let errors;
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação.'
      }

      try {
        errors = errorResponse.error;

        msg = errors[0].mensagemUsuario;

      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(msg);
  }
}
