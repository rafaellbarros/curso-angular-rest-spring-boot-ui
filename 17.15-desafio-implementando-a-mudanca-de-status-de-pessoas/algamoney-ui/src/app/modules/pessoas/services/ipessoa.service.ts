import { Pessoa } from '../models';

export interface IPessoaService {
  pesquisar(filtro: any): any;
  listarTodas(): any;
  excluir(codigo: number): any;
  mudarStatus(codigo: number, novoStatus: boolean): any;
}
