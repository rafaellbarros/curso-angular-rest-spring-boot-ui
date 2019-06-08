import { FormControl } from '@angular/forms';

export interface IPessoaCadastroComponentImpl {
  prepararNovoContato(): void;
  salvar(form: FormControl): void;
  adicionarPessoa(form: FormControl): void;
  atualizarPessoa(form: FormControl): void;
  nova(form: FormControl): void;
}
