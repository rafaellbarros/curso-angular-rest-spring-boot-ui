

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoneyHttp } from '@app/modules/seguranca/money-http';
import { Service } from '@app/shared/services';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ILancamentoService } from '.';
import { Lancamento, LancamentoFiltro } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService implements ILancamentoService {

  private urlRersource = 'lancamentos';
  private service: Service;
  private DATE_FORMAT = 'YYYY-MM-DD';

  constructor(private http: MoneyHttp) {
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

    return this.service.httpGet(`${this.urlRersource}?resumo`, null, params).pipe(map(resp => {

      const lancamentos = resp['content'];
      const resultado = {
        lancamentos,
        total: resp['totalElements'],
      };
      return resultado;
    }));
  }

  excluir = (codigo: number): Observable<void> => {
    return this.service.httpDelete(this.urlRersource, codigo, null).map(() => null);
  }

  adicionar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.service.httpPost(this.urlRersource, lancamento, null);
  }

  atualizar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.service.httpPut(
            `${this.urlRersource}/${lancamento.codigo}`,
            lancamento,
            null).map(resp => {
              const lancamentoAlterado = <Lancamento>resp;

              this.converterStringsParaDatas([lancamentoAlterado]);

              return lancamentoAlterado;
          });
  }

  buscarPorCodigo = (codigo: number): Observable<Lancamento> => {
    return this.service.httpGet(`${this.urlRersource}/${codigo}` , null)
            .map(resp => {
              const lancamento = <Lancamento>resp;

              this.converterStringsParaDatas([lancamento]);

              return lancamento;
            });
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
