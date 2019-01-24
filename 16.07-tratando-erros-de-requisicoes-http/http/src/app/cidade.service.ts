import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ServiceAbstrat } from './service.abstract';
import { Cidade } from './cidade.interface';




@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private urlBase = 'http://localhost:3000';
  private urlRersource = 'cidades';
  private serviceAbastract: ServiceAbstrat<Cidade>;

  constructor(private http: HttpClient) {
    this.serviceAbastract = new ServiceAbstrat<Cidade>(this.http, this.urlBase);
  }

  consultar = () => this.serviceAbastract.read(this.urlRersource);

  adicionar = (cidade: Cidade) => this.serviceAbastract.create(this.urlRersource, cidade);

  excluir = (cidade: Cidade) => this.serviceAbastract.delete(this.urlRersource, cidade);

  atualizar = (cidade: Cidade) => this.serviceAbastract.update(this.urlRersource, cidade);

}

