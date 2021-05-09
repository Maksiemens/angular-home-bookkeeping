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

  get token(): string {
    return this.browserStorageService.get(this._tokenKey);
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

  logout(): Observable<any> {
    this.setToken(null);
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
      this.browserStorageService.set(this._tokenKey, response.idToken);
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
}
