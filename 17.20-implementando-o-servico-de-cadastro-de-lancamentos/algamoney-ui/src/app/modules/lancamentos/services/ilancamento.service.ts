import { Lancamento } from '../models';

export interface ILancamentoService {
  pesquisar(filtro: any): any;
  excluir(codigo: number): any;
  adicionar(lancamento: Lancamento);
}
