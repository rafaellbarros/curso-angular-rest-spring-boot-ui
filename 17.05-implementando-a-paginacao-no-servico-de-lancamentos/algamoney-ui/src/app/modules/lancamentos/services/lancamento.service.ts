
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '@app/shared/services';
import { ILancamentoService } from '.';
import { LancamentoFiltro } from '../models';

import * as moment from 'moment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends Service implements ILancamentoService {

  private urlRersource = 'lancamentos';

  constructor(protected http: HttpClient) {
    super(http);
  }

  pesquisar = (filtro: LancamentoFiltro) => {
    const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      console.log(moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'))
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      console.log(moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'))
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.httpGet(`${this.urlRersource}?resumo`, headers, params).pipe(map(resp => {
      const lancamentos = resp['content'];
      const resultado = {
        lancamentos,
        total: resp['totalElements'],
      };
      return resultado;
    }));
  }

}
