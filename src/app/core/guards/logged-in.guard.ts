import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import * as fromRoot from '@app/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
    return this.store.pipe(
      select(fromRoot.selectIsAuthenticated),
      map((isAuthed) => {
        if (isAuthed) {
          this.store.dispatch(fromRoot.loginSuccess());
          return false;
        } else {
          return true;
        }
      }),
      take(1),
    );
  }
}
