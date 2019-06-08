import { Injectable } from '@angular/core';
import { MoneyHttp } from '@app/modules/seguranca';
import { HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  lancamentosUrl: string;

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;
  }

  relatorioLancamentosPorPessoa(inicio: Date, fim: Date) {

    let params = new HttpParams();

    params = params.append('inicio', moment(inicio).format('YYYY-MM-DD'));
    params = params.append('fim', moment(fim).format('YYYY-MM-DD'));

    return this.http.get(`${this.lancamentosUrl}/relatorios/por-pessoa`,
      { params, responseType: 'blob' });

  }

}
