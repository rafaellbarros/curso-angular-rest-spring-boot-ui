import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  consultar = (): Observable<any> => this.http.get(`${this.BASE_URL}/cidades`);

}
