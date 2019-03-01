import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { MoneyHttp } from '../money-http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private tokensRevokeUrl: string;

  constructor(
    private http: MoneyHttp,
    private auth: AuthService
    ) {
       this.tokensRevokeUrl = `${environment.apiUrl}/tokens/revoke`;
    }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .pipe(map(() => {
        this.auth.limparAccessToken();
      }));
  }
}
