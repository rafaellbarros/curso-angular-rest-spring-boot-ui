import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

import { Utils } from '@app/core/utils';
import { IAuthService } from './iauth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  private oauthTokenUrl: string;
  public jwtPayload: any;


  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) {
      this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
      this.carregaToken();
    }

  public get options() {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    return {
      headers: headers,
      withCredentials: true
    };
  }

  login(usuario: string, senha: string): Observable<void> {

    const options =  this.options;
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, options).pipe(map(resp => {

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

  obterNovoAccessToken(): Promise<void> {

    const options =  this.options;
    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body,
        options)
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);

        console.log('Novo access token criado!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = this.jwtHelper.tokenGetter();

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  public armazenarToken(token: string): void {
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
