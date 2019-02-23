import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Service } from '../shared/services/service';
import { ICategoriaService } from './icategoria.service';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService implements ICategoriaService {

  private urlResource = 'categorias';
  private service: Service;

  constructor(private http: HttpClient) {
    this.service = new Service(http);
  }

  listarTodas = (): Observable<Categoria[]> => {
    return this.service.httpGet(this.urlResource, this.service.headersAuthorization)
      .pipe(map(categorias => categorias));
  }

  /*
  listarTodas = (): Observable<Categoria[]> => {
    return this.service.httpGet(this.urlResource, this.service.headersAuthorization)
      .pipe(map(categorias => {
         return this.service.toJson(categorias)
        .map(categoria => ({ label: categoria.nome, value: categoria.codigo}));
      }));
  }
  */
  /*
  listarTodas = () => {
    return this.service..httpGet(this.urlResource, this.httpHeaders)
      .map(resp =>  this.service..toJson(resp))
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

}


