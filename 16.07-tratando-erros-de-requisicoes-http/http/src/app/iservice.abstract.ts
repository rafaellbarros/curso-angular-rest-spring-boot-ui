import { Observable } from 'rxjs';

export interface IServiceAbstract<T> {
    httpGet(urlResource: string): Observable<T>;
    httpPost(urlResource: string, object: T): Observable<T>;
    httpDelete(urlResource: string, object: T): Observable<T>;
    httpPut(urlResource: string, object: T): Observable<T>;
}
