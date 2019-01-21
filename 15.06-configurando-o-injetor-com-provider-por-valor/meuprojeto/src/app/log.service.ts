import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    @Inject('LogPrefixo') private prefixo: string) { }

  log(msg: string) {
    console.log(`${this.prefixo}: ${msg}`);
  }
}
