
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '@app/shared/services';
import { map } from 'rxjs/operators';
import { IPessoaService } from '.';
import { PessoaFiltro } from '../models';
import { Pessoa } from '@pessoas/models';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends Service implements IPessoaService {

  private urlResource = 'pessoas';

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

    return this.httpGet(`${this.urlResource}`, this.headersAuthorization, params).pipe(map(resp => {
      const pessoas = resp['content'];
      const resultado = {
        pessoas,
        total: resp['totalElements'],
      };
      return resultado;
    }));
  }

  listarTodas = () => {
    return this.httpGet(this.urlResource, this.headersAuthorization)
      .pipe(map(pessoas => this.toJson(pessoas['content'])));
  }

  excluir = (codigo: number) => this.httpDelete(this.urlResource, codigo,  this.headersAuthorization).pipe(map(() => {}));

  mudarStatus = (codigo: number, novoStatus: boolean) => {
    return  this.httpPut(`${this.urlResource}/${codigo}/ativo`, novoStatus,
      this.headersAuthorizationAndContentTypeAppJson).pipe(map(() => {}));
  }

  adicionar = (pessoa: Pessoa) => {
    return this.httpPost(this.urlResource, JSON.stringify(pessoa), this.headersAuthorizationAndContentTypeAppJson);
  }
}
