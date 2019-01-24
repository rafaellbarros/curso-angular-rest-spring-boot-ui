
export interface ICidadeService<T> {
  consultar();
  adicionar(object: T);
  excluir(object: T);
  atualizar(object: T);
}
