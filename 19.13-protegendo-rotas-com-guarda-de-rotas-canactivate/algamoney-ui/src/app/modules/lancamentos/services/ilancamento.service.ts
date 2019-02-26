import { Observable } from 'rxjs';
import { Lancamento } from '../models';

export interface ILancamentoService {
  pesquisar(filtro: any): Observable<any>;
  excluir(codigo: number): Observable<void>;
  adicionar(lancamento: Lancamento): Observable<Lancamento>;
  atualizar(lancamento: Lancamento): Observable<Lancamento>;
  buscarPorCodigo(codigo: number): Observable<Lancamento>;
}
