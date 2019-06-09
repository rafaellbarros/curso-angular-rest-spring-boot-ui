import { FormControl } from '@angular/forms';
import { Contato } from '@app/modules/pessoas/models';

export interface IPessoaCadastroComponentImpl {

  salvar(form: FormControl): void;
  adicionarPessoa(form: FormControl): void;
  atualizarPessoa(form: FormControl): void;
  nova(form: FormControl): void;
}
