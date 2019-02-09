import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Service } from '../shared/services/service.abstract';
import { ICategoriaService } from './icategoria.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends Service implements ICategoriaService {

  private urlResource = 'categorias';

  constructor(protected http: HttpClient) {
    super(http);
  }

  listarTodas = () => {
    return this.httpGet(this.urlResource, this.httpHeaders)
      .pipe(map(categorias => this.toJson(categorias)
        .map(categoria => ({ label: categoria.nome, value: categoria.codigo}))));
  }

  /*
  listarTodas = () => {
    return this.httpGet(this.urlResource, this.httpHeaders)
      .map(resp =>  this.toJson(resp))
      .map(categorias => _.concat([{
        value: null,
        label: 'Escolha uma opção'
      }], categorias.map(categoria => {
        return {
          value: categoria.codigo,
          label: categoria.nome
        };
    })), 'label');
  }; */

  private toJson = (obj: any) =>  JSON.parse(JSON.stringify(obj));
}


