import { Injectable } from '@angular/core';
import { MoneyHttp } from '../money-http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = 'http://localhost:8080/tokens/revoke';

  constructor(private http: MoneyHttp, private auth: AuthService) { }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .pipe(map(resp => {
        this.auth.limparAccessToken();
      }));
  }
}
