import { Pessoa } from '@app/modules/pessoas/models';
import { Categoria } from '@app/categorias/categoria.model';

export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}
