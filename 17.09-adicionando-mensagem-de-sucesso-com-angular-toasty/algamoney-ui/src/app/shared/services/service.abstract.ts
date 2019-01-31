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

  constructor(protected http: HttpClient) {
    this._http = this.http;
  }

  httpGet (urlResource: string, headers?: HttpHeaders, params?: HttpParams) {
    return this._http.get(`${this._baseUrl}/${urlResource}`, { headers, params })
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error: httpGet, Status: ${err.status}`)));
  }

  httpPost = (urlResource: string, object: any) => this._http.post(`${this._baseUrl}/${urlResource}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error: httpPost, Status: ${err.status}`)))

  httpDelete = (urlResource: string, codigo: number, headers?: HttpHeaders) => {
    return this._http.delete(`${this._baseUrl}/${urlResource}/${codigo}`, { headers })
    .pipe(map(resp => resp, error => console.error(error)), catchError(err =>  throwError(`Error: httpDelete, Status: ${err.status}`)));
  }

  httpPut = (urlResource: string, object: any) => this._http.put(`${this._baseUrl}/${urlResource}/${object['id']}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error: httpPut, Status: ${err.status}`)))

}
