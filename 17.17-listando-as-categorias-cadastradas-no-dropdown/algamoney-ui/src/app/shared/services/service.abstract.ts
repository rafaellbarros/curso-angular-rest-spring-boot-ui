import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IService } from '.';


@Injectable({
  providedIn: 'root'
})
export abstract class Service implements IService {

  private _http: HttpClient;
  private _baseUrl = 'http://localhost:8080';
  private _headers =  new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  constructor(protected http: HttpClient) {
    this._http = this.http;
  }

  protected get httpHeaders() { return this._headers; }

  httpGet = (urlResource: string, headers?: HttpHeaders, params?: HttpParams) =>
    this._http.get(`${this._baseUrl}/${urlResource}`, { headers, params })

  httpPost = (urlResource: string, object: any) =>
    this._http.post(`${this._baseUrl}/${urlResource}`, object)

  httpDelete = (urlResource: string, codigo: number, headers?: HttpHeaders) =>
    this._http.delete(`${this._baseUrl}/${urlResource}/${codigo}`, { headers })

  httpPut = (urlResource: string, object: any, headers?: HttpHeaders) =>
    this._http.put(`${this._baseUrl}/${urlResource}`, object, { headers })

}
