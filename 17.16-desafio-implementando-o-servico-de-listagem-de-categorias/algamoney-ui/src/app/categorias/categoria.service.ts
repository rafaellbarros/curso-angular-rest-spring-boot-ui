import { Injectable } from '@angular/core';
import { Service } from '../shared/services/service.abstract';
import { ICategoriaService } from './icategoria.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends Service implements ICategoriaService {

  private urlResource = 'categorias';

  constructor(protected http: HttpClient) {
    super(http);
  }

  listarTodas = () => this.httpGet(this.urlResource, this.httpHeaders);

}
