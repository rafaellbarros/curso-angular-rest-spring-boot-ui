import { FormControl } from '@angular/forms';
import { Contato } from '@app/modules/pessoas/models';

export interface IPessoaCadastroComponentImpl {
  prepararNovoContato(): void;
  confirmarContato(form: FormControl): void;
  prepararEdicaoContato(contato: Contato, index: number): void;
  removerContato(index: number): void;
  salvar(form: FormControl): void;
  adicionarPessoa(form: FormControl): void;
  atualizarPessoa(form: FormControl): void;
  nova(form: FormControl): void;
}
