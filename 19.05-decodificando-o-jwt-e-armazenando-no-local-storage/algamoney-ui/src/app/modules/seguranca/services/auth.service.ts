import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { IAuthService } from './iauth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService ) {
      this.carregaToken();
    }

  login(usuario: string, senha: string): any {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.oauthTokenUrl, body, { headers }).subscribe(resp => {
      // const access_token  = resp;

      console.log('resp -> ', resp);

      this.armazenarToken(resp['access_token']);



    }, error => {
      console.log('error -> ', error);
    });
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
