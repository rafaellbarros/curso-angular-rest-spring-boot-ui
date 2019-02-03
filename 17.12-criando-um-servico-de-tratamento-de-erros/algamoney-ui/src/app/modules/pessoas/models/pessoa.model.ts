export interface Pessoa {
  codigo: number;
  nome: string;
  endereco: Endereco;
  ativo: boolean;
}

interface Endereco {
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  estado: string;
  logradouro: string;
}
