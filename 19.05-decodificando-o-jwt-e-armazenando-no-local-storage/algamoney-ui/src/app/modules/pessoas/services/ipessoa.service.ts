import { Pessoa } from '@pessoas/models';
import { Observable } from 'rxjs/Observable';

export interface IPessoaService {
  pesquisar(filtro: any): Observable<any>;
  listarTodas(): Observable<Pessoa[]>;
  excluir(codigo: number): Observable<void>;
  mudarStatus(codigo: number, novoStatus: boolean): Observable<void>;
  adicionar(pessoa: Pessoa): Observable<Pessoa>;
  atualizar(pessoa: Pessoa): Observable<Pessoa>;
  buscarPorCodigo(codigo: number): Observable<Pessoa>;
}
