import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {


  log(msg: string) {
    console.log(`LOG: ${msg}`);
  }
}
