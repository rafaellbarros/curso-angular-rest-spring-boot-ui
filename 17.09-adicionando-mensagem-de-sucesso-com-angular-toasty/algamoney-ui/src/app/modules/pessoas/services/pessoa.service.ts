
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '@app/shared/services';
import { map } from 'rxjs/operators';
import { IPessoaService } from '.';
import { PessoaFiltro } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends Service implements IPessoaService {

  private urlRersource = 'pessoas';
  private headers =  new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  constructor(protected http: HttpClient) {
    super(http);
  }

  pesquisar = (filtro: PessoaFiltro) => {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.httpGet(`${this.urlRersource}`, this.headers, params).pipe(map(resp => {
      const pessoas = resp['content'];
      const resultado = {
        pessoas,
        total: resp['totalElements'],
      };
      return resultado;
    }));
  }

  listarTodas() {
    return this.httpGet(this.urlRersource, this.headers).pipe(map(resp => resp['content']));
  }

}
