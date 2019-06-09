import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

import { MoneyHttp } from '@app/modules/seguranca/money-http';
import { Pessoa, Estado, Cidade } from '@pessoas/models';
import { PessoaFiltro } from '../models';


@Injectable({
  providedIn: 'root'
})
export class PessoaService  {

  private pessoasUrl: string;
  private cidadesUrl: string;
  private estadosUrl: string;

  constructor(private http: MoneyHttp) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
    this.cidadesUrl = `${environment.apiUrl}/cidades`;
    this.estadosUrl = `${environment.apiUrl}/estados`;
  }

  pesquisar = (filtro: PessoaFiltro): Observable<any> => {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(this.pessoasUrl, { params }).pipe(map(resp => {

      const pessoas = resp['content'];
      const total = resp['totalElements'];
      const resultado = {
        pessoas,
        total,
      };
      return resultado;
    }));
  }

  listarTodas = (): Observable<any> => {
    return this.http.get<any>(this.pessoasUrl).pipe(map(pessoas => {
        const { content } = pessoas;
        return content;
    }));
  }

  excluir = (codigo: number): Observable<void> =>
    this.http.delete(`${this.pessoasUrl}/${codigo}`).pipe(map(() => null))

  mudarStatus = (codigo: number, novoStatus: boolean) => {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {
      headers
    };
    return this.http.put<any>(`${this.pessoasUrl}/${codigo}/ativo`, novoStatus, options).pipe(map(() => null));
  }

  adicionar = (pessoa: Pessoa): Observable<Pessoa> => {
    return this.http.post<Pessoa>(this.pessoasUrl, pessoa);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.pessoasUrl}/${pessoa.codigo}`, pessoa);
  }

  buscarPorCodigo(codigo: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.pessoasUrl}/${codigo}`);
  }

  listarEstados = (): Observable<Estado[]> => this.http.get(this.estadosUrl);

  pesquisarCidades(estado): Observable<Cidade[]> {

    let params = new HttpParams();
    params = params.append('estado', estado);

    return this.http.get(this.cidadesUrl, { params });
  }
}
