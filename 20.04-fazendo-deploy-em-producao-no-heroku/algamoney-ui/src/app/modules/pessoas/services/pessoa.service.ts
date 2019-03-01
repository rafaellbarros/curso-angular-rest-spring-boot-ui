import { environment } from './../../../../environments/environment';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '@app/shared/services';
import { Pessoa } from '@pessoas/models';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { IPessoaService } from '.';
import { PessoaFiltro } from '../models';
import { Utils } from '@app/core/utils';
import { MoneyHttp } from '@app/modules/seguranca/money-http';


@Injectable({
  providedIn: 'root'
})
export class PessoaService implements IPessoaService {

  private pessoasUrl: string;

  constructor(private http: MoneyHttp) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`;
  }

  pesquisar = (filtro: PessoaFiltro): Observable<any> => {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
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
}
