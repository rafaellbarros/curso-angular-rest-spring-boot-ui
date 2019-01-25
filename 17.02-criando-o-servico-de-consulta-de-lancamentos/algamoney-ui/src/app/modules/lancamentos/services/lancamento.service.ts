
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '@app/shared/services';
import { ILancamentoService } from '.';
import { Lancamento } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends Service implements ILancamentoService {

  private urlRersource = 'lancamentos';

  constructor(protected http: HttpClient) {
    super(http);
  }

  pesquisar = () => {
    const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    return this.httpGet(`${this.urlRersource}?resumo`, headers);
  };

  // adicionar = (cidade: Cidade) => this.httpPost(this.urlRersource, cidade);

  // excluir = (cidade: Cidade) => this.httpDelete(this.urlRersource, cidade);

  //atualizar = (cidade: Cidade) => this.httpPut(this.urlRersource, cidade);
}
