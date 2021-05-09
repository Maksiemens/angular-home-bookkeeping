import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { User } from '@app/shared/models/user.model';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { BrowserStorageService } from '@app/core/services/browser-storage.service';
import { FbAuth } from '@app/shared/models/fb-auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _tokenKey = 'bookkeeping-auth-token';
  private _tokenKeyExpiresInDate = 'bookkeeping-auth-token-expires-in-date';

  get token(): string {
    const currentDate = new Date();
    const expirationDate = new Date(
      this.browserStorageService.get(this._tokenKeyExpiresInDate)
    );

    if (currentDate > expirationDate) {
      this.logout();
      return '';
    } else {
      return this.browserStorageService.get(this._tokenKey);
    }
  }

  constructor(
    private http: HttpClient,
    private browserStorageService: BrowserStorageService
  ) {}

  login(user: User): Observable<User> {
    const payload = {
      ...user,
      returnSecureToken: true,
    };
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
        payload
      )
      .pipe(tap((response: any) => this.setToken(response)));
  }

  logout(): void {
    this.setToken(null);
  }

  logout$(): Observable<boolean> {
    this.logout();
    return this.isAuthenticated$();
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  isAuthenticated$(): Observable<boolean> {
    return of(this.isAuthenticated()).pipe(distinctUntilChanged());
  }

  private setToken(response: FbAuth | null): void {
    if (response) {
      const expiresInDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      this.browserStorageService.set(this._tokenKey, response.idToken);
      this.browserStorageService.set(
        this._tokenKeyExpiresInDate,
        expiresInDate.toString()
      );
    } else {
      this.browserStorageService.clear();
    }
  }

  registration(user: User): Observable<User> {
    const payload = {
      ...user,
      returnSecureToken: true,
    };
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`,
        payload
      )
      .pipe(tap((response: any) => this.setToken(response)));
  }

  updateAccountInfo(user: User): Observable<any> {
    const payload = {
      ...user,
      returnSecureToken: true,
    };
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${environment.firebaseConfig.apiKey}`,
      payload
    );
  }

  createUser(user: User): Observable<any> {
    const payload = {
      ...user,
      bill: 10000
    };
    return this.http.post(`${environment.firebaseRealtimeDataBase.url}/users.json`, payload);
  }

  loadUser(): Observable<any> {
    return this.http.get(`${environment.firebaseRealtimeDataBase.url}/users/${'-M_Hiskx6VCfRLTxpM8n'}.json`);
  }
}
