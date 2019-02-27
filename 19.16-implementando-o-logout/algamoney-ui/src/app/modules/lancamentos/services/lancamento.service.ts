

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

  private urlResource = 'lancamentos';
  private DATE_FORMAT = 'YYYY-MM-DD';

  constructor(private http: MoneyHttp) { }

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

    return this.http.get<any>(`${Service._baseUrl}/${this.urlResource}?resumo`, { params }).pipe(map(resp => {

      const lancamentos = resp['content'];
      const total = resp['totalElements'];
      const resultado = {
        lancamentos,
        total
      };
      return resultado;
    }));
  }

  excluir = (codigo: number): Observable<void> => {
    return this.http.delete(`${Service._baseUrl}/${this.urlResource}/${codigo}`).map(() => null);
  }

  adicionar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.http.post<any>(`${Service._baseUrl}/${this.urlResource}`, lancamento);
  }

  atualizar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.http.put<Lancamento>(
            `${Service._baseUrl}/${this.urlResource}/${lancamento.codigo}`,
            lancamento).map(resp => {
              const lancamentoAlterado = <Lancamento>resp;

              this.converterStringsParaDatas([lancamentoAlterado]);

              return lancamentoAlterado;
          });
  }

  buscarPorCodigo = (codigo: number): Observable<Lancamento> => {
    return this.http.get<Lancamento>(`${Service._baseUrl}/${this.urlResource}/${codigo}`)
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
