import { HttpHeaders } from '@angular/common/http';

export interface IService {
    httpGet(urlResource: string, httpHeaders?: HttpHeaders): any;
    httpPost(urlResource: string, object: any, httpHeaders?: HttpHeaders): any;
    httpDelete(urlResource: string, codigo: number,  httpHeaders?: HttpHeaders): any;
    httpPut(urlResource: string, object: any, httpHeaders?: HttpHeaders): any;
}
