import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';

export interface ICategoriaService {
  listarTodas(): Observable<Categoria[]>;
}
