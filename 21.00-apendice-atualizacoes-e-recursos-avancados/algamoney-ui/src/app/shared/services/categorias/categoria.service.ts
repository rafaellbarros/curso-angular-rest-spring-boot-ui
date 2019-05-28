import { Injectable } from '@angular/core';
import { MoneyHttp } from '@app/modules/seguranca/money-http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Categoria } from './categoria.model';
import { ICategoriaService } from './icategoria.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService implements ICategoriaService {

  private categoriasUrl: string;

  constructor(private http: MoneyHttp) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas = (): Observable<Categoria[]> => {
    return this.http.get<Categoria[]>(this.categoriasUrl)
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


