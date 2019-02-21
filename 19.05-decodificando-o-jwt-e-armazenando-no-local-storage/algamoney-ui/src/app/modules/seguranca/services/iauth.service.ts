import { Observable } from 'rxjs/Observable';

export interface IAuthService {
  login(usuario: string, senha: string): Observable<void>;
}
