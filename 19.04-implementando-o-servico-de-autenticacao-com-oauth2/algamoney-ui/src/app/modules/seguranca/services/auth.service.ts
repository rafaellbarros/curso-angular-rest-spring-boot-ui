import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAuthService } from './iauth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): any {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.oauthTokenUrl, body, { headers }).subscribe(resp => {
      console.log('resp -> ', resp);
    }, error => {
      console.log('error -> ', error);
    });
  }
}
