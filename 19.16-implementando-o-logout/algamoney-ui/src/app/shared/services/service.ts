import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from '.';
import { Observable } from 'rxjs';
import { MoneyHttp } from '@app/modules/seguranca/money-http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service implements IService {

  private _http: HttpClient;
  public _baseUrl = 'http://localhost:8080';

  constructor(private http: MoneyHttp) {
    this._http = this.http;
  }

  public get headersAuthorization() {
    return new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
  }

  public get headersAuthorizationContentTypeJson() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  httpGet = (urlResource: string, headers?: HttpHeaders, params?: HttpParams): any  =>
    this._http.get<any>(`${this._baseUrl}/${urlResource}`, { headers, params })

  httpPost = (urlResource: string, object: any, headers?: HttpHeaders): Observable<any> =>
    this._http.post<any>(`${this._baseUrl}/${urlResource}`, object, { headers })

  httpDelete = (urlResource: string, codigo: number, headers?: HttpHeaders): Observable<any> =>
    this._http.delete<any>(`${this._baseUrl}/${urlResource}/${codigo}`, { headers })

  httpPut = (urlResource: string, object: any, headers?: HttpHeaders): Observable<any> =>
    this._http.put<any>(`${this._baseUrl}/${urlResource}`, object, { headers })

}
