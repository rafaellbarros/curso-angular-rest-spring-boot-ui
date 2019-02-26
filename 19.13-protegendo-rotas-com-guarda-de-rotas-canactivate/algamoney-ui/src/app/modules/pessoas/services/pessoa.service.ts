
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
  private service: Service;

  constructor(private http: MoneyHttp) {
     this.service = new Service(http);
  }

  pesquisar = (filtro: PessoaFiltro): Observable<any> => {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.service.httpGet(`${this.urlResource}`, null, params).map(resp => {

      const pessoas = resp['content'];
      const total = resp['totalElements'];
      const resultado = {
        pessoas,
        total: total
      };
      return resultado;
    });
  }

  listarTodas = (): Observable<any> => {
    return this.service.httpGet(this.urlResource, null)
      .pipe(map(pessoas => {
        // const { content } = pessoas;
        return pessoas['content'];
      }));
  }

  excluir = (codigo: number): Observable<void> =>
    this.service.httpDelete(this.urlResource, codigo,  null).pipe(map(() => null))

  mudarStatus = (codigo: number, novoStatus: boolean) => {
    return this.service.httpPut(`${this.urlResource}/${codigo}/ativo`, novoStatus,
      new HttpHeaders({'Content-Type' : 'application/json'})).pipe(map(() => null));
  }

  adicionar = (pessoa: Pessoa): Observable<Pessoa> => {
    return this.service.httpPost(this.urlResource, pessoa, null);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.service.httpPut(`${this.urlResource}/${pessoa.codigo}`, pessoa, null);
  }

  buscarPorCodigo(codigo: number): Observable<Pessoa> {
    return this.service.httpGet(`${this.urlResource}/${codigo}`, null);
  }
}
