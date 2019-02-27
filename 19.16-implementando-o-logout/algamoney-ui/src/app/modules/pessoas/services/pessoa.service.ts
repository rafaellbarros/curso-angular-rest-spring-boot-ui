
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

  private urlResource = 'pessoas';

  constructor(private http: MoneyHttp) { }

  pesquisar = (filtro: PessoaFiltro): Observable<any> => {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get<any>(`${Service._baseUrl}/${this.urlResource}`, { params }).pipe(map(resp => {

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
    return this.http.get<any>(`${Service._baseUrl}/${this.urlResource}`)
      .pipe(map(pessoas => {
        const { content } = pessoas;
        return content;
      }));
  }

  excluir = (codigo: number): Observable<void> =>
    this.http.delete(`${Service._baseUrl}/${this.urlResource}/${codigo}`).pipe(map(() => null))

  mudarStatus = (codigo: number, novoStatus: boolean) => {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {
      headers
    };
    return this.http.put<any>(`${Service._baseUrl}/${this.urlResource}/${codigo}/ativo`, novoStatus, options).pipe(map(() => null));
  }

  adicionar = (pessoa: Pessoa): Observable<Pessoa> => {
    return this.http.post<Pessoa>(`${Service._baseUrl}/${this.urlResource}`, pessoa);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${Service._baseUrl}/${this.urlResource}/${pessoa.codigo}`, pessoa);
  }

  buscarPorCodigo(codigo: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${Service._baseUrl}/${this.urlResource}/${codigo}`);
  }
}
