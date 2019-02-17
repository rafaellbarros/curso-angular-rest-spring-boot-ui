import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from '.';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service implements IService {

  private _http: HttpClient;
  private _baseUrl = 'http://localhost:8080';

  constructor(protected http: HttpClient) {
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

  public toJson = (obj: any) =>  JSON.parse(JSON.stringify(obj));

  httpGet = (urlResource: string, headers?: HttpHeaders, params?: HttpParams): Observable<any> =>
    this._http.get(`${this._baseUrl}/${urlResource}`, { headers, params })

  httpPost = (urlResource: string, object: any, headers?: HttpHeaders): Observable<any> =>
    this._http.post(`${this._baseUrl}/${urlResource}`, object, { headers })

  httpDelete = (urlResource: string, codigo: number, headers?: HttpHeaders): Observable<any> =>
    this._http.delete(`${this._baseUrl}/${urlResource}/${codigo}`, { headers })

  httpPut = (urlResource: string, object: any, headers?: HttpHeaders): Observable<any> =>
    this._http.put(`${this._baseUrl}/${urlResource}`, object, { headers })

}
