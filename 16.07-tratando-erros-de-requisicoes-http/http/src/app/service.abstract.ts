import { Injectable } from '@angular/core';
import { IServiceAbstract } from './iservice.abstract';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceAbstrat<T> implements IServiceAbstract<T> {

  private _http: HttpClient;
  private _baseUrl = 'http://localhost:3000';

  constructor(protected http: HttpClient) {
    this._http = this.http;
  }

  httpGet = (urlResource: string): Observable<T> => this._http.get<T>(`${this._baseUrl}/${urlResource}`)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao consultar.`)))

  httpPost = (urlResource: string, object: T): Observable<T> => this._http.post<T>(`${this._baseUrl}/${urlResource}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao adicionar ${object['id']}.`)))

  httpDelete = (urlResource: string, object: T): Observable<T> => this._http.delete<T>(`${this._baseUrl}/${urlResource}/${object['id']}`)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao excluir  ${object['id']}.`)))

  httpPut = (urlResource: string, object: T): Observable<T> => this._http.put<T>(`${this._baseUrl}/${urlResource}/${object['id']}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao alterar ${object['id']}.`)))

}
