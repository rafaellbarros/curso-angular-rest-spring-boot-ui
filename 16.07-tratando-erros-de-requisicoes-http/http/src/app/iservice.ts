import { Observable } from 'rxjs';

export interface IService<T> {
    read(urlResource: string): Observable<T>;
    create(urlResource: string, object: T): Observable<T>;
    delete(urlResource: string, object: T): Observable<T>;
    update(urlResource: string, object: T): Observable<T>;
}
