import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from './cidade.interface';
import { ServiceAbstrat } from './service.abstract';
import { ICidadeService } from './icidade.service';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends ServiceAbstrat<Cidade> implements ICidadeService<Cidade> {

  private urlRersource = 'cidades';

  constructor(protected http: HttpClient) {
    super(http);
  }

  consultar = () => this.httpGet(this.urlRersource);

  adicionar = (cidade: Cidade) => this.httpPost(this.urlRersource, cidade);

  excluir = (cidade: Cidade) => this.httpDelete(this.urlRersource, cidade);

  atualizar = (cidade: Cidade) => this.httpPut(this.urlRersource, cidade);

}

