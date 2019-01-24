import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBase {
  private _urlBase = 'http://localhost:3000/cidades';

  get getUrl() {
    return this._urlBase;
  }
}
