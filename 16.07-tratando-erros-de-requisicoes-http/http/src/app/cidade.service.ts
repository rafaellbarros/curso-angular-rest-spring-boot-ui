import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceAbstrat } from './service.abstract';
import { UrlBase } from './urlbase';


@Injectable({
  providedIn: 'root'
})
export class CidadeService extends ServiceAbstrat {

  constructor(protected http: HttpClient, protected urlBase: UrlBase) {
    super(http, urlBase.getUrl);
  }

}
