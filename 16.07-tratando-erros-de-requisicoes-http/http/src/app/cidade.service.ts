import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Cidade } from './cidade.interface';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private BASE_URL = 'http://localhost:3000/cidades';

  constructor(private http: HttpClient) { }

  consultar = (): Observable<Cidade[]> => this.http.get<Cidade[]>(this.BASE_URL);

  adicionar = (cidade: Cidade): Observable<Cidade> => this.http.post<Cidade>(this.BASE_URL, cidade);

  excluir = (id: number): Observable<void> => this.http.delete(`${this.BASE_URL}/${id}`)
    .pipe(map(resp => {}));

  atualizar = (cidade: Cidade): Observable<Cidade> => this.http.put<Cidade>(`${this.BASE_URL}/${cidade.id}`, cidade)
    .pipe(map(resp => resp), catchError(err =>  throwError(`Error ao alterar cidade ${cidade.id}.`)));

}
