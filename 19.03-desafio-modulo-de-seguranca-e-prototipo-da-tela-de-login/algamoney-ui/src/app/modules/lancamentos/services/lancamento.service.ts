
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '@app/shared/services';
import { ILancamentoService } from '.';
import { LancamentoFiltro, Lancamento } from '../models';

import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService implements ILancamentoService {

  private urlRersource = 'lancamentos';
  private service: Service;
  private DATE_FORMAT = 'YYYY-MM-DD';

  constructor(private http: HttpClient) {
     this.service = new Service(http);
  }

  pesquisar = (filtro: LancamentoFiltro): Observable<any> => {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format(this.DATE_FORMAT));
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format(this.DATE_FORMAT));
    }

    return this.service.httpGet(`${this.urlRersource}?resumo`, this.service.headersAuthorization, params).pipe(map(resp => {
      const lancamentos = resp['content'];
      const resultado = {
        lancamentos,
        total: resp['totalElements'],
      };
      return resultado;
    }));
  }

  excluir = (codigo: number): Observable<void> => {
    return this.service.httpDelete(this.urlRersource, codigo, this.service.headersAuthorization).pipe(map(() => null));
  }

  adicionar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.service.httpPost(this.urlRersource, lancamento, this.service.headersAuthorizationContentTypeJson);
  }

  atualizar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.service.httpPut(
            `${this.urlRersource}/${lancamento.codigo}`,
            lancamento,
            this.service.headersAuthorizationContentTypeJson).pipe(map(resp => {
              const lancamentoAlterado = <Lancamento>resp;

              this.converterStringsParaDatas([lancamentoAlterado]);

              return lancamentoAlterado;
          }));
  }

  buscarPorCodigo = (codigo: number): Observable<Lancamento> => {
    return this.service.httpGet(`${this.urlRersource}/${codigo}` , this.service.headersAuthorization)
            .pipe(map(resp => {
              const lancamento = <Lancamento>resp;

              this.converterStringsParaDatas([lancamento]);

              return lancamento;
            }));
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    lancamentos.forEach(l => {
      l.dataVencimento = this.momentConvertStringToDate(l.dataVencimento, this.DATE_FORMAT);
      if (l.dataPagamento) {
        l.dataPagamento = this.momentConvertStringToDate(l.dataPagamento, this.DATE_FORMAT);
      }
    });
  }

  private momentConvertStringToDate = (date: any, dateFormat: string) =>
    moment(date, dateFormat).toDate()

}
