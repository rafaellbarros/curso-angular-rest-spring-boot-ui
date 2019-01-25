import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export interface IService {
    httpGet(urlResource: string, httpHeaders: HttpHeaders): any;
    httpPost(urlResource: string, object: any): any;
    httpDelete(urlResource: string, object: any): any;
    httpPut(urlResource: string, object: any): any;
}
