import { Injectable } from '@angular/core';
import { IService } from './iservice';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

export class ServiceAbstrat<T> implements IService<T> {

  private _http: HttpClient;
  private _baseUrl: string;

  constructor(private http: HttpClient, private baseUrl: string) {
    this._http = this.http;
    this._baseUrl = this.baseUrl;
  }

  read = (urlResource: string): Observable<T> => this._http.get<T>(`${this._baseUrl}/${urlResource}`)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao consultar.`)))

  create = (urlResource: string, object: T): Observable<T> => this._http.post<T>(`${this._baseUrl}/${urlResource}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao adicionar ${object['id']}.`)))

  delete = (urlResource: string, object: T): Observable<T> => this._http.delete<T>(`${this._baseUrl}/${urlResource}/${object['id']}`)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao excluir  ${object['id']}.`)))

  update = (urlResource: string, object: T): Observable<T> => this._http.put<T>(`${this._baseUrl}/${urlResource}/${object['id']}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao alterar ${object['id']}.`)))

}
