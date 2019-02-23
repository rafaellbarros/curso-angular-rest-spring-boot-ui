import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

import { Utils } from '@app/core/utils';
import { IAuthService } from './iauth.service';

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

      const { access_token } = Utils.json(resp);

      this.armazenarToken(access_token);

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
