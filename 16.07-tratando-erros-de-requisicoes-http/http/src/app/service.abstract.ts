import { Injectable } from '@angular/core';
import { IService } from './iservice';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceAbstrat implements IService {

  private _http: HttpClient;
  private _baseUrl: string;

  constructor(protected http: HttpClient, protected baseUrl: string) {
    this._http = this.http;
    this._baseUrl = this.baseUrl;
  }

  consultar = (): Observable<any> => this._http.get(this._baseUrl)
  .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao consultar.`)));

  adicionar = (object: any): Observable<any> => this._http.post(this._baseUrl, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao adicionar ${object.id}.`)));

  excluir = (id: number): Observable<any> => this._http.delete(`${this._baseUrl}/${id}`)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao excluir ${id}.`)));

  atualizar = (object: any): Observable<any> => this._http.put(`${this._baseUrl}/${object.id}`, object)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao alterar ${object.id}.`)));

}
