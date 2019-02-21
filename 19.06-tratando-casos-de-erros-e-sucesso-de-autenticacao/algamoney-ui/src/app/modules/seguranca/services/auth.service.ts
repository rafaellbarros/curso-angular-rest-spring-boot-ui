import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { IAuthService } from './iauth.service';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '@app/core/services/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) {
      this.carregaToken();
    }

  login(usuario: string, senha: string): Observable<void> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.oauthTokenUrl, body, { headers }).pipe(map(resp => {
      this.armazenarToken(resp['access_token']);
    }), catchError(resp => {
      if (resp.status === 400) {
        if (resp.error.error === 'invalid_grant') {
          return throwError('Usuário ou senha inválida');
        }
      }
      return throwError(resp);
    }));
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregaToken() {
    const token = this.jwtHelper.tokenGetter();

    if (token) {
      this.armazenarToken(token);
    }
  }
}
