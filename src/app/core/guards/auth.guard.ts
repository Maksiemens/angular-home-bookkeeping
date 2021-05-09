import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromRoot.State>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(fromRoot.selectIsAuthenticated),
      map((isAuthed) => {
        if (isAuthed) {
          return true;
        } else {
          this.store.dispatch(fromRoot.loginRedirect());
          return false;
        }
      }),
      take(1),
    );
  }
}
