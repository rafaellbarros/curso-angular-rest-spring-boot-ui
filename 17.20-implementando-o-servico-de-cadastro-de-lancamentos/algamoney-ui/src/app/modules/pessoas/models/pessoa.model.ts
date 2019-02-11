export class Pessoa {
  codigo: number;
  nome: string;
  endereco: Endereco;
  ativo: boolean;
}

class Endereco {
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  estado: string;
  logradouro: string;
}
