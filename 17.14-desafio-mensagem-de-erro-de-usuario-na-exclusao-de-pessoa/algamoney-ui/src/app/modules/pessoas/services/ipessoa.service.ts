
export interface IPessoaService {
  pesquisar(filtro: any): any;
  listarTodas(): any;
  excluir(codigo: number): any;
}
