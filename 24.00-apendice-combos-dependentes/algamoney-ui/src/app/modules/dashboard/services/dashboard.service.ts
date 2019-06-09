import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { MoneyHttp } from '@app/modules/seguranca';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  lancamentosUrl: string;

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;
  }

  lancamentoPorCategoria(): Observable<any> {
    return this.http.get(`${this.lancamentosUrl}/estatisticas/por-categoria`);
  }

  lancamentoPorDia(): Observable<any> {
    return this.http.get(`${this.lancamentosUrl}/estatisticas/por-dia`).pipe(map(resp => {
      this.converterStringsParaDatas(resp);
      return resp;
    }));
  }

  private converterStringsParaDatas(dados: Array<any>) {
    for (const dado of dados) {
      dado.dia = moment(dado.dia, 'YYYY-MM-DD').toDate();
    }
  }
}
