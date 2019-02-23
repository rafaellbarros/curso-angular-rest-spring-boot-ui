import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IService {
    httpGet(urlResource: string, httpHeaders?: HttpHeaders): Observable<any>;
    httpPost(urlResource: string, object: any, httpHeaders?: HttpHeaders): Observable<any>;
    httpDelete(urlResource: string, codigo: number,  httpHeaders?: HttpHeaders): Observable<any>;
    httpPut(urlResource: string, object: any, httpHeaders?: HttpHeaders): Observable<any>;
}
