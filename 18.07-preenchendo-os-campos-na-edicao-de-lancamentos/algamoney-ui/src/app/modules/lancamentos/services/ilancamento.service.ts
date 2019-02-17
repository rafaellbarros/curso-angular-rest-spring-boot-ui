import { Observable } from 'rxjs';
import { Lancamento } from '../models';

export interface ILancamentoService {
  pesquisar(filtro: any): any
  excluir(codigo: number): Observable<void>
  adicionar(lancamento: Lancamento): Observable<Lancamento>
  atualizar(lancamento: Lancamento): Observable<Lancamento>
  buscarPorCodigo(codigo: number): Observable<Lancamento>
}
