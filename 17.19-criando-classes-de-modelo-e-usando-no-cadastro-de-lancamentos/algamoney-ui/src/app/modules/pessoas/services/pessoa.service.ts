
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

  private urlResource = 'pessoas';
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

    return this.httpGet(`${this.urlResource}`, this.headers, params).pipe(map(resp => {
      const pessoas = resp['content'];
      const resultado = {
        pessoas,
        total: resp['totalElements'],
      };
      return resultado;
    }));
  }

  listarTodas = () => {
    return this.httpGet(this.urlResource, this.httpHeaders)
      .pipe(map(pessoas => this.toJson(pessoas['content'])));
  }

  excluir = (codigo: number) => this.httpDelete(this.urlResource, codigo,  this.headers).pipe(map(() => {}));

  mudarStatus = (codigo: number, novoStatus: boolean) => {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers = headers.set('Content-Type', 'application/json');
    return  this.httpPut(`${this.urlResource}/${codigo}/ativo`, novoStatus, headers).pipe(map(() => {}));
  }
}
