import { Observable } from 'rxjs';

export interface IService {
    consultar(): Observable<any>;
    adicionar(object: any): Observable<any>;
    excluir(id: number): Observable<any>;
    atualizar(object: any): Observable<any>;
}
