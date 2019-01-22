import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private BASE_URL = 'http://localhost:3000/cidades';

  constructor(private http: HttpClient) { }

  consultar = (): Observable<any> => this.http.get(this.BASE_URL);

  adicionar = (cidade: any): Observable<any> => this.http.post(this.BASE_URL, cidade);

  excluir = (id: number): Observable<void> => this.http.delete(`${this.BASE_URL}/${id}`).pipe(map(resp => {}));

  atualizar = (cidade: any): Observable<any> => this.http.put(`${this.BASE_URL}/${cidade.id}`, cidade);

}
