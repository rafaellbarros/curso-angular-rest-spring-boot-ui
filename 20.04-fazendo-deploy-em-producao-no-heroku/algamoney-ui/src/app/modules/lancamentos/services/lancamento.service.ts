import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoneyHttp } from '@app/modules/seguranca/money-http';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILancamentoService } from '.';
import { Lancamento, LancamentoFiltro } from '../models';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService implements ILancamentoService {

  private lancamentosUrl: string;
  private DATE_FORMAT: string;

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;
    this.DATE_FORMAT = 'YYYY-MM-DD';
  }

  pesquisar = (filtro: LancamentoFiltro): Observable<any> => {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format(this.DATE_FORMAT));
    }

    if (filtro.dataVencimentoFim) {
      params = params.append('dataVencimentoAte', moment(filtro.dataVencimentoFim).format(this.DATE_FORMAT));
    }

    return this.http.get<any>(`${this.lancamentosUrl}?resumo`, { params }).pipe(map(resp => {

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
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`).map(() => null);
  }

  adicionar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.http.post<any>(this.lancamentosUrl, lancamento);
  }

  atualizar = (lancamento: Lancamento): Observable<Lancamento> => {
    return this.http.put<Lancamento>(
            `${this.lancamentosUrl}/${lancamento.codigo}`,
            lancamento).map(resp => {
              const lancamentoAlterado = <Lancamento>resp;

              this.converterStringsParaDatas([lancamentoAlterado]);

              return lancamentoAlterado;
          });
  }

  buscarPorCodigo = (codigo: number): Observable<Lancamento> => {
    return this.http.get<Lancamento>(`${this.lancamentosUrl}/${codigo}`)
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
